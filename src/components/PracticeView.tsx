import React, { useState, useEffect, useMemo } from 'react';
import { DPHARM_QUESTIONS } from '../data/questions';
import { Question, OptionKey } from '../types/quiz';
import { useLiveQuiz } from '../context/LiveQuizContext';
import { AcademicEndorsementSeal } from './AcademicEndorsementSeal';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  User,
  BookOpen,
  RotateCcw,
  Layers,
  Filter,
  LogOut,
  Shuffle
} from 'lucide-react';
import { soundEffects } from '../utils/audio';

// Fisher-Yates array shuffler
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const PracticeView: React.FC = () => {
  const { studentProfile } = useLiveQuiz();

  const [quizFilterMode, setQuizFilterMode] = useState<'all' | 'subject'>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('Pharmaceutics');
  const [activeQuestionSet, setActiveQuestionSet] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<OptionKey | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, OptionKey>>({});
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const subjects = [
    'Pharmaceutics',
    'Pharmacology',
    'Pharmacognosy',
    'Pharmaceutical Chemistry',
    'Pharmacy Law & Ethics',
    'Community Pharmacy',
    'Human Anatomy',
    'Biochemistry'
  ];

  // Build randomized quiz session
  const buildQuizSession = () => {
    let pool: Question[] = [];
    if (quizFilterMode === 'all') {
      pool = shuffleArray(DPHARM_QUESTIONS).slice(0, 100); // 100 questions or total pool size
    } else {
      const filtered = DPHARM_QUESTIONS.filter((q) =>
        q.subject.toLowerCase().includes(selectedSubject.toLowerCase())
      );
      pool = shuffleArray(filtered);
    }
    setActiveQuestionSet(pool);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setUserAnswers({});
    setScore(0);
    setIsCompleted(false);
  };

  useEffect(() => {
    buildQuizSession();
  }, [quizFilterMode, selectedSubject]);

  const currentQ = activeQuestionSet[currentIndex];

  const handleSelectOption = (optKey: OptionKey) => {
    if (isAnswered || !currentQ) return;
    setSelectedOption(optKey);
    setIsAnswered(true);
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: optKey }));

    if (optKey === currentQ.correctKey) {
      setScore((prev) => prev + 1);
      soundEffects.playCorrect();
    } else {
      soundEffects.playWrong();
    }
  };

  const handleNext = () => {
    if (currentIndex < activeQuestionSet.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      const nextQ = activeQuestionSet[nextIdx];
      const prevAns = nextQ ? userAnswers[nextQ.id] : null;
      setSelectedOption(prevAns || null);
      setIsAnswered(!!prevAns);
    } else {
      setIsCompleted(true);
    }
  };

  const handleEndTestEarly = () => {
    if (window.confirm('Are you sure you want to end this test now and view your current score?')) {
      setIsCompleted(true);
    }
  };

  const isCorrect = currentQ && selectedOption === currentQ.correctKey;

  // Scorecard View
  if (isCompleted) {
    const totalAttempted = Object.keys(userAnswers).length;
    const totalExamQuestions = activeQuestionSet.length || 1;
    const percent = Math.round((score / totalExamQuestions) * 100);
    const accuracy = totalAttempted > 0 ? Math.round((score / totalAttempted) * 100) : 0;
    const passed = percent >= 50;

    return (
      <div className="w-full max-w-xl mx-auto px-4 py-8">
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 text-center shadow-xs space-y-5">
          <div
            className={`w-20 h-20 rounded-2xl mx-auto flex items-center justify-center font-mono font-black text-3xl text-white ${
              passed ? 'bg-emerald-600' : 'bg-rose-600'
            }`}
          >
            {percent}%
          </div>

          <div>
            <h2 className="text-xl font-black text-slate-900">
              {passed ? 'Exit Exam / MSBTE Qualified! 🎉' : 'Needs More Revision'}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Candidate: <strong className="text-slate-800">{studentProfile?.fullName || 'Active Student'}</strong>
            </p>
            <div className="flex justify-center gap-4 text-xs font-semibold text-slate-700 mt-3 pt-3 border-t border-slate-100">
              <div>
                Score: <strong className="text-blue-700 font-mono text-sm">{score}</strong> / {totalExamQuestions}
              </div>
              <div>
                Attempted: <strong className="text-slate-900 font-mono text-sm">{totalAttempted}</strong>
              </div>
              <div>
                Accuracy: <strong className="text-emerald-700 font-mono text-sm">{accuracy}%</strong>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={buildQuizSession}
              className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-xs"
            >
              Start New Shuffled Test
            </button>
          </div>

          <AcademicEndorsementSeal compact />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-3 py-3 space-y-3 pb-16 overflow-x-hidden">
      {/* 2 Main Attempt Options */}
      <div className="w-full bg-white border border-slate-200 rounded-xl p-2 shadow-2xs space-y-2">
        <div className="grid grid-cols-2 gap-1 text-xs font-bold">
          <button
            onClick={() => setQuizFilterMode('all')}
            className={`py-2 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              quizFilterMode === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Attempt All Subjects (100 Q)</span>
          </button>

          <button
            onClick={() => setQuizFilterMode('subject')}
            className={`py-2 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              quizFilterMode === 'subject'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Solve Subject-Wise</span>
          </button>
        </div>

        {/* Subject Drawer */}
        {quizFilterMode === 'subject' && (
          <div className="flex flex-wrap gap-1 pt-1 border-t border-slate-100">
            {subjects.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                  selectedSubject === sub
                    ? 'bg-blue-100 border border-blue-400 text-blue-800 font-bold'
                    : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Candidate Progress Bar with "End Test Early" Escape Hatch */}
      <div className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 flex items-center justify-between text-xs shadow-2xs">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center font-bold shrink-0">
            <User className="w-3.5 h-3.5" />
          </div>
          <div className="truncate">
            <span className="font-bold text-slate-900 truncate block">
              {studentProfile?.fullName || 'Guest Student'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono font-black text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded text-xs">
            Q {currentIndex + 1}/{activeQuestionSet.length || 1}
          </span>

          <span className="font-mono text-xs font-bold text-slate-700">
            Score: {score}
          </span>

          {/* End Test Early Button */}
          <button
            onClick={handleEndTestEarly}
            className="px-2 py-0.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-[11px] rounded-md transition-colors flex items-center gap-1 cursor-pointer"
            title="End test early and view scorecard"
          >
            <LogOut className="w-3 h-3" />
            <span className="hidden sm:inline">End Test</span>
          </button>
        </div>
      </div>

      {/* Main Question Card */}
      {currentQ ? (
        <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between gap-1 text-[11px] font-bold">
            <div className="flex items-center gap-1.5 text-blue-700 min-w-0">
              <span className="bg-blue-50 border border-blue-200 px-2 py-0.5 rounded shrink-0">
                {currentQ.subject}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-600 font-medium truncate">
                {currentQ.topic}
              </span>
            </div>

            <span className="text-[10px] bg-slate-100 border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-mono shrink-0">
              MSBTE / PCI
            </span>
          </div>

          <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug break-words">
            {currentQ.question}
          </h2>

          <div className="space-y-2 w-full">
            {currentQ.options.map((opt) => {
              const isSelected = selectedOption === opt.key;
              const isCorrectKey = opt.key === currentQ.correctKey;

              let cardStyle = 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 active:scale-[0.99]';
              let badgeStyle = 'bg-slate-100 border-slate-300 text-slate-700';

              if (isAnswered) {
                if (isCorrectKey) {
                  cardStyle = 'bg-emerald-50 border-2 border-emerald-500 text-emerald-950 font-semibold';
                  badgeStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                } else if (isSelected && !isCorrectKey) {
                  cardStyle = 'bg-rose-50 border-2 border-rose-500 text-rose-950';
                  badgeStyle = 'bg-rose-600 text-white border-rose-600 font-bold';
                } else {
                  cardStyle = 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-50';
                  badgeStyle = 'bg-slate-100 text-slate-400 border-slate-200';
                }
              }

              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => handleSelectOption(opt.key)}
                  disabled={isAnswered}
                  className={`w-full text-left p-3 rounded-xl border flex items-start gap-2.5 transition-all cursor-pointer ${cardStyle}`}
                >
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs shrink-0 border mt-0.5 ${badgeStyle}`}>
                    {opt.key}
                  </span>
                  <span className="text-xs sm:text-sm leading-relaxed break-words flex-1 pt-0.5">
                    {opt.text}
                  </span>
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="space-y-3 pt-2">
              <div
                className={`p-3 rounded-xl border flex items-center justify-between ${
                  isCorrect
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-900'
                    : 'bg-rose-50 border-rose-400 text-rose-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                  <span className="text-xs sm:text-sm font-bold">
                    {isCorrect ? 'Correct! (+1 Mark)' : `Incorrect (Correct is ${currentQ.correctKey})`}
                  </span>
                </div>

                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg flex items-center gap-1.5 transition-all shadow-xs cursor-pointer shrink-0"
                >
                  <span>{currentIndex < activeQuestionSet.length - 1 ? 'Next' : 'Finish'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700 space-y-1.5">
                <div className="flex items-center gap-1 font-bold text-blue-700 uppercase text-[10px]">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>PCI & MSBTE Monograph Rationale</span>
                </div>
                <p className="leading-relaxed break-words">
                  {currentQ.explanation}
                </p>
                {currentQ.clinicalKeyPoint && (
                  <p className="text-[11px] text-amber-800 font-medium pt-1 border-t border-slate-200">
                    <strong>Key Point:</strong> {currentQ.clinicalKeyPoint}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Quick Jump Bar */}
          <div className="pt-2 border-t border-slate-100 flex items-center gap-1 overflow-x-auto no-scrollbar">
            {activeQuestionSet.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  const q = activeQuestionSet[idx];
                  const ans = q ? userAnswers[q.id] : null;
                  setSelectedOption(ans || null);
                  setIsAnswered(!!ans);
                }}
                className={`w-7 h-7 rounded-md text-xs font-mono font-bold shrink-0 transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'bg-blue-600 text-white shadow-xs'
                    : userAnswers[activeQuestionSet[idx]?.id]
                    ? 'bg-slate-200 text-slate-800 font-bold'
                    : 'bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-8 text-center bg-white border border-slate-200 rounded-2xl text-slate-500 text-sm">
          No questions available for this selection.
        </div>
      )}

      <div className="pt-2">
        <AcademicEndorsementSeal compact />
      </div>
    </div>
  );
};
