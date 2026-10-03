import React, { useState, useEffect } from 'react';
import { useLiveQuiz } from '../context/LiveQuizContext';
import { OptionKey } from '../types/quiz';
import { AcademicEndorsementSeal } from './AcademicEndorsementSeal';
import {
  Zap,
  CheckCircle2,
  XCircle,
  Award,
  Flame,
  ArrowRight,
  BookOpen,
  Info,
  Clock,
  Lock,
  ChevronRight,
  UserCheck,
  Bookmark,
  Share2
} from 'lucide-react';

export const ParticipantView: React.FC = () => {
  const {
    session,
    currentQuestion,
    participantTeamId,
    setParticipantTeamId,
    buzzIn,
    awardPoints,
    penalizeTeam,
    nextQuestion,
    prevQuestion,
    setMode,
    studentProfile,
    openAuthModal,
    toggleBookmark,
    isBookmarked
  } = useLiveQuiz();

  const [selectedOption, setSelectedOption] = useState<OptionKey | null>(null);
  const [submittedOption, setSubmittedOption] = useState<OptionKey | null>(null);
  const [buzzerFeedback, setBuzzerFeedback] = useState<string | null>(null);

  const currentTeam = session.teams.find((t) => t.id === participantTeamId) || session.teams[0];
  const isQuestionBookmarked = isBookmarked(currentQuestion.id);

  // Reset selected option when question changes
  useEffect(() => {
    setSelectedOption(null);
    setSubmittedOption(null);
    setBuzzerFeedback(null);
  }, [session.currentQuestionIndex]);

  // Keyboard shortcut listener (A, B, C, D or 1, 2, 3, 4, Space for Buzzer)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        handleBuzz();
        return;
      }

      if (!submittedOption) {
        if (e.key === 'a' || e.key === 'A' || e.key === '1') setSelectedOption('A');
        if (e.key === 'b' || e.key === 'B' || e.key === '2') setSelectedOption('B');
        if (e.key === 'c' || e.key === 'C' || e.key === '3') setSelectedOption('C');
        if (e.key === 'd' || e.key === 'D' || e.key === '4') setSelectedOption('D');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [submittedOption, session.buzzerLocked, session.buzzedTeamId]);

  const handleBuzz = () => {
    if (session.buzzerLocked || session.buzzedTeamId) return;
    const res = buzzIn(currentTeam?.id);
    if (res.success) {
      setBuzzerFeedback(`Buzzed in! Reaction time: ${res.reactionMs}ms`);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || submittedOption) return;
    setSubmittedOption(selectedOption);

    const isCorrect = selectedOption === currentQuestion.correctKey;
    if (isCorrect) {
      awardPoints(currentTeam.id, 1, `Answered Q#${session.currentQuestionIndex + 1} (${currentQuestion.topic})`);
    } else {
      penalizeTeam(currentTeam.id, 0);
    }
  };

  const isBuzzedByMe = session.buzzedTeamId === currentTeam?.id;
  const isBuzzedByOther = session.buzzedTeamId && session.buzzedTeamId !== currentTeam?.id;
  const buzzedOtherTeam = isBuzzedByOther
    ? session.teams.find((t) => t.id === session.buzzedTeamId)
    : null;

  const isCorrect = submittedOption === currentQuestion.correctKey;
  const isAnswered = submittedOption !== null;

  // Cognitive mapping description
  const getCognitiveSkill = (bloom: string) => {
    switch (bloom) {
      case 'Analyze':
        return 'Toxicology & Root Defect Analysis';
      case 'Apply':
        return 'Clinical Emergency Protocol';
      case 'Remember':
        return 'IP Monograph & Schedule Recall';
      case 'Evaluate':
        return 'Drug Interaction Risk Assessment';
      case 'Understand':
        return 'Biochemical Mechanism & SAR';
      default:
        return 'Core Pharmaceutical Competency';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 sm:py-8 space-y-6 pb-20 sm:pb-8">
      {/* Mobile Sticky Assessment Header Strip */}
      <div className="sticky top-16 z-30 sm:hidden -mx-4 px-4 py-2 bg-white/95 backdrop-blur-md border-b border-slate-200 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-black text-blue-700">
            Q {session.currentQuestionIndex + 1}/10
          </span>
          <span className="text-[10px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded">
            +1 / 0 Marks
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleBookmark(currentQuestion.id)}
            className={`p-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
              isQuestionBookmarked
                ? 'bg-amber-50 border-amber-300 text-amber-900'
                : 'bg-slate-50 border-slate-200 text-slate-500'
            }`}
            title="Bookmark this question"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isQuestionBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
          </button>

          {session.isTimerRunning && (
            <span className="flex items-center gap-1 font-mono font-bold text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              <Clock className="w-3 h-3" />
              <span>{session.timerSeconds}s</span>
            </span>
          )}

          <div className="font-mono font-black text-xs text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
            Score: {currentTeam?.points || 0}
          </div>
        </div>
      </div>

      {/* Top Header: Participant Profile, Score & Streak */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-blue-600/20 shrink-0">
            {currentTeam?.name.charAt(0) || 'P'}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-extrabold text-base text-slate-900">
                {currentTeam?.name}
              </span>
              <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded">
                Active Player
              </span>
              <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded hidden md:inline-flex">
                Scoring: +1 / 0 (No Negative Marking)
              </span>
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5 flex-wrap">
              <span>{studentProfile ? `${studentProfile.college}` : (currentTeam?.college || 'D. P. Kharde Navjeevan College of Pharmacy')}</span>
              <span>·</span>
              <span className="font-mono text-slate-500">PIN: {session.pin}</span>
              {!studentProfile && (
                <>
                  <span>·</span>
                  <button
                    onClick={openAuthModal}
                    className="text-blue-600 hover:text-blue-700 font-bold underline cursor-pointer"
                  >
                    Verify Email OTP
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Score & Streak HUD */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-center min-w-[75px]">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center justify-center gap-1">
              <Award className="w-3 h-3 text-amber-500" />
              <span>Score</span>
            </div>
            <div className="text-xl font-mono font-black text-slate-900">
              {currentTeam?.points || 0}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-center min-w-[75px]">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center justify-center gap-1">
              <Flame className="w-3 h-3 text-orange-500" />
              <span>Streak</span>
            </div>
            <div className="text-xl font-mono font-black text-orange-600">
              {currentTeam?.streak || 0}
            </div>
          </div>

          {/* Quick Team Switcher Dropdown */}
          <div className="relative">
            <select
              value={currentTeam?.id}
              onChange={(e) => setParticipantTeamId(e.target.value)}
              className="bg-slate-50 border border-slate-200 hover:border-slate-300 text-xs font-medium text-slate-700 rounded-xl px-2.5 py-2 focus:outline-none focus:border-blue-600 cursor-pointer"
            >
              {session.teams.map((t) => (
                <option key={t.id} value={t.id}>
                  Switch: {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Live Buzzer Section */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Auditorium Rapid Buzzer
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                (Press Spacebar or Tap Button)
              </span>
            </div>
            <p className="text-xs text-slate-600">
              {session.buzzerLocked
                ? 'Buzzer is currently locked by the Quizmaster.'
                : 'Buzzer is OPEN! Press to lock in first response rights.'}
            </p>
          </div>

          {/* Buzzer Button */}
          <button
            onClick={handleBuzz}
            disabled={session.buzzerLocked || !!session.buzzedTeamId}
            className={`w-full sm:w-auto px-8 py-3.5 min-h-[52px] rounded-xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer touch-manipulation active:scale-[0.98] ${
              isBuzzedByMe
                ? 'bg-amber-500 text-slate-950 shadow-amber-500/30 ring-4 ring-amber-300'
                : !session.buzzerLocked && !session.buzzedTeamId
                ? 'bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 hover:from-red-700 hover:to-amber-600 text-white shadow-rose-600/30 animate-pulse'
                : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
            }`}
          >
            {isBuzzedByMe ? (
              <>
                <Zap className="w-5 h-5 fill-slate-950" />
                <span>YOU BUZZED FIRST!</span>
              </>
            ) : session.buzzerLocked ? (
              <>
                <Lock className="w-4 h-4 text-slate-400" />
                <span>BUZZER LOCKED</span>
              </>
            ) : isBuzzedByOther ? (
              <>
                <UserCheck className="w-4 h-4 text-slate-600" />
                <span>BUZZED: {buzzedOtherTeam?.name}</span>
              </>
            ) : (
              <>
                <Zap className="w-5 h-5 fill-white" />
                <span>BUZZ IN NOW!</span>
              </>
            )}
          </button>
        </div>

        {buzzerFeedback && (
          <div className="mt-3 text-xs font-mono font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>{buzzerFeedback}</span>
          </div>
        )}
      </div>

      {/* Main Question Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-sm relative">
        {/* Question Metadata Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
              {currentQuestion.subject}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-700 font-semibold">{currentQuestion.topic}</span>
            <span className="text-slate-300">·</span>
            <span className="text-emerald-800 font-mono font-bold text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200" title="Cognitive competency">
              Skill: {getCognitiveSkill(currentQuestion.bloomTaxonomy)}
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-slate-500">
            {/* Desktop Bookmark Button */}
            <button
              onClick={() => toggleBookmark(currentQuestion.id)}
              className={`hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg border font-bold transition-all cursor-pointer ${
                isQuestionBookmarked
                  ? 'bg-amber-50 border-amber-300 text-amber-900 shadow-2xs'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title="Bookmark question for revision"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isQuestionBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span>{isQuestionBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            <span className="font-mono font-semibold">
              Question {session.currentQuestionIndex + 1} of 10
            </span>

            {session.isTimerRunning && (
              <span className="hidden sm:flex items-center gap-1 font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                <Clock className="w-3.5 h-3.5" />
                <span>{session.timerSeconds}s</span>
              </span>
            )}
          </div>
        </div>

        {/* Question Text */}
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed mb-6">
          {currentQuestion.question}
        </h2>

        {/* Options List (A, B, C, D) with Mobile-Friendly 52px Touch Target */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((opt) => {
            const isSelected = selectedOption === opt.key;
            const isCorrectOption = opt.key === currentQuestion.correctKey;
            
            let cardClasses = 'bg-white border-slate-200 hover:border-blue-400 hover:bg-slate-50/70 text-slate-800 shadow-2xs';
            let keyClasses = 'bg-slate-100 border-slate-300 text-slate-700';
            let badgeText: string | null = null;

            if (isAnswered) {
              if (isCorrectOption) {
                cardClasses = 'bg-emerald-50/90 border-2 border-emerald-500 text-emerald-950 font-medium shadow-xs';
                keyClasses = 'bg-emerald-600 text-white font-bold border-emerald-600';
                badgeText = '✓ Correct Answer';
              } else if (isSelected && !isCorrectOption) {
                cardClasses = 'bg-rose-50/90 border-2 border-rose-500 text-rose-950 shadow-xs';
                keyClasses = 'bg-rose-600 text-white font-bold border-rose-600';
                badgeText = '✕ Your Choice';
              } else {
                cardClasses = 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-60';
                keyClasses = 'bg-slate-100 border-slate-200 text-slate-400';
              }
            } else if (isSelected) {
              cardClasses = 'bg-blue-50/90 border-2 border-blue-600 text-blue-950 shadow-xs';
              keyClasses = 'bg-blue-600 text-white font-bold border-blue-600';
            }

            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => !isAnswered && setSelectedOption(opt.key)}
                disabled={isAnswered}
                className={`w-full text-left p-4 min-h-[52px] rounded-xl border transition-all flex items-start justify-between gap-3.5 cursor-pointer touch-manipulation active:scale-[0.99] ${cardClasses}`}
              >
                <div className="flex items-start gap-3.5">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 border mt-0.5 ${keyClasses}`}>
                    {opt.key}
                  </span>
                  <span className="text-sm sm:text-base leading-relaxed pt-0.5">
                    {opt.text}
                  </span>
                </div>

                {badgeText && (
                  <span
                    className={`shrink-0 text-xs font-bold px-2 py-0.5 rounded mt-0.5 ${
                      isCorrectOption
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-rose-100 text-rose-800 border border-rose-300'
                    }`}
                  >
                    {badgeText}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Action Controls: Submit or Next */}
        {!isAnswered ? (
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-500">
              {selectedOption ? `Selected Option (${selectedOption}). Click Submit.` : 'Tap an option or press keys A, B, C, D'}
            </span>

            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedOption}
              className={`px-6 py-3 min-h-[48px] rounded-xl font-bold text-sm flex items-center gap-2 transition-all cursor-pointer ${
                selectedOption
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/25'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>Submit Answer</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Instant Visual Feedback Banner */
          <div className="space-y-4 pt-2">
            <div
              className={`p-4 rounded-xl border-2 flex items-center justify-between ${
                isCorrect
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                  : 'bg-rose-50 border-rose-500 text-rose-900'
              }`}
            >
              <div className="flex items-center gap-3">
                {isCorrect ? (
                  <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
                ) : (
                  <XCircle className="w-7 h-7 text-rose-600 shrink-0" />
                )}
                <div>
                  <div className="font-black text-base tracking-wide">
                    {isCorrect ? '✓ CORRECT ANSWER (+1 PT)' : '✕ WRONG ANSWER (0 PTS)'}
                  </div>
                  <div className="text-xs mt-0.5 text-slate-700 font-medium">
                    {isCorrect
                      ? `Great job! +1 Mark awarded. Option (${currentQuestion.correctKey}) is the verified PCI answer.`
                      : `0 Marks (No negative marking). The correct option is (${currentQuestion.correctKey}) — highlighted in green above.`}
                  </div>
                </div>
              </div>

              <button
                onClick={nextQuestion}
                className={`px-4 py-2.5 min-h-[44px] rounded-lg font-bold text-xs text-white flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs ${
                  isCorrect ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-rose-600 hover:bg-rose-700'
                }`}
              >
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* In-depth Clinical & Pharmaceutical Explanation */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Clinical &amp; Pharmaceutical Explanation</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {currentQuestion.explanation}
              </p>

              <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-1.5 text-amber-800 font-medium">
                  <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span><strong>Clinical Key Point:</strong> {currentQuestion.clinicalKeyPoint}</span>
                </div>
                <div className="text-slate-500 font-mono text-[11px] shrink-0 font-medium">
                  {currentQuestion.pciReference}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={prevQuestion}
          className="text-xs font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 transition-all cursor-pointer"
        >
          ← Previous Question
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode('practice')}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 px-3 py-2 rounded-lg bg-blue-50 border border-blue-200 transition-colors cursor-pointer"
          >
            Switch to Practice Drill →
          </button>
        </div>

        <button
          onClick={nextQuestion}
          className="text-xs font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 transition-all cursor-pointer"
        >
          Skip / Next Question →
        </button>
      </div>

      {/* Official Academic Endorsement Seal */}
      <div className="pt-6">
        <AcademicEndorsementSeal />
      </div>
    </div>
  );
};
