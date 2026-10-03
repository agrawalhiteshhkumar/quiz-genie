import React, { useState } from 'react';
import { useLiveQuiz } from '../context/LiveQuizContext';
import { AcademicEndorsementSeal } from './AcademicEndorsementSeal';
import {
  Play,
  Unlock,
  Lock,
  Eye,
  PlusCircle,
  MinusCircle,
  ArrowRight,
  Trophy,
  Download,
  Users,
  History
} from 'lucide-react';

export const QuizmasterView: React.FC = () => {
  const {
    session,
    currentQuestion,
    allQuestions,
    startQuestion,
    openBuzzer,
    lockBuzzer,
    revealAnswer,
    awardPoints,
    penalizeTeam,
    nextQuestion,
    lockTournament,
    addCustomTeam
  } = useLiveQuiz();

  const [newTeamName, setNewTeamName] = useState('');
  const [newCollegeName, setNewCollegeName] = useState('');
  const selectedTeamId = session.teams[0]?.id || '';

  const buzzedTeam = session.buzzedTeamId
    ? session.teams.find((t) => t.id === session.buzzedTeamId)
    : null;

  const handleAddTeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTeamName.trim()) return;
    addCustomTeam(newTeamName.trim(), newCollegeName.trim());
    setNewTeamName('');
    setNewCollegeName('');
  };

  const handleExportCSV = () => {
    const headers = ['Timestamp', 'Team', 'Delta Points', 'New Total', 'Reason', 'Question ID', 'Awarded By'];
    const rows = session.ledger.map((l) => {
      const deltaStr = l.deltaPoints > 0 ? `+${l.deltaPoints.toFixed(2)}` : l.deltaPoints.toFixed(2);
      return [
        `"${l.timestamp}"`,
        `"${l.teamName}"`,
        deltaStr,
        l.newTotal.toFixed(2),
        `"${l.reason.replace(/"/g, '""')}"`,
        `"${l.questionId || ''}"`,
        `"${l.awardedBy}"`
      ];
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `DPharm_Quiz_Audit_Ledger_${session.pin}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 bg-slate-50 min-h-screen">
      {/* Top Banner: Master Station Status */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider">
              Master Control Station
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-600">Auditorium PIN: <strong className="font-mono text-blue-700">{session.pin}</strong></span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Quizmaster &amp; Proctor Command Console
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Module 13: Live competitive tournament moderation, timer override, team scoring, and tamper-proof ledger audit.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-bold text-slate-700 transition-colors cursor-pointer shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-blue-600" />
            <span>Export Audit CSV</span>
          </button>

          <button
            onClick={() => {
              if (window.confirm('Lock final tournament scores and announce official ranking?')) {
                lockTournament();
              }
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-extrabold transition-colors cursor-pointer shadow-xs"
          >
            <Trophy className="w-3.5 h-3.5 fill-slate-950" />
            <span>Conclude &amp; Lock Results</span>
          </button>
        </div>
      </div>

      {/* Primary Workflow Control Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Step-by-Step Question Workflow
            </div>
            <div className="text-sm font-bold text-slate-900">
              Q{session.currentQuestionIndex + 1}: {currentQuestion.subject} - {currentQuestion.topic}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-mono">
              Timer: <strong className={`text-sm ${session.timerSeconds <= 5 ? 'text-rose-600' : 'text-blue-700'}`}>{session.timerSeconds}s</strong>
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-500 font-mono">
              Buzzer: <strong className={session.buzzerLocked ? 'text-rose-600' : 'text-emerald-600'}>{session.buzzerLocked ? 'LOCKED' : 'OPEN'}</strong>
            </span>
          </div>
        </div>

        {/* Master Workflow Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {/* 1. Start Question */}
          <button
            onClick={() => startQuestion()}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-400 text-slate-800 transition-all cursor-pointer group shadow-2xs"
          >
            <Play className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform text-blue-600" />
            <span className="text-xs font-bold text-slate-900">1. Start Question</span>
            <span className="text-[10px] text-slate-500">Reset 30s timer</span>
          </button>

          {/* 2. Open Buzzer */}
          <button
            onClick={openBuzzer}
            disabled={!session.buzzerLocked && !session.buzzedTeamId}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 transition-all cursor-pointer group disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs"
          >
            <Unlock className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform text-emerald-600" />
            <span className="text-xs font-bold text-emerald-950">2. Unlock Buzzer</span>
            <span className="text-[10px] text-emerald-700">Allow buzz in</span>
          </button>

          {/* 3. Lock Buzzer */}
          <button
            onClick={lockBuzzer}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 transition-all cursor-pointer group shadow-2xs"
          >
            <Lock className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform text-slate-500" />
            <span className="text-xs font-bold text-slate-900">3. Lock Buzzer</span>
            <span className="text-[10px] text-slate-500">Freeze responses</span>
          </button>

          {/* 4. Reveal Answer */}
          <button
            onClick={revealAnswer}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-950 transition-all cursor-pointer group shadow-2xs"
          >
            <Eye className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform text-amber-600" />
            <span className="text-xs font-bold text-amber-950">4. Reveal Answer</span>
            <span className="text-[10px] text-amber-800">Option ({currentQuestion.correctKey})</span>
          </button>

          {/* 5. Award +1 Pt */}
          <button
            onClick={() => {
              const targetId = session.buzzedTeamId || selectedTeamId || session.teams[0]?.id;
              if (targetId) awardPoints(targetId, 1, `Correct Answer: Q#${session.currentQuestionIndex + 1} (+1 Mark)`);
            }}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all cursor-pointer group shadow-xs"
          >
            <PlusCircle className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform text-emerald-100" />
            <span className="text-xs font-bold">5. Award +1 Pt</span>
            <span className="text-[10px] text-emerald-100">Correct (+1 mark)</span>
          </button>

          {/* 6. Mark Incorrect (0 Pts) */}
          <button
            onClick={() => {
              const targetId = session.buzzedTeamId || selectedTeamId || session.teams[0]?.id;
              if (targetId) penalizeTeam(targetId, 0);
            }}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-900 transition-all cursor-pointer group shadow-2xs"
          >
            <MinusCircle className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform text-rose-600" />
            <span className="text-xs font-bold text-rose-950">6. Mark Incorrect (0 Pts)</span>
            <span className="text-[10px] text-rose-700">No penalty (0 marks)</span>
          </button>

          {/* 7. Next Question */}
          <button
            onClick={nextQuestion}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all cursor-pointer group shadow-md shadow-blue-600/25 col-span-2 sm:col-span-4 lg:col-span-1"
          >
            <ArrowRight className="w-5 h-5 mb-1 group-hover:translate-x-1 transition-transform" />
            <span className="text-xs font-bold">7. Next Question</span>
            <span className="text-[10px] text-blue-100">Load next MCQ</span>
          </button>
        </div>

        {/* Buzzed Team Alert in Console */}
        {session.buzzedTeamId && buzzedTeam && (
          <div className="p-4 rounded-xl bg-amber-50 border-2 border-amber-400 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Active Buzzer Lock-In
                </div>
                <div className="text-lg font-bold text-slate-900">
                  {buzzedTeam.name} ({buzzedTeam.reactionTimeMs ? `${buzzedTeam.reactionTimeMs}ms reaction` : 'first'})
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => awardPoints(buzzedTeam.id, 1, `Correct Buzzer Answer: Q#${session.currentQuestionIndex + 1} (+1 Mark)`)}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                Mark Correct (+1 Pt)
              </button>
              <button
                onClick={() => penalizeTeam(buzzedTeam.id, 0)}
                className="px-3.5 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-300 text-rose-800 text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                Mark Incorrect (0 Pts)
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Middle Grid: Team Scoring & Question Navigator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Teams & Manual Scoring Control */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <h2 className="font-bold text-base text-slate-900">
                Team Standings &amp; Manual Point Adjustments
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              {session.teams.length} Registered Teams
            </span>
          </div>

          {/* Teams Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="pb-2 font-bold">Team Name</th>
                  <th className="pb-2 font-bold text-center">Score</th>
                  <th className="pb-2 font-bold text-center">W / L</th>
                  <th className="pb-2 font-bold text-right">Quick Adjust</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {session.teams.map((team) => (
                  <tr key={team.id} className="hover:bg-slate-50">
                    <td className="py-3">
                      <div className="font-bold text-slate-900">{team.name}</div>
                      <div className="text-[11px] text-slate-500">{team.college || 'Pharmacy Institute'}</div>
                    </td>
                    <td className="py-3 text-center">
                      <span className="font-mono font-bold text-sm text-blue-700">{team.points}</span>
                    </td>
                    <td className="py-3 text-center text-slate-600 font-mono">
                      <span className="text-emerald-700 font-bold">{team.correctAnswers}</span> / <span className="text-rose-700 font-bold">{team.wrongAnswers}</span>
                    </td>
                    <td className="py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => awardPoints(team.id, 1, 'Quick Adjust +1')}
                          className="px-2 py-1 rounded bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200 font-mono text-[11px] font-bold text-slate-700 cursor-pointer shadow-2xs"
                        >
                          +1
                        </button>
                        <button
                          onClick={() => awardPoints(team.id, 2, 'Quick Adjust +2')}
                          className="px-2 py-1 rounded bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200 font-mono text-[11px] font-bold text-slate-700 cursor-pointer shadow-2xs"
                        >
                          +2
                        </button>
                        <button
                          onClick={() => awardPoints(team.id, 5, 'Quick Adjust +5')}
                          className="px-2 py-1 rounded bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200 font-mono text-[11px] font-bold text-slate-700 cursor-pointer shadow-2xs"
                        >
                          +5
                        </button>
                        <button
                          onClick={() => awardPoints(team.id, -1, 'Quick Adjust -1')}
                          className="px-2 py-1 rounded bg-slate-100 hover:bg-rose-50 hover:text-rose-800 border border-slate-200 font-mono text-[11px] font-bold text-slate-700 cursor-pointer shadow-2xs"
                        >
                          -1
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Team Inline Form */}
          <div className="pt-4 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-700 mb-2">Register New Team:</div>
            <form onSubmit={handleAddTeam} className="grid grid-cols-1 sm:grid-cols-12 gap-2">
              <input
                type="text"
                value={newTeamName}
                onChange={(e) => setNewTeamName(e.target.value)}
                placeholder="Team Name (e.g. Bioavailability Club)"
                className="sm:col-span-6 bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-100"
                required
              />
              <input
                type="text"
                value={newCollegeName}
                onChange={(e) => setNewCollegeName(e.target.value)}
                placeholder="College / Department"
                className="sm:col-span-4 bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-100"
              />
              <button
                type="submit"
                className="sm:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-3 py-1.5 text-xs transition-colors cursor-pointer shadow-xs"
              >
                Add Team
              </button>
            </form>
          </div>
        </div>

        {/* Question Selector & Direct Jump */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h2 className="font-bold text-base text-slate-900">
              Question Navigator (10 MCQs)
            </h2>
            <span className="text-xs font-mono font-medium text-slate-500">
              Active #{session.currentQuestionIndex + 1}
            </span>
          </div>

          <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
            {allQuestions.map((q, idx) => {
              const isActive = idx === session.currentQuestionIndex;
              return (
                <button
                  key={q.id}
                  onClick={() => startQuestion(idx)}
                  className={`w-full text-left p-2.5 rounded-xl border text-xs transition-colors flex items-start gap-2.5 cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 border-2 border-blue-600 text-slate-900 font-medium'
                      : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded flex items-center justify-center font-mono font-bold text-[10px] shrink-0 ${
                      isActive ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold truncate text-slate-900">{q.topic}</div>
                    <div className="text-[10px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                      <span>{q.subject}</span>
                      <span>·</span>
                      <span className="font-semibold text-blue-700">Ans: ({q.correctKey})</span>
                      <span>·</span>
                      <span>Bloom: {q.bloomTaxonomy}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Append-Only Score Ledger (Audit Trail) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-emerald-600" />
            <h2 className="font-bold text-base text-slate-900">
              Append-Only Score Ledger (Audit Trail)
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-mono font-medium">
            {session.ledger.length} Recorded Transactions
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-2 font-bold">Timestamp</th>
                <th className="pb-2 font-bold">Team Name</th>
                <th className="pb-2 font-bold text-center">Delta</th>
                <th className="pb-2 font-bold text-center">New Total</th>
                <th className="pb-2 font-bold">Reason / Audit Justification</th>
                <th className="pb-2 font-bold text-right">Awarded By</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {session.ledger.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="py-2.5 text-slate-500">{item.timestamp}</td>
                  <td className="py-2.5 font-sans font-bold text-slate-900">{item.teamName}</td>
                  <td className="py-2.5 text-center">
                    <span
                      className={`font-bold px-1.5 py-0.5 rounded text-[11px] ${
                        item.deltaPoints > 0
                          ? 'bg-emerald-50 border border-emerald-300 text-emerald-800'
                          : item.deltaPoints === 0
                          ? 'bg-slate-100 border border-slate-300 text-slate-700'
                          : 'bg-rose-50 border border-rose-300 text-rose-800'
                      }`}
                    >
                      {item.deltaPoints > 0 ? `+${item.deltaPoints.toFixed(2)}` : item.deltaPoints.toFixed(2)}
                    </span>
                  </td>
                  <td className="py-2.5 text-center font-bold text-blue-700">{item.newTotal.toFixed(2)} pts</td>
                  <td className="py-2.5 font-sans text-slate-700">{item.reason}</td>
                  <td className="py-2.5 text-right font-sans text-slate-500">{item.awardedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Official Academic Endorsement Seal */}
      <div className="pt-4">
        <AcademicEndorsementSeal />
      </div>
    </div>
  );
};
