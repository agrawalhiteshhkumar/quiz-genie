import React, { useState } from 'react';
import { useLiveQuiz } from '../context/LiveQuizContext';
import { PCI_SUBJECT_SUMMARY } from '../data/questions';
import { AcademicEndorsementSeal } from './AcademicEndorsementSeal';
import {
  Gamepad2,
  Tv,
  SlidersHorizontal,
  BookOpenCheck,
  Zap,
  ShieldCheck,
  Award,
  Users,
  Pill,
  Activity,
  Leaf,
  FlaskConical,
  Scale,
  HeartPulse,
  ArrowRight,
  Sparkles,
  Timer,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

export const LandingView: React.FC = () => {
  const {
    session,
    setMode,
    joinLiveRoom,
    setParticipantTeamId,
    studentProfile,
    openAuthModal
  } = useLiveQuiz();

  const [pinInput, setPinInput] = useState<string>(session.pin);
  const [teamNameInput, setTeamNameInput] = useState<string>(studentProfile?.fullName || 'Apex Pharmacists');
  const [joinError, setJoinError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Sync teamNameInput if student profile changes
  React.useEffect(() => {
    if (studentProfile?.fullName) {
      setTeamNameInput(studentProfile.fullName);
    }
  }, [studentProfile]);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setJoinError(null);
    setIsSubmitting(true);

    const result = joinLiveRoom(pinInput, teamNameInput);
    if (!result.success) {
      setJoinError(result.message);
      setIsSubmitting(false);
    }
  };

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill':
        return <Pill className="w-5 h-5 text-blue-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-rose-600" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-emerald-600" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5 text-amber-600" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-indigo-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-teal-600" />;
      default:
        return <Pill className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="min-w-0 flex-1 bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200 bg-white">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/80 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-sky-50/70 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading, Value Prop & Quick CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wide">
                <span className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  Pharmacy Council of India (PCI) Aligned
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-600 font-medium">ER-2020 Exit Exam Standard</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Competitive Quiz &amp; Exit Exam Practice
                <span className="block text-blue-600 mt-1">
                  Master Every PCI Subject.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Empowering D.Pharm graduates for the mandatory PCI Exit Exam. Experience real-time auditorium buzzer matches, in-depth clinical rationales, Bloom&apos;s taxonomy mapping, and multi-team tournament battles.
              </p>

              {/* Mode switch demo links */}
              <div className="pt-2">
                <div className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-3">
                  Live Interactive Modes (Select Any Role):
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setMode('participant')}
                    className="flex flex-col text-left p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group cursor-pointer shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 group-hover:scale-105 transition-transform">
                        <Gamepad2 className="w-4 h-4" />
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <span className="font-bold text-sm text-slate-900">Participant Player</span>
                    <span className="text-xs text-slate-500 mt-0.5">Interactive buzzer, options A-D, instant rationales</span>
                  </button>

                  <button
                    onClick={() => setMode('projector')}
                    className="flex flex-col text-left p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group cursor-pointer shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 rounded-lg bg-sky-50 border border-sky-200 text-sky-600 group-hover:scale-105 transition-transform">
                        <Tv className="w-4 h-4" />
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <span className="font-bold text-sm text-slate-900">Auditorium Screen</span>
                    <span className="text-xs text-slate-500 mt-0.5">High-contrast projection view &amp; live leaderboard</span>
                  </button>

                  <button
                    onClick={() => setMode('quizmaster')}
                    className="flex flex-col text-left p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group cursor-pointer shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 group-hover:scale-105 transition-transform">
                        <SlidersHorizontal className="w-4 h-4" />
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <span className="font-bold text-sm text-slate-900">Quizmaster Console</span>
                    <span className="text-xs text-slate-500 mt-0.5">Timer control, points award &amp; audit ledger</span>
                  </button>
                </div>
              </div>

              {/* Practice exam direct CTA */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setMode('practice')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <BookOpenCheck className="w-4 h-4" />
                  <span>Start Practice Exam (PCI Syllabus Drill)</span>
                </button>
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Pass mark: 50% per paper standard</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Tournament PIN Join Box */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-lg relative">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="font-bold text-sm text-slate-900 tracking-wide">
                      Live Quiz Arena
                    </span>
                  </div>
                  <span className="text-xs font-mono font-medium text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                    Room Active
                  </span>
                </div>

                {!studentProfile ? (
                  <div className="mb-4 p-3 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center justify-between text-xs">
                    <span className="text-slate-700 font-medium">New Student? Register with Email OTP</span>
                    <button
                      type="button"
                      onClick={openAuthModal}
                      className="font-bold text-blue-700 hover:text-blue-800 underline cursor-pointer"
                    >
                      Sign In / Register →
                    </button>
                  </div>
                ) : (
                  <div className="mb-4 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-semibold truncate">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate">Verified: {studentProfile.fullName} ({studentProfile.college})</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleJoin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Auditorium PIN Code (6 Digits)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={pinInput}
                        onChange={(e) => setPinInput(e.target.value)}
                        placeholder="e.g. 829140"
                        maxLength={8}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-lg font-mono font-bold tracking-widest text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setPinInput(session.pin)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-blue-700 hover:text-blue-800 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded"
                      >
                        Active PIN
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Team or Student Name
                    </label>
                    <input
                      type="text"
                      value={teamNameInput}
                      onChange={(e) => setTeamNameInput(e.target.value)}
                      placeholder="e.g. Apex Pharmacists or Your Name"
                      maxLength={32}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                      required
                    />
                  </div>

                  {joinError && (
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                      <span>{joinError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Zap className="w-4 h-4 fill-white" />
                    <span>Join Live Tournament</span>
                  </button>
                </form>

                {/* Quick Join Preset Teams */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-500 mb-2 flex items-center justify-between">
                    <span>Quick Switch to Registered Teams:</span>
                    <span className="text-slate-400">{session.teams.length} teams in lobby</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {session.teams.slice(0, 4).map((team) => (
                      <button
                        key={team.id}
                        type="button"
                        onClick={() => {
                          setParticipantTeamId(team.id);
                          setMode('participant');
                        }}
                        className="text-left p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50/70 border border-slate-200 hover:border-blue-300 text-xs transition-colors group cursor-pointer"
                      >
                        <div className="font-bold text-slate-800 truncate group-hover:text-blue-700">
                          {team.name}
                        </div>
                        <div className="text-[10px] text-slate-500 flex items-center justify-between mt-0.5">
                          <span className="font-mono font-semibold text-blue-700">{team.points} pts</span>
                          <span className="text-emerald-600 font-semibold font-mono">Ranked</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PCI Subject Syllabus Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-700 tracking-wide uppercase mb-1">
              <span>PCI Curriculum Framework</span>
              <span className="text-slate-300">/</span>
              <span>D.Pharm Education Regulations 2020</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Core Exit Exam Subjects
            </h2>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            Exit Exam Paper 1, 2 &amp; 3 Question Banks Ready
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PCI_SUBJECT_SUMMARY.map((sub) => (
            <div
              key={sub.name}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all group shadow-xs"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 group-hover:bg-blue-50 transition-colors">
                  {getSubjectIcon(sub.icon)}
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-slate-500 font-bold block">
                    {sub.code}
                  </span>
                  <span className="text-[11px] text-emerald-600 font-semibold">
                    {sub.passRate}
                  </span>
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-blue-700 transition-colors">
                {sub.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {sub.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                <span className="text-slate-500">
                  <strong className="text-slate-800">{sub.questionCount}</strong> Practice MCQs
                </span>
                <button
                  onClick={() => setMode('practice')}
                  className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Drill Subject</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  100% Verified PCI Standards
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Questions are meticulously cross-referenced with Indian Pharmacopoeia monographs, the Drugs &amp; Cosmetics Act 1940, and official PCI blueprints.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 shrink-0">
                <Timer className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Sub-Second Reaction Buzzer
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Low-latency live buzzer timing records millisecond reaction speeds. Perfect for college inter-batch pharmacy quiz competitions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Append-Only Score Ledger
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Full transparency for faculty and quizmasters. Every awarded point, penalty, and question ID is logged into an immutable audit trail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Academic Endorsement Seal */}
      <section className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AcademicEndorsementSeal />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 bg-slate-100 text-slate-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-bold text-slate-900">Bright Path Quiz Genie</span>
            <span className="text-slate-300">·</span>
            <span>Learn. Skill. Succeed.</span>
            <span className="text-slate-300">·</span>
            <span className="text-emerald-700 font-semibold">Faculty AI Genie &amp; Office AI Ecosystem</span>
          </div>
          <div>
            <span>Quiz Genie Assessment Engine — Dr. Hiteshkumar S. Agrawal, Principal · D. P. Kharde Navjeevan College of Pharmacy</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
