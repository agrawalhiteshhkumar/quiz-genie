import React, { useState } from 'react';
import { DPHARM_QUESTIONS } from '../data/questions';
import { Subject, OptionKey } from '../types/quiz';
import { useLiveQuiz } from '../context/LiveQuizContext';
import { AcademicEndorsementSeal } from './AcademicEndorsementSeal';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Filter,
  BarChart3,
  BookOpen,
  Info,
  Bookmark,
  Sparkles,
  TrendingUp,
  Award,
  ChevronRight,
  ShieldCheck,
  Flame
} from 'lucide-react';
import { soundEffects } from '../utils/audio';

export const PracticeView: React.FC = () => {
  const {
    bookmarkedQuestionIds,
    toggleBookmark,
    isBookmarked,
    studentProfile,
    openAuthModal
  } = useLiveQuiz();

  const [selectedSubject, setSelectedSubject] = useState<Subject | 'All'>('All');
  const [viewOnlyBookmarks, setViewOnlyBookmarks] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, OptionKey>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);

  // Compute filtered questions based on subject & bookmarks
  const baseQuestions = selectedSubject === 'All'
    ? DPHARM_QUESTIONS
    : DPHARM_QUESTIONS.filter((q) => q.subject === selectedSubject);

  const filteredQuestions = viewOnlyBookmarks
    ? baseQuestions.filter((q) => bookmarkedQuestionIds.includes(q.id))
    : baseQuestions;

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];
  const isQuestionBookmarked = currentQ ? isBookmarked(currentQ.id) : false;

  const handleSelectOption = (qId: string, optKey: OptionKey) => {
    if (isTestSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optKey }));
    setShowExplanation((prev) => ({ ...prev, [qId]: true }));

    if (currentQ && optKey === currentQ.correctKey) {
      soundEffects.playCorrect();
    } else {
      soundEffects.playWrong();
    }
  };

  const resetPractice = () => {
    setUserAnswers({});
    setShowExplanation({});
    setCurrentIndex(0);
    setIsTestSubmitted(false);
  };

  // Performance calculations
  const totalQuestions = filteredQuestions.length;
  const answeredCount = Object.keys(userAnswers).filter(id => filteredQuestions.some(q => q.id === id)).length;
  let correctCount = 0;
  filteredQuestions.forEach((q) => {
    if (userAnswers[q.id] === q.correctKey) correctCount++;
  });
  const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const isPassed = scorePercent >= 50;

  // Global Readiness score based on all answered questions
  const totalAnsweredGlobal = Object.keys(userAnswers).length;
  let totalCorrectGlobal = 0;
  DPHARM_QUESTIONS.forEach((q) => {
    if (userAnswers[q.id] === q.correctKey) totalCorrectGlobal++;
  });
  const globalReadinessRate = totalAnsweredGlobal > 0
    ? Math.round((totalCorrectGlobal / DPHARM_QUESTIONS.length) * 100)
    : 15; // baseline

  const subjectsList: (Subject | 'All')[] = [
    'All',
    'Pharmaceutics',
    'Pharmacology',
    'Pharmacognosy',
    'Pharmaceutical Chemistry',
    'Pharmacy Law & Ethics',
    'Clinical Pharmacy',
  ];

  const currentAnswer = currentQ ? userAnswers[currentQ.id] : null;
  const isCurrentCorrect = currentQ && currentAnswer === currentQ.correctKey;

  const getCognitiveBadge = (bloom: string) => {
    switch (bloom) {
      case 'Analyze':
        return { label: 'Toxicology & Root Defect Analysis', color: 'bg-purple-50 text-purple-700 border-purple-200' };
      case 'Apply':
        return { label: 'Clinical Emergency Protocol', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' };
      case 'Remember':
        return { label: 'IP Monograph & Schedule Recall', color: 'bg-blue-50 text-blue-700 border-blue-200' };
      case 'Evaluate':
        return { label: 'Drug Interaction Risk Assessment', color: 'bg-amber-50 text-amber-800 border-amber-200' };
      case 'Understand':
        return { label: 'Biochemical Mechanism & SAR', color: 'bg-teal-50 text-teal-800 border-teal-200' };
      default:
        return { label: 'Core PCI Competency', color: 'bg-slate-50 text-slate-700 border-slate-200' };
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-4 sm:py-8 space-y-6 bg-slate-50 min-h-screen pb-20 sm:pb-8">
      {/* Mobile Sticky Assessment Header Strip */}
      <div className="sticky top-16 z-30 sm:hidden -mx-4 px-4 py-2 bg-white/95 backdrop-blur-md border-b border-slate-200 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-black text-blue-700">
            Q {currentIndex + 1}/{filteredQuestions.length || 1}
          </span>
          <span className="text-[10px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded">
            +1 / 0 Marks
          </span>
        </div>

        <div className="flex items-center gap-2">
          {currentQ && (
            <button
              onClick={() => toggleBookmark(currentQ.id)}
              className={`p-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                isQuestionBookmarked
                  ? 'bg-amber-50 border-amber-300 text-amber-900'
                  : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}
              title="Bookmark this question"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isQuestionBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
            </button>
          )}

          <div className="font-mono font-black text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
            Score: {correctCount} / {answeredCount}
          </div>
        </div>
      </div>

      {/* Exit Exam Readiness Meter Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
            <TrendingUp className="w-5 h-5 text-blue-700" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                PCI Exit Exam Readiness Index
              </span>
              <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                Passing Benchmark: 50%
              </span>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <div className="w-36 sm:w-56 h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.max(10, globalReadinessRate))}%` }}
                />
              </div>
              <span className="font-mono font-black text-sm text-slate-900">
                {globalReadinessRate}% Readiness
              </span>
            </div>
          </div>
        </div>

        {/* Student Session Link */}
        <div className="text-right w-full md:w-auto">
          {studentProfile ? (
            <div className="text-xs text-slate-600">
              Session tied to: <strong className="text-slate-900">{studentProfile.fullName}</strong>
            </div>
          ) : (
            <button
              onClick={openAuthModal}
              className="text-xs font-bold text-blue-700 hover:text-blue-800 underline flex items-center gap-1 cursor-pointer"
            >
              <span>Sign In with Email OTP to Save Progress</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Practice Header & Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider">
              Solo Exit Exam Simulation
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-600 font-medium">PCI ER-2020 Blueprint</span>
            <span className="text-slate-300">·</span>
            <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
              Scoring: +1 / 0 (No Negative Marking)
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Self-Paced Practice Drill &amp; Clinical Rationales
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Test yourself with instant feedback, Bloom&apos;s taxonomy insights, and Indian Pharmacopoeia monographs.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={resetPractice}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>Reset Drill</span>
          </button>

          {!isTestSubmitted && answeredCount > 0 && (
            <button
              onClick={() => setIsTestSubmitted(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-md shadow-blue-600/25 cursor-pointer"
            >
              <BarChart3 className="w-4 h-4" />
              <span>Submit &amp; View Scorecard</span>
            </button>
          )}
        </div>
      </div>

      {/* Mode Toggle: All Questions vs Bookmarked Questions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
        {/* Revision Mode Switcher */}
        <div className="inline-flex p-1 bg-slate-100 border border-slate-200 rounded-xl">
          <button
            type="button"
            onClick={() => {
              setViewOnlyBookmarks(false);
              setCurrentIndex(0);
            }}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              !viewOnlyBookmarks
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Practice All Questions ({DPHARM_QUESTIONS.length})
          </button>
          <button
            type="button"
            onClick={() => {
              setViewOnlyBookmarks(true);
              setCurrentIndex(0);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              viewOnlyBookmarks
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${viewOnlyBookmarks ? 'fill-slate-950' : 'text-amber-500'}`} />
            <span>My Bookmarked Revision ({bookmarkedQuestionIds.length})</span>
          </button>
        </div>

        {/* Subject Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          <span className="text-xs text-slate-600 font-bold px-1 shrink-0 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-blue-600" />
            <span>Subject:</span>
          </span>
          {subjectsList.map((sub) => (
            <button
              key={sub}
              onClick={() => {
                setSelectedSubject(sub);
                setCurrentIndex(0);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer shadow-2xs ${
                selectedSubject === sub
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* Scorecard Modal/Card when submitted */}
      {isTestSubmitted && (
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center font-mono font-black text-2xl shadow-sm ${
                  isPassed
                    ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                    : 'bg-rose-600 text-white shadow-rose-600/20'
                }`}
              >
                {scorePercent}%
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-extrabold text-slate-900">
                    {isPassed ? 'Exit Exam Qualified (PASS)' : 'Needs Revision (FAIL)'}
                  </h2>
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-bold ${
                      isPassed
                        ? 'bg-emerald-50 border border-emerald-300 text-emerald-800'
                        : 'bg-rose-50 border border-rose-300 text-rose-800'
                    }`}
                  >
                    PCI Criteria: 50%
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  You scored <strong className="text-slate-900 font-bold">{correctCount} of {totalQuestions} Marks</strong> (Scoring: +1 / 0, No Negative Marking) in {selectedSubject} module.
                </p>
              </div>
            </div>

            <button
              onClick={resetPractice}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              Retake Practice Drill
            </button>
          </div>

          {/* Academic Endorsement on Official Scorecard */}
          <div className="pt-2">
            <AcademicEndorsementSeal compact />
          </div>
        </div>
      )}

      {/* Question Card */}
      {filteredQuestions.length > 0 && currentQ ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-sm space-y-6">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                {currentQ.subject}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-700 font-semibold">{currentQ.topic}</span>
              <span className="text-slate-300">·</span>
              {/* Cognitive Competency Tag */}
              <span className={`font-mono font-bold text-[11px] px-2 py-0.5 rounded border ${getCognitiveBadge(currentQ.bloomTaxonomy).color}`}>
                Cognitive Skill: {getCognitiveBadge(currentQ.bloomTaxonomy).label}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              {/* One-Tap Bookmark Icon Button */}
              <button
                type="button"
                onClick={() => toggleBookmark(currentQ.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border font-bold transition-all cursor-pointer ${
                  isQuestionBookmarked
                    ? 'bg-amber-50 border-amber-300 text-amber-900 shadow-2xs'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
                title="Bookmark for quick revision"
              >
                <Bookmark className={`w-3.5 h-3.5 ${isQuestionBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                <span>{isQuestionBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
              </button>

              <span className="font-mono font-bold text-slate-500 ml-1">
                Question {currentIndex + 1} of {filteredQuestions.length}
              </span>
            </div>
          </div>

          {/* Question Text */}
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
            {currentQ.question}
          </h2>

          {/* Options with 52px Minimum Height for Touch-Ergonomics */}
          <div className="space-y-3">
            {currentQ.options.map((opt) => {
              const selectedKey = userAnswers[currentQ.id];
              const isSelected = selectedKey === opt.key;
              const isRevealed = !!showExplanation[currentQ.id];
              const isCorrectOpt = opt.key === currentQ.correctKey;

              let style = 'bg-white border-slate-200 text-slate-800 hover:border-blue-300 hover:bg-slate-50/70 shadow-2xs';
              let badge = 'bg-slate-100 border-slate-300 text-slate-700';
              let tagText: string | null = null;

              if (isRevealed) {
                if (isCorrectOpt) {
                  style = 'bg-emerald-50/90 border-2 border-emerald-500 text-emerald-950 font-medium shadow-xs';
                  badge = 'bg-emerald-600 text-white font-bold border-emerald-600';
                  tagText = '✓ Correct Answer';
                } else if (isSelected && !isCorrectOpt) {
                  style = 'bg-rose-50/90 border-2 border-rose-500 text-rose-950 shadow-xs';
                  badge = 'bg-rose-600 text-white font-bold border-rose-600';
                  tagText = '✕ Your Choice';
                } else {
                  style = 'bg-slate-50/50 border-slate-200 text-slate-400 opacity-60';
                  badge = 'bg-slate-100 border-slate-200 text-slate-400';
                }
              }

              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => handleSelectOption(currentQ.id, opt.key)}
                  className={`w-full text-left p-4 min-h-[52px] rounded-xl border transition-all flex items-start justify-between gap-3.5 cursor-pointer touch-manipulation active:scale-[0.99] ${style}`}
                >
                  <div className="flex items-start gap-3.5">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 border mt-0.5 ${badge}`}>
                      {opt.key}
                    </span>
                    <span className="text-sm sm:text-base leading-relaxed pt-0.5">
                      {opt.text}
                    </span>
                  </div>

                  {tagText && (
                    <span
                      className={`shrink-0 text-xs font-bold px-2 py-0.5 rounded mt-0.5 ${
                        isCorrectOpt
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-rose-100 text-rose-800 border border-rose-300'
                      }`}
                    >
                      {tagText}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & In-Depth Clinical Rationale */}
          {showExplanation[currentQ.id] && (
            <div className="space-y-4 pt-2">
              <div
                className={`p-4 rounded-xl border-2 flex items-center justify-between ${
                  isCurrentCorrect
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                    : 'bg-rose-50 border-rose-500 text-rose-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  {isCurrentCorrect ? (
                    <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
                  ) : (
                    <XCircle className="w-7 h-7 text-rose-600 shrink-0" />
                  )}
                  <div>
                    <div className="font-black text-base tracking-wide">
                      {isCurrentCorrect ? '✓ CORRECT ANSWER (+1 PT)' : '✕ WRONG ANSWER (0 PTS)'}
                    </div>
                    <div className="text-xs text-slate-700 font-medium mt-0.5">
                      {isCurrentCorrect
                        ? `Well done! +1 Mark awarded. Option (${currentQ.correctKey}) is the correct standard.`
                        : `0 Marks (No negative marking). Option (${currentQ.correctKey}) is the correct answer — highlighted in emerald green above.`}
                    </div>
                  </div>
                </div>
              </div>

              {/* Monograph & Clinical notes */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>Clinical &amp; Pharmaceutical Explanation</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {currentQ.explanation}
                </p>
                <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 text-amber-800 font-medium">
                    <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span><strong>Clinical Key Point:</strong> {currentQ.clinicalKeyPoint}</span>
                  </div>
                  <div className="text-slate-500 font-mono text-[11px] shrink-0 font-medium">
                    {currentQ.pciReference}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="px-4 py-2.5 min-h-[44px] rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-xs font-bold text-slate-700 transition-colors cursor-pointer shadow-xs"
            >
              ← Previous
            </button>

            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-[280px] sm:max-w-none px-1">
              {filteredQuestions.map((q, idx) => {
                const ans = userAnswers[q.id];
                const isCurrent = idx === currentIndex;
                let dotClass = 'bg-slate-100 text-slate-600 border border-slate-200';
                if (ans) {
                  dotClass = ans === q.correctKey ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-rose-600 text-white border-rose-600';
                }
                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-8 h-8 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${dotClass} ${
                      isCurrent ? 'ring-2 ring-blue-600 font-black' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1))}
              disabled={currentIndex === filteredQuestions.length - 1}
              className="px-4 py-2.5 min-h-[44px] rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-xs font-bold text-white transition-colors cursor-pointer shadow-xs"
            >
              Next →
            </button>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center bg-white border border-slate-200 rounded-2xl text-slate-500 text-sm space-y-3">
          <Bookmark className="w-8 h-8 text-slate-300 mx-auto" />
          <div className="font-bold text-slate-800">
            {viewOnlyBookmarks ? 'No Bookmarked Questions Yet' : 'No questions found for the selected filter.'}
          </div>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {viewOnlyBookmarks
              ? 'Click the Bookmark icon on any question card during your practice to save difficult questions for revision.'
              : 'Try clearing the subject filter to view more questions.'}
          </p>
          {viewOnlyBookmarks && (
            <button
              onClick={() => setViewOnlyBookmarks(false)}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold cursor-pointer"
            >
              View All Questions
            </button>
          )}
        </div>
      )}

      {/* Official Academic Endorsement Seal */}
      <div className="pt-4">
        <AcademicEndorsementSeal />
      </div>
    </div>
  );
};
