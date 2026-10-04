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
  Loader2,
  RefreshCw,
  Home
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

  // Safe team resolution
  const teamsList = session?.teams || [];
  const currentTeam = teamsList.find((t) => t.id === participantTeamId) || teamsList[0] || {
    id: 'default-player',
    name: studentProfile?.fullName || 'Active Student',
    college: studentProfile?.college || 'D. P. Kharde Navjeevan College of Pharmacy',
    points: 0,
    streak: 0
  };

  const isQuestionBookmarked = currentQuestion ? isBookmarked(currentQuestion.id) : false;

  useEffect(() => {
    setSelectedOption(null);
    setSubmittedOption(null);
    setBuzzerFeedback(null);
  }, [session?.currentQuestionIndex]);

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
  }, [submittedOption, session?.buzzerLocked, session?.buzzedTeamId]);

  const handleBuzz = () => {
    if (!session || session.buzzerLocked || session.buzzedTeamId) return;
    const res = buzzIn(currentTeam?.id);
    if (res?.success) {
      setBuzzerFeedback(`Buzzed in! Reaction time: ${res.reactionMs}ms`);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || submittedOption || !currentQuestion) return;
    setSubmittedOption(selectedOption);

    const isCorrect = selectedOption === currentQuestion.correctKey;
    if (isCorrect) {
      awardPoints(currentTeam.id, 1, `Answered Q#${(session?.currentQuestionIndex || 0) + 1} (${currentQuestion.topic})`);
    } else {
      penalizeTeam(currentTeam.id, 0);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center space-y-5">
        <div className="w-16 h-16 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center mx-auto text-blue-600 shadow-sm animate-pulse">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">Connecting to Arena...</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
            Synchronizing question set with Room PIN <span className="font-mono font-bold text-blue-600">{session?.pin || '829140'}</span>.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reload</span>
          </button>
          <button
            onClick={() => setMode('landing')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </button>
        </div>
      </div>
    );
  }

  const isBuzzedByMe = session?.buzzedTeamId === currentTeam?.id;
  const isBuzzedByOther = session?.buzzedTeamId && session?.buzzedTeamId !== currentTeam?.id;
  const buzzedOtherTeam = isBuzzedByOther
    ? teamsList.find((t) => t.id === session?.buzzedTeamId)
    : null;

  const isCorrect = submittedOption === currentQuestion.correctKey;
  const isAnswered = submittedOption !== null;

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 py-3 sm:py-6 space-y-4 pb-20 overflow-x-hidden">
      {/* Top Header Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-base shrink-0">
            {currentTeam?.name ? currentTeam.name.charAt(0).toUpperCase() : 'P'}
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-extrabold text-sm text-slate-900 truncate">
              {currentTeam?.name || 'Active Student'}
            </div>
            <div className="text-xs text-slate-500 truncate">
              PIN: {session?.pin || '829140'} · {currentTeam?.college || 'D. P. Kharde Navjeevan College of Pharmacy'}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-center min-w-[65px]">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Score</div>
            <div className="text-base font-mono font-black text-slate-900">{currentTeam?.points || 0}</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-center min-w-[65px]">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Streak</div>
            <div className="text-base font-mono font-black text-orange-600">{currentTeam?.streak || 0}</div>
          </div>
        </div>
      </div>

      {/* Buzzer Button */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
        <button
          onClick={handleBuzz}
          disabled={session?.buzzerLocked || !!session?.buzzedTeamId}
          className={`w-full py-3.5 min-h-[48px] rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isBuzzedByMe
              ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-300'
              : !session?.buzzerLocked && !session?.buzzedTeamId
              ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-md'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
          }`}
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>{isBuzzedByMe ? 'YOU BUZZED FIRST!' : session?.buzzerLocked ? 'BUZZER LOCKED' : 'TAP TO BUZZ IN'}</span>
        </button>

        {buzzerFeedback && (
          <div className="mt-2 text-xs font-mono font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded text-center">
            {buzzerFeedback}
          </div>
        )}
      </div>

      {/* Main Question Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100">
          <span className="font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
            {currentQuestion.subject}
          </span>
          <span className="font-mono text-slate-500">
            Q {(session?.currentQuestionIndex || 0) + 1} of 10
          </span>
        </div>

        <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug break-words">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-2">
          {currentQuestion.options?.map((opt) => {
            const isSelected = selectedOption === opt.key;
            const isCorrectOption = opt.key === currentQuestion.correctKey;

            let cardClasses = 'bg-white border-slate-200 text-slate-800';
            if (isAnswered) {
              if (isCorrectOption) {
                cardClasses = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
              } else if (isSelected && !isCorrectOption) {
                cardClasses = 'bg-rose-50 border-rose-500 text-rose-950';
              } else {
                cardClasses = 'bg-slate-50/50 border-slate-200 text-slate-400 opacity-50';
              }
            } else if (isSelected) {
              cardClasses = 'bg-blue-50 border-blue-600 text-blue-950';
            }

            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => !isAnswered && setSelectedOption(opt.key)}
                disabled={isAnswered}
                className={`w-full text-left p-3 rounded-xl border flex items-start gap-2.5 transition-all cursor-pointer ${cardClasses}`}
              >
                <span className="w-6 h-6 rounded-md bg-slate-100 border border-slate-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {opt.key}
                </span>
                <span className="text-xs sm:text-sm leading-relaxed break-words flex-1 pt-0.5">
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Controls */}
        {!isAnswered ? (
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400">Select an option</span>
            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedOption}
              className={`px-4 py-2 rounded-xl font-bold text-xs cursor-pointer ${
                selectedOption
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              Submit Answer
            </button>
          </div>
        ) : (
          <div className="space-y-3 pt-2">
            <div className={`p-3 rounded-xl border flex items-center justify-between ${
              isCorrect ? 'bg-emerald-50 border-emerald-400 text-emerald-900' : 'bg-rose-50 border-rose-400 text-rose-900'
            }`}>
              <span className="text-xs font-bold">
                {isCorrect ? '✓ Correct Answer (+1 Mark)' : `✕ Wrong (Key: ${currentQuestion.correctKey})`}
              </span>
              <button
                onClick={nextQuestion}
                className="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg flex items-center gap-1 cursor-pointer"
              >
                <span>Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700 space-y-1">
              <div className="font-bold text-blue-700 uppercase text-[10px]">Rationale</div>
              <p className="leading-relaxed break-words">{currentQuestion.explanation}</p>
            </div>
          </div>
        )}
      </div>

      <div className="pt-2">
        <AcademicEndorsementSeal compact />
      </div>
    </div>
  );
};
