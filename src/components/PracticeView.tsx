import React, { useState, useEffect } from 'react';
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
  TrendingUp,
  Award,
  ChevronRight,
  Clock,
  HelpCircle,
  Flag,
  Check,
  AlertTriangle
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

  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [viewOnlyBookmarks, setViewOnlyBookmarks] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, OptionKey>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  
  // Test Mode: Practice (instant feedback) vs Exam (timed simulation)
  const [testMode, setTestMode] = useState<'practice' | 'exam'>('practice');
  const [examTimer, setExamTimer] = useState<number>(600); // 10 minutes countdown

  // Timer countdown for exam mode
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (testMode === 'exam' && !isTestSubmitted && examTimer > 0) {
      interval = setInterval(() => {
        setExamTimer((prev) => {
          if (prev <= 1) {
            setIsTestSubmitted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [testMode, isTestSubmitted, examTimer]);

  // Compute filtered questions
  const baseQuestions = selectedSubject === 'All'
    ? DPHARM_QUESTIONS
    : DPHARM_QUESTIONS.filter((q) => q.subject.toLowerCase().includes(selectedSubject.toLowerCase()));

  const filteredQuestions = viewOnlyBookmarks
    ? baseQuestions.filter((q) => bookmarkedQuestionIds.includes(q.id))
    : baseQuestions;

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];
  const isQuestionBookmarked = currentQ ? isBookmarked(currentQ.id) : false;
  const isCurrentMarkedForReview = currentQ ? !!markedForReview[currentQ.id] : false;

  const handleSelectOption = (qId: string, optKey: OptionKey) => {
    if (isTestSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optKey }));

    if (testMode === 'practice') {
      if (currentQ && optKey === currentQ.correctKey) {
        soundEffects.playCorrect();
      } else {
        soundEffects.playWrong();
      }
    }
  };

  const toggleReviewFlag = (qId: string) => {
    setMarkedForReview((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const resetPractice = () => {
    setUserAnswers({});
    setMarkedForReview({});
    setCurrentIndex(0);
    setIsTestSubmitted(false);
    setExamTimer(600);
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

  // PCI ER-2020 Subjects list
  const subjectsList = [
    'All',
    'Pharmaceutics',
    'Pharmacology',
    'Pharmacognosy',
    'Pharmaceutical Chemistry',
    'Pharmacy Law & Ethics',
    'Community Pharmacy',
    'Biochemistry',
    'Human Anatomy'
  ];

  const currentAnswer = currentQ ? userAnswers[currentQ.id] : null;
  const isCurrentAnswered = currentAnswer !== undefined && currentAnswer !== null;
  const isCurrentCorrect = currentQ && currentAnswer === currentQ.correctKey;
  const shouldRevealCurrentExplanation = (testMode === 'practice' && isCurrentAnswered) || isTestSubmitted;

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-3 sm:py-6 space-y-4 sm:space-y-6 bg-slate-50 min-h-screen pb-24 sm:pb-8">
      {/* Mobile Sticky Top Status Strip */}
      <div className="sticky top-14 z-20 sm:hidden -mx-3 px-3 py-2 bg-white/95 backdrop-blur-md border-b border-slate-200 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-1.5 font-mono text-xs">
          <span className="font-black text-blue-700">Q {currentIndex + 1}/{totalQuestions || 1}</span>
          <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
            {testMode === 'practice' ? 'Practice' : 'Exam'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {testMode === 'exam' && !isTestSubmitted && (
            <span className="flex items-center gap-1 font-mono text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              <Clock className="w-3 h-3" />
              <span>{formatTimer(examTimer)}</span>
            </span>
          )}

          {currentQ && (
            <button
              onClick={() => toggleBookmark(currentQ.id)}
              className={`p-1.5 rounded-lg border text-xs cursor-pointer ${
                isQuestionBookmarked ? 'bg-amber-50 border-amber-300 text-amber-900' : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isQuestionBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
            </button>
          )}

          <div className="font-mono font-black text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
            {correctCount}/{answeredCount}
          </div>
        </div>
      </div>

      {/* Top Header Card & Dual Mode Toggle */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 font-mono text-[11px] font-bold uppercase tracking-wider">
              PCI ER-2020 Exit Exam Prep
            </span>
            <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
              Marking: +1 / 0 (No Negative Marks)
            </span>
          </div>
          <h1 className="text-lg sm:text-xl font-extrabold text-slate-900">
            {testMode === 'practice' ? 'Interactive Practice & 4-Way Rationales' : 'Timed Exit Exam Simulation'}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            {studentProfile ? `Candidate: ${studentProfile.fullName}` : 'Guest Student Mode'}
          </p>
        </div>

        {/* Action Controls & Mode Switcher */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
          <div className="inline-flex p-1 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold">
            <button
              onClick={() => { setTestMode('practice'); resetPractice(); }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                testMode === 'practice' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Practice Mode
            </button>
            <button
              onClick={() => { setTestMode('exam'); resetPractice(); }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                testMode === 'exam' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mock Exam
            </button>
          </div>

          <button
            onClick={resetPractice}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer shadow-2xs"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>Reset</span>
          </button>

          {!isTestSubmitted && answeredCount > 0 && (
            <button
              onClick={() => setIsTestSubmitted(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Submit Exam</span>
            </button>
          )}
        </div>
      </div>

      {/* PCI Subject Selector Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar touch-pan-x">
          <span className="text-xs text-slate-600 font-bold px-1 shrink-0 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-blue-600" />
            <span>Subject:</span>
          </span>
          {subjectsList.map((sub) => (
            <button
              key={sub}
              onClick={() => { setSelectedSubject(sub); setCurrentIndex(0); }}
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

        <button
          type="button"
          onClick={() => { setViewOnlyBookmarks(!viewOnlyBookmarks); setCurrentIndex(0); }}
          className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg border transition-colors cursor-pointer shrink-0 self-start sm:self-auto ${
            viewOnlyBookmarks
              ? 'bg-amber-500 border-amber-600 text-slate-950 font-black'
              : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
          }`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${viewOnlyBookmarks ? 'fill-slate-950' : 'text-amber-500'}`} />
          <span>Revision Bin ({bookmarkedQuestionIds.length})</span>
        </button>
      </div>

      {/* Performance Scorecard Card (When Test is Submitted) */}
      {isTestSubmitted && (
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 sm:p-7 shadow-xs space-y-5 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pb-5 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center font-mono font-black text-2xl shadow-sm text-white ${
                  isPassed ? 'bg-emerald-600' : 'bg-rose-600'
                }`}
              >
                {scorePercent}%
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                    {isPassed ? 'D.Pharm Exit Exam Qualified (PASS)' : 'Needs Revision (FAIL)'}
                  </h2>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    isPassed ? 'bg-emerald-50 text-emerald-800 border border-emerald-300' : 'bg-rose-50 text-rose-800 border border-rose-300'
                  }`}>
                    Pass Mark: 50%
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  You scored <strong className="text-slate-900">{correctCount} out of {totalQuestions} Marks</strong> ({answeredCount} answered).
                </p>
              </div>
            </div>

            <button
              onClick={resetPractice}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              Take Another Test
            </button>
          </div>
          <AcademicEndorsementSeal compact />
        </div>
      )}

      {/* Main Question Interface */}
      {filteredQuestions.length > 0 && currentQ ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-7 shadow-xs space-y-5">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3.5 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                {currentQ.subject}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-700 font-semibold">{currentQ.topic}</span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button
                type="button"
                onClick={() => toggleReviewFlag(currentQ.id)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border font-bold text-xs transition-all cursor-pointer ${
                  isCurrentMarkedForReview
                    ? 'bg-purple-50 border-purple-300 text-purple-700'
                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-800'
                }`}
              >
                <Flag className={`w-3.5 h-3.5 ${isCurrentMarkedForReview ? 'fill-purple-700' : ''}`} />
                <span className="hidden sm:inline">{isCurrentMarkedForReview ? 'Marked' : 'Review Later'}</span>
              </button>

              <button
                type="button"
                onClick={() => toggleBookmark(currentQ.id)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border font-bold text-xs transition-all cursor-pointer ${
                  isQuestionBookmarked
                    ? 'bg-amber-50 border-amber-300 text-amber-900'
                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-800'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isQuestionBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                <span className="hidden sm:inline">Bookmark</span>
              </button>

              <span className="font-mono font-bold text-slate-500 ml-1">
                Q {currentIndex + 1} of {filteredQuestions.length}
              </span>
            </div>
          </div>

          {/* Question Text */}
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-relaxed">
            {currentQ.question}
          </h2>

          {/* Option Selector List */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt) => {
              const isSelected = currentAnswer === opt.key;
              const isCorrectOpt = opt.key === currentQ.correctKey;

              let style = 'bg-white border-slate-200 text-slate-800 hover:border-blue-300 hover:bg-slate-50/70 shadow-2xs';
              let badge = 'bg-slate-100 border-slate-300 text-slate-700';
              let tagText: string | null = null;

              if (shouldRevealCurrentExplanation) {
                if (isCorrectOpt) {
                  style = 'bg-emerald-50/90 border-2 border-emerald-500 text-emerald-950 font-medium shadow-xs';
                  badge = 'bg-emerald-600 text-white font-bold border-emerald-600';
                  tagText = '✓ Correct Answer';
                } else if (isSelected && !isCorrectOpt) {
                  style = 'bg-rose-50/90 border-2 border-rose-500 text-rose-950 shadow-xs';
                  badge = 'bg-rose-600 text-white font-bold border-rose-600';
                  tagText = '✕ Your Selection';
                } else {
                  style = 'bg-slate-50/50 border-slate-200 text-slate-400 opacity-60';
                  badge = 'bg-slate-100 border-slate-200 text-slate-400';
                }
              } else if (isSelected) {
                style = 'bg-blue-50 border-2 border-blue-600 text-blue-950 font-medium shadow-xs';
                badge = 'bg-blue-600 text-white font-bold border-blue-600';
              }

              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => handleSelectOption(currentQ.id, opt.key)}
                  className={`w-full text-left p-3.5 sm:p-4 min-h-[50px] rounded-xl border transition-all flex items-start justify-between gap-3 cursor-pointer touch-manipulation active:scale-[0.99] ${style}`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 border mt-0.5 ${badge}`}>
                      {opt.key}
                    </span>
                    <span className="text-sm sm:text-base leading-relaxed pt-0.5">
                      {opt.text}
                    </span>
                  </div>

                  {tagText && (
                    <span className={`shrink-0 text-[11px] font-bold px-2 py-0.5 rounded mt-0.5 ${
                      isCorrectOpt ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-rose-100 text-rose-800 border border-rose-300'
                    }`}>
                      {tagText}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* 4-Way Distractor Explanations & Clinical Monograph Card */}
          {shouldRevealCurrentExplanation && (
            <div className="space-y-3 pt-2">
              <div className={`p-3.5 sm:p-4 rounded-xl border-2 flex items-center justify-between ${
                isCurrentCorrect ? 'bg-emerald-50 border-emerald-500 text-emerald-900' : 'bg-rose-50 border-rose-500 text-rose-900'
              }`}>
                <div className="flex items-center gap-2.5">
                  {isCurrentCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
                  )}
                  <div>
                    <div className="font-black text-sm sm:text-base">
                      {isCurrentCorrect ? '✓ CORRECT (+1 PT)' : '✕ WRONG (0 PTS)'}
                    </div>
                    <div className="text-xs text-slate-700">
                      Standard PCI Key: Option ({currentQ.correctKey}).
                    </div>
                  </div>
                </div>
              </div>

              {/* Rationale Section with Distractor Elimination */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  <span>Comprehensive Pharmaceutical Rationale</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {currentQ.explanation}
                </p>

                {/* Distractor Breakdown */}
                <div className="pt-2 border-t border-slate-200 space-y-1.5 text-xs">
                  <div className="font-bold text-slate-800 flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                    <span>Option Elimination Analysis:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px] text-slate-600">
                    {currentQ.options.map((opt) => (
                      <div key={opt.key} className={`p-2 rounded-lg border ${
                        opt.key === currentQ.correctKey ? 'bg-emerald-50 border-emerald-200 text-emerald-900 font-semibold' : 'bg-white border-slate-200 text-slate-600'
                      }`}>
                        <strong>Option {opt.key}:</strong> {opt.key === currentQ.correctKey ? 'Valid PCI standard.' : 'Incorrect pharmacological classification.'}
                      </div>
                    ))}
                  </div>
                </div>

                {currentQ.clinicalKeyPoint && (
                  <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-1 text-amber-800 font-medium">
                      <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span><strong>Key Point:</strong> {currentQ.clinicalKeyPoint}</span>
                    </div>
                    <div className="text-slate-500 font-mono text-[10px]">
                      {currentQ.pciReference}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation & Question Palette Grid */}
          <div className="space-y-4 pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="px-3.5 py-2 min-h-[40px] rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-xs font-bold text-slate-700 cursor-pointer shadow-2xs"
              >
                ← Prev
              </button>

              <span className="text-xs text-slate-500 font-semibold">
                Tap number to jump
              </span>

              <button
                onClick={() => setCurrentIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1))}
                disabled={currentIndex === filteredQuestions.length - 1}
                className="px-3.5 py-2 min-h-[40px] rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-xs font-bold text-white cursor-pointer shadow-2xs"
              >
                Next →
              </button>
            </div>

            {/* Question Palette Drawer (NTA / MPSC Pattern) */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 touch-pan-x">
              {filteredQuestions.map((q, idx) => {
                const ans = userAnswers[q.id];
                const isReview = markedForReview[q.id];
                const isCurrent = idx === currentIndex;
                
                let dotClass = 'bg-slate-100 text-slate-600 border border-slate-200';
                if (ans) {
                  dotClass = testMode === 'practice'
                    ? (ans === q.correctKey ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-rose-600 text-white border-rose-600')
                    : 'bg-blue-600 text-white border-blue-600';
                } else if (isReview) {
                  dotClass = 'bg-purple-100 text-purple-800 border-purple-300 font-bold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-[11px] sm:text-xs font-mono font-bold shrink-0 transition-all cursor-pointer ${dotClass} ${
                      isCurrent ? 'ring-2 ring-blue-600 font-black scale-105' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center bg-white border border-slate-200 rounded-2xl text-slate-500 text-xs sm:text-sm space-y-2">
          <Bookmark className="w-8 h-8 text-slate-300 mx-auto" />
          <div className="font-bold text-slate-800">No Questions Found</div>
          <p className="text-slate-500 max-w-xs mx-auto">
            {viewOnlyBookmarks ? 'You have no bookmarked questions in this subject.' : 'Try selecting another subject filter above.'}
          </p>
        </div>
      )}

      {/* Official Endorsement Seal */}
      <div className="pt-2">
        <AcademicEndorsementSeal />
      </div>
    </div>
  );
};
