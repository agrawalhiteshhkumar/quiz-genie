import React from 'react';
import { useLiveQuiz } from '../context/LiveQuizContext';
import { AppMode } from '../types/quiz';
import { BrightPathLogoMark } from './BrandLogo';
import {
  Tv,
  Gamepad2,
  SlidersHorizontal,
  BookOpenCheck,
  Volume2,
  VolumeX,
  Share2,
  Sparkles,
  RotateCcw,
  UserPlus,
  LogOut,
  Building2,
  ShieldCheck
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    session,
    currentMode,
    setMode,
    audioEnabled,
    toggleAudio,
    resetTournament,
    studentProfile,
    openAuthModal,
    logoutStudent
  } = useLiveQuiz();

  const [copiedPin, setCopiedPin] = React.useState(false);

  const handleCopyPin = () => {
    navigator.clipboard?.writeText(session.pin);
    setCopiedPin(true);
    setTimeout(() => setCopiedPin(false), 2000);
  };

  const navItems: { mode: AppMode; label: string; icon: React.ReactNode }[] = [
    { mode: 'landing', label: 'Overview', icon: <Sparkles className="w-4 h-4" /> },
    { mode: 'participant', label: 'Participant Player', icon: <Gamepad2 className="w-4 h-4" /> },
    { mode: 'projector', label: 'Auditorium View', icon: <Tv className="w-4 h-4" /> },
    { mode: 'quizmaster', label: 'Quizmaster Console', icon: <SlidersHorizontal className="w-4 h-4" /> },
    { mode: 'practice', label: 'Practice Drill', icon: <BookOpenCheck className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Institutional Governance Announcement Header Strip */}
      <div className="bg-slate-900 text-slate-100 text-[11px] py-1 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 font-sans">
          <div className="flex items-center gap-2 font-bold tracking-wide">
            <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="text-white">D. P. Kharde Navjeevan College of Pharmacy</span>
            <span className="text-slate-500 hidden md:inline">·</span>
            <span className="text-slate-400 hidden md:inline font-normal">Department of Pharmaceutical Sciences</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-700/60 px-2 py-0.2 rounded-sm text-[10px]">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>PCI ER-2020 Exit Exam Standard</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17">
          {/* Custom SVG Brand Identity & Taglines */}
          <div
            onClick={() => setMode('landing')}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            <img
              src="/brightpath-logo.png"
              alt="Bright Path Quiz Genie Logo"
              className="h-[40px] w-[40px] object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-200 border border-slate-200/80 bg-white"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-base sm:text-lg tracking-tight text-slate-900 font-sans">
                  Bright Path Quiz Genie
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded">
                  Exit Exam Prep
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                <span className="font-bold text-slate-700">Learn. Skill. Succeed.</span>
                <span className="text-slate-300">·</span>
                <span className="text-emerald-700 font-semibold text-[11px]">Part of Faculty AI Genie &amp; Office AI Ecosystem</span>
              </div>
            </div>
          </div>

          {/* Mode Switcher Segmented Control */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
            {navItems.map((item) => {
              const isActive = currentMode === item.mode;
              return (
                <button
                  key={item.mode}
                  onClick={() => setMode(item.mode)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right utilities: Verified Student Profile OR Sign In / Register, PIN, Audio, Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Student Auth status or Sign in button */}
            {studentProfile ? (
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 pl-2.5 pr-2 py-1 rounded-xl shadow-xs">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <div className="text-left max-w-[140px] sm:max-w-[220px] truncate">
                  <div className="text-[11px] font-bold text-slate-900 truncate">
                    {studentProfile.fullName}
                  </div>
                  <div className="text-[10px] text-emerald-800 font-medium truncate">
                    {studentProfile.college}
                  </div>
                </div>

                <button
                  onClick={logoutStudent}
                  title="Logout / Switch Account"
                  className="p-1 text-slate-400 hover:text-rose-600 hover:bg-emerald-100/60 rounded transition-colors cursor-pointer ml-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={openAuthModal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm shadow-blue-600/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Student Sign In / Register</span>
                <span className="sm:hidden">Sign In</span>
              </button>
            )}

            {/* Live PIN badge */}
            <button
              onClick={handleCopyPin}
              title="Click to copy auditorium PIN"
              className="flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-400 px-2.5 py-1.5 rounded-lg text-xs transition-colors group cursor-pointer shadow-xs"
            >
              <span className="text-slate-500 font-mono text-[11px] font-semibold">PIN:</span>
              <span className="font-mono font-bold text-blue-700 tracking-wider">
                {session.pin}
              </span>
              <Share2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
              {copiedPin && (
                <span className="text-[10px] text-emerald-600 font-bold">Copied!</span>
              )}
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleAudio}
              title={audioEnabled ? 'Mute Sound Effects' : 'Enable Sound Effects'}
              className={`p-2 rounded-lg border transition-colors cursor-pointer shadow-xs ${
                audioEnabled
                  ? 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
                  : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
              }`}
            >
              {audioEnabled ? <Volume2 className="w-4 h-4 text-blue-700" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Reset Session */}
            <button
              onClick={() => {
                if (window.confirm('Reset this tournament session with fresh scores and a new room PIN?')) {
                  resetTournament();
                }
              }}
              title="Reset tournament data"
              className="p-2 rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-rose-600 hover:border-rose-300 hover:bg-rose-50 transition-colors cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation bar */}
        <div className="flex xl:hidden overflow-x-auto py-2 gap-1 border-t border-slate-200 no-scrollbar">
          {navItems.map((item) => {
            const isActive = currentMode === item.mode;
            return (
              <button
                key={item.mode}
                onClick={() => setMode(item.mode)}
                className={`whitespace-nowrap flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-slate-900 bg-slate-100'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
