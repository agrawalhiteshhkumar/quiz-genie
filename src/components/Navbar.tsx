import React from 'react';
import { useLiveQuiz } from '../context/LiveQuizContext';
import { AppMode } from '../types/quiz';
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
    if (session?.pin) {
      navigator.clipboard?.writeText(session.pin);
      setCopiedPin(true);
      setTimeout(() => setCopiedPin(false), 2000);
    }
  };

  const navItems: { mode: AppMode; label: string; icon: React.ReactNode }[] = [
    { mode: 'landing', label: 'Overview', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { mode: 'practice', label: 'Practice Drill', icon: <BookOpenCheck className="w-3.5 h-3.5" /> },
    { mode: 'participant', label: 'Student Arena', icon: <Gamepad2 className="w-3.5 h-3.5" /> },
    { mode: 'projector', label: 'Auditorium View', icon: <Tv className="w-3.5 h-3.5" /> },
    { mode: 'quizmaster', label: 'Quizmaster', icon: <SlidersHorizontal className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Institutional Bar */}
      <div className="bg-slate-900 text-slate-100 text-[10px] sm:text-[11px] py-1 px-3 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-1">
          <div className="flex items-center gap-1.5 font-bold tracking-wide truncate max-w-[240px] sm:max-w-none">
            <Building2 className="w-3 h-3 text-blue-400 shrink-0" />
            <span className="text-white truncate">D. P. Kharde Navjeevan College of Pharmacy</span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-700/60 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px]">
              <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
              <span>PCI ER-2020 Standard</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-3 gap-2">
          {/* Logo & Brand Identity */}
          <div
            onClick={() => setMode('landing')}
            className="flex items-center gap-2.5 cursor-pointer group select-none min-w-0"
          >
            <img
              src="/brightpath-logo.png"
              alt="Bright Path Logo"
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain rounded-xl shadow-xs border border-slate-200/80 bg-white shrink-0 group-hover:scale-105 transition-transform"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-black text-sm sm:text-base md:text-lg tracking-tight text-slate-900 font-sans truncate">
                  Bright Path Quiz Genie
                </span>
                <span className="text-[9px] font-bold uppercase text-blue-700 bg-blue-50 border border-blue-200 px-1 py-0.5 rounded shrink-0">
                  Exit Exam
                </span>
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 truncate flex items-center gap-1.5">
                <span className="font-semibold text-slate-700">Learn. Skill. Succeed.</span>
              </div>
            </div>
          </div>

          {/* Desktop Mode Navigation */}
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

          {/* Action Utilities (Right) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Student Auth status or Quick Sign-in */}
            {studentProfile ? (
              <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 pl-2 pr-1.5 py-1 rounded-xl shadow-xs max-w-[130px] sm:max-w-[190px]">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <div className="text-left truncate">
                  <div className="text-[10px] font-bold text-slate-900 truncate">
                    {studentProfile.fullName}
                  </div>
                </div>

                <button
                  onClick={logoutStudent}
                  title="Logout / Switch Account"
                  className="p-1 text-slate-400 hover:text-rose-600 hover:bg-emerald-100 rounded transition-colors cursor-pointer"
                >
                  <LogOut className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <button
                onClick={openAuthModal}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
              >
                <UserPlus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline">Student Entry</span>
                <span className="sm:hidden text-[11px]">Login</span>
              </button>
            )}

            {/* Room PIN pill */}
            <button
              onClick={handleCopyPin}
              title="Click to copy auditorium PIN"
              className="flex items-center gap-1 bg-slate-50 border border-slate-200 hover:border-blue-400 px-2 py-1.5 rounded-lg text-xs transition-colors cursor-pointer shadow-2xs"
            >
              <span className="text-slate-400 font-mono text-[10px] font-semibold hidden xs:inline">PIN:</span>
              <span className="font-mono font-bold text-blue-700 text-[11px]">
                {session?.pin || '829140'}
              </span>
              <Share2 className="w-3 h-3 text-slate-400" />
              {copiedPin && (
                <span className="text-[9px] text-emerald-600 font-bold">Copied</span>
              )}
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleAudio}
              title={audioEnabled ? 'Mute Audio' : 'Enable Audio'}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer shadow-2xs ${
                audioEnabled
                  ? 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
                  : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
              }`}
            >
              {audioEnabled ? <Volume2 className="w-3.5 h-3.5 text-blue-700" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Reset Session */}
            <button
              onClick={() => {
                if (window.confirm('Reset this tournament session with fresh scores and a new room PIN?')) {
                  resetTournament();
                }
              }}
              title="Reset tournament data"
              className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-400 hover:text-rose-600 hover:border-rose-300 hover:bg-rose-50 transition-colors cursor-pointer shadow-2xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Scrollable Segment Controls */}
        <div className="flex xl:hidden overflow-x-auto py-1.5 gap-1 border-t border-slate-200 no-scrollbar touch-pan-x">
          {navItems.map((item) => {
            const isActive = currentMode === item.mode;
            return (
              <button
                key={item.mode}
                onClick={() => setMode(item.mode)}
                className={`whitespace-nowrap flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
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
