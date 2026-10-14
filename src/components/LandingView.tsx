import React from 'react';
import { 
  Trophy, 
  BookOpen, 
  Activity, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Sparkles,
  Award
} from 'lucide-react';
import { PCI_SUBJECT_SUMMARY, INITIAL_TEAMS } from '../data/questions';

export interface LandingViewProps {
  onStartQuiz?: (subjectFilter?: string) => void;
  onStartPractice?: (subjectFilter?: string) => void;
  onNavigate?: (view: string) => void;
  totalQuestionCount?: number;
}

export const LandingView: React.FC<LandingViewProps> = ({ 
  onStartQuiz, 
  onStartPractice, 
  onNavigate,
  totalQuestionCount = 100 
}) => {
  const handleLaunch = (filter?: string) => {
    if (onStartQuiz) {
      onStartQuiz(filter);
    } else if (onStartPractice) {
      onStartPractice(filter);
    } else if (onNavigate) {
      onNavigate('quiz');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      {/* Top Status Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 text-xs py-2 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>DPEE 2026-27 Master Edition • Aligned to PCI ER-2020 Curriculum</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-400">
          <span>MSBTE / State Pharmacy Council Standards</span>
          <span>•</span>
          <span>Competition Mode Active</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Inter-College Exit Exam Arena
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Master the D.Pharm Exit Exam with Clinical Precision
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Comprehensive, case-based questions spanning all 11 PCI ER-2020 subjects. Practice high-yield clinical pearls, pharmaceutical calculations, and hospital safety protocols with zero clutter.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => handleLaunch()}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-sm hover:shadow transition-all duration-150 gap-2 cursor-pointer"
                >
                  Start Full Mock Exam
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleLaunch('RapidRevision')}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl transition-all duration-150 gap-2 border border-slate-200 cursor-pointer"
                >
                  <Clock className="w-4 h-4 text-slate-500" />
                  30-Min Rapid Drill
                </button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 max-w-xl">
                <div>
                  <div className="text-2xl font-bold text-slate-900">{totalQuestionCount}+</div>
                  <div className="text-xs text-slate-500 font-medium">Curated Questions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">11 Subjects</div>
                  <div className="text-xs text-slate-500 font-medium">PCI ER-2020 Modules</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">100% Verified</div>
                  <div className="text-xs text-slate-500 font-medium">IP & Law Mapped</div>
                </div>
              </div>
            </div>

            {/* Right Column: Live Team Leaderboard Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-400" />
                    <h3 className="font-semibold text-sm tracking-wide uppercase text-slate-200">
                      College Leaderboard
                    </h3>
                  </div>
                  <span className="text-xs bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800">
                    Live Score
                  </span>
                </div>

                <div className="divide-y divide-slate-800 mt-2">
                  {INITIAL_TEAMS.map((team, idx) => (
                    <div key={team.id} className="py-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`w-6 text-center font-bold text-sm ${idx === 0 ? 'text-amber-400' : 'text-slate-400'}`}>
                          #{idx + 1}
                        </span>
                        <div>
                          <div className="text-sm font-medium text-slate-100">{team.name}</div>
                          <div className="text-xs text-slate-400 truncate max-w-[180px]">{team.college}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-emerald-400">{team.points} pts</div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-1 justify-end">
                          <Flame className="w-3 h-3 text-orange-400" />
                          {team.streak} streak
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-center">
                  <p className="text-xs text-slate-400">
                    Institutional score auto-updates after each evaluated test run.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PCI ER-2020 Subject Drill Section */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              PCI ER-2020 Subject Drill Hub
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-1">
              Select any specific course code to launch an isolated practice session.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-lg text-xs font-medium text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Standard Distractors
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-lg text-xs font-medium text-slate-600">
              <Award className="w-3.5 h-3.5 text-indigo-600" />
              Bloom's Taxonomy Tags
            </span>
          </div>
        </div>

        {/* Subject Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PCI_SUBJECT_SUMMARY.map((sub) => (
            <div 
              key={sub.code}
              onClick={() => handleLaunch(sub.name)}
              className="bg-white rounded-xl border border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold px-2 py-1 rounded bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                    {sub.code}
                  </span>
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {sub.passRate}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {sub.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                  {sub.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">
                  {sub.questionCount} Questions Available
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-indigo-600 group-hover:translate-x-0.5 transition-transform">
                  Practice <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Value Highlights */}
      <section className="bg-white border-t border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start">
              <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 flex-shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Authoritative Reference Rigor</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Every answer option is linked directly to Indian Pharmacopoeia monographs, the Drugs & Cosmetics Act 1940, and MSBTE curriculum standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 flex-shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Case Scenarios & SOAP Format</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Includes dosage calculations, drug-drug interaction alerts, adverse effect antidotes, and hospital dispensing protocols.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600 flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Immediate Clinical Rationale</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Review mechanism-level explanations and rapid viva mnemonics immediately after answering each scenario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026-2027 D.Pharm Exit Examination Academic Quiz Resource. Educational Revision Aid.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingView;
