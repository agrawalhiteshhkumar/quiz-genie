import React, { useState, useEffect } from 'react';
import { useLiveQuiz } from '../context/LiveQuizContext';
import { AcademicEndorsementSeal } from './AcademicEndorsementSeal';
import {
  Maximize2,
  Minimize2,
  Clock,
  Zap,
  CheckCircle2,
  Trophy,
  Flame,
  Lock,
  Unlock
} from 'lucide-react';

export const ProjectorView: React.FC = () => {
  const {
    session,
    currentQuestion,
    openBuzzer,
    lockBuzzer,
    revealAnswer,
    nextQuestion,
  } = useLiveQuiz();

  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const sortedTeams = [...session.teams].sort((a, b) => b.points - a.points);
  const buzzedTeam = session.buzzedTeamId
    ? session.teams.find((t) => t.id === session.buzzedTeamId)
    : null;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 text-slate-900 flex flex-col p-4 sm:p-6 lg:p-8">
      {/* Projector Top Header Bar */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 bg-white p-4 rounded-2xl shadow-xs">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase">
            Auditorium Projector Feed
          </div>
          <div className="text-slate-600 text-xs font-medium hidden sm:block">
            <span>Room PIN: </span>
            <span className="font-mono font-bold text-blue-700 text-sm">{session.pin}</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <div className="text-slate-600 text-xs font-medium">
            <span className="font-bold text-slate-900">{currentQuestion.subject}</span>
            <span className="text-slate-300 mx-1">·</span>
            <span className="text-slate-600">{currentQuestion.topic}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick controls for Auditorium proctor */}
          <button
            onClick={session.buzzerLocked ? openBuzzer : lockBuzzer}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs ${
              session.buzzerLocked
                ? 'bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100'
                : 'bg-rose-50 border border-rose-300 text-rose-800 hover:bg-rose-100'
            }`}
          >
            {session.buzzerLocked ? <Unlock className="w-3.5 h-3.5 text-emerald-600" /> : <Lock className="w-3.5 h-3.5 text-rose-600" />}
            <span>{session.buzzerLocked ? 'Unlock Buzzer' : 'Lock Buzzer'}</span>
          </button>

          {!session.answerRevealed && (
            <button
              onClick={revealAnswer}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 transition-colors cursor-pointer shadow-xs"
            >
              Reveal Answer
            </button>
          )}

          <button
            onClick={nextQuestion}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer shadow-xs"
          >
            Next MCQ →
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors shadow-xs"
            title="Toggle Auditorium Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Buzzer Alert Banner (When a team buzzes) */}
      {session.buzzedTeamId && buzzedTeam && (
        <div className="mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 text-slate-950 rounded-2xl p-5 shadow-lg flex items-center justify-between animate-bounce border-2 border-amber-300">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white text-amber-600 flex items-center justify-center font-black text-xl shrink-0 shadow-sm">
              <Zap className="w-6 h-6 fill-amber-500" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-slate-900/80">
                ⚡ BUZZER TRIGGERED - FIRST TO RESPOND
              </div>
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">
                {buzzedTeam.name}
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900/80">
              Reaction Speed
            </div>
            <div className="text-2xl font-mono font-black text-slate-950">
              {buzzedTeam.reactionTimeMs ? `${(buzzedTeam.reactionTimeMs / 1000).toFixed(2)}s` : '0.45s'}
            </div>
          </div>
        </div>
      )}

      {/* Main Grid: Left Area = Giant Question, Right Area = Live Team Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
        
        {/* Left Side: Question, Timer, Large Options */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm flex-1 flex flex-col justify-between">
            <div>
              {/* Question Header & Giant Timer */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm sm:text-base font-black text-blue-700">
                    QUESTION {session.currentQuestionIndex + 1}
                  </span>
                  <span className="text-slate-300">/</span>
                  <span className="text-slate-500 font-mono text-sm font-semibold">{10}</span>
                  <span className="ml-3 text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    Bloom: {currentQuestion.bloomTaxonomy}
                  </span>
                </div>

                {/* Giant Timer */}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-2xl border font-mono font-black text-xl sm:text-2xl shadow-xs ${
                      session.timerSeconds <= 5 && session.isTimerRunning
                        ? 'bg-rose-50 border-rose-400 text-rose-700 animate-pulse'
                        : session.isTimerRunning
                        ? 'bg-blue-50 border-blue-300 text-blue-700'
                        : 'bg-slate-50 border-slate-200 text-slate-400'
                    }`}
                  >
                    <Clock className="w-5 h-5 text-current" />
                    <span>{session.timerSeconds.toString().padStart(2, '0')}s</span>
                  </div>
                </div>
              </div>

              {/* Giant Readable Question Text */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-8">
                {currentQuestion.question}
              </h1>

              {/* Options Grid (Large A, B, C, D) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentQuestion.options.map((opt) => {
                  const isCorrect = opt.key === currentQuestion.correctKey;
                  const isRevealed = session.answerRevealed;

                  let optCardClass = 'bg-slate-50/70 border-slate-200 text-slate-800';
                  let keyBadgeClass = 'bg-white border-slate-300 text-slate-700';

                  if (isRevealed && isCorrect) {
                    optCardClass = 'bg-emerald-50 border-2 border-emerald-500 text-emerald-950 shadow-md ring-2 ring-emerald-200';
                    keyBadgeClass = 'bg-emerald-600 text-white font-black border-emerald-600';
                  } else if (isRevealed && !isCorrect) {
                    optCardClass = 'bg-slate-50/40 border-slate-200 text-slate-400 opacity-50';
                    keyBadgeClass = 'bg-slate-100 border-slate-200 text-slate-400';
                  }

                  return (
                    <div
                      key={opt.key}
                      className={`p-5 rounded-2xl border transition-all flex items-start gap-4 ${optCardClass}`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-base shrink-0 border shadow-xs ${keyBadgeClass}`}>
                        {opt.key}
                      </div>
                      <div className="text-base sm:text-lg font-medium leading-snug pt-1">
                        {opt.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Revealed Answer Clinical Box */}
            {session.answerRevealed && (
              <div className="mt-8 p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-500 space-y-3">
                <div className="flex items-center gap-2 text-xs font-black text-emerald-800 uppercase tracking-wider">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Correct Option ({currentQuestion.correctKey}) &amp; PCI Exit Exam Monograph Notes</span>
                </div>
                <p className="text-base sm:text-lg text-emerald-950 leading-relaxed font-normal">
                  {currentQuestion.explanation}
                </p>
                <div className="pt-2 border-t border-emerald-200 flex items-center justify-between text-xs text-emerald-800 font-medium">
                  <span><strong>Clinical Key Point:</strong> {currentQuestion.clinicalKeyPoint}</span>
                  <span className="font-mono text-emerald-900">{currentQuestion.pciReference}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Live Team Leaderboard & Buzzer Status */}
        <div className="lg:col-span-4 flex flex-col space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex-1 flex flex-col">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <h3 className="font-extrabold text-base text-slate-900 tracking-wide">
                  Live Team Standings
                </h3>
              </div>
              <span className="text-xs font-mono font-medium text-slate-500">
                Auditorium Ranks
              </span>
            </div>

            {/* Leaderboard Table / Cards */}
            <div className="space-y-3 flex-1">
              {sortedTeams.map((team, index) => {
                const isLeader = index === 0;
                const isSecond = index === 1;
                const isThird = index === 2;

                return (
                  <div
                    key={team.id}
                    className={`p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      team.id === session.buzzedTeamId
                        ? 'bg-amber-50 border-2 border-amber-400 shadow-sm'
                        : isLeader
                        ? 'bg-amber-50/40 border-amber-300'
                        : 'bg-slate-50/70 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0 ${
                          isLeader
                            ? 'bg-amber-400 text-slate-950 font-black'
                            : isSecond
                            ? 'bg-slate-200 text-slate-800 font-bold'
                            : isThird
                            ? 'bg-amber-100 text-amber-900 font-bold'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        #{index + 1}
                      </div>

                      <div className="min-w-0">
                        <div className="font-bold text-sm text-slate-900 truncate flex items-center gap-1.5">
                          <span>{team.name}</span>
                          {team.streak >= 2 && (
                            <span className="flex items-center text-[10px] text-orange-600 font-mono font-bold">
                              <Flame className="w-3 h-3 text-orange-500" />
                              {team.streak}
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {team.college || 'Pharmacy Institute'}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-lg font-mono font-black text-blue-700">
                        {team.points}
                        <span className="text-[10px] text-slate-500 font-sans font-normal ml-0.5">pts</span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono font-medium">
                        {team.correctAnswers}W / {team.wrongAnswers}L
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Audit Bar at bottom of leaderboard */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="text-xs text-slate-500 font-medium flex items-center justify-between mb-2">
                <span>Recent Score Event:</span>
                <span className="font-mono text-slate-400">Auto-Ledger</span>
              </div>
              {session.ledger[0] ? (
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex items-center justify-between font-semibold">
                    <span className="text-slate-800 truncate">{session.ledger[0].teamName}</span>
                    <span
                      className={`font-mono font-bold ${
                        session.ledger[0].deltaPoints > 0
                          ? 'text-emerald-700'
                          : session.ledger[0].deltaPoints === 0
                          ? 'text-slate-600'
                          : 'text-rose-700'
                      }`}
                    >
                      {session.ledger[0].deltaPoints > 0 ? `+${session.ledger[0].deltaPoints.toFixed(2)}` : session.ledger[0].deltaPoints.toFixed(2)} pts
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 truncate mt-0.5">
                    {session.ledger[0].reason}
                  </div>
                </div>
              ) : (
                <div className="text-xs text-slate-400 italic">No score events yet</div>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Official Academic Endorsement Seal */}
      <div className="pt-8">
        <AcademicEndorsementSeal />
      </div>
    </div>
  );
};
