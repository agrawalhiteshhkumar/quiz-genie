import React, { useState } from 'react';
import { useLiveQuiz } from '../context/LiveQuizContext';
import { AppMode } from '../types/quiz';
import {
  Gamepad2,
  BookOpenCheck,
  UserPlus,
  LogOut,
  Building2,
  ShieldCheck,
  Volume2,
  VolumeX,
  Share2
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    session,
    currentMode,
    setMode,
    audioEnabled,
    toggleAudio,
    studentProfile,
    openAuthModal,
    logoutStudent
  } = useLiveQuiz();

  const [copiedPin, setCopiedPin] = useState(false);

  const handleCopyPin = () => {
    if (session?.pin) {
      navigator.clipboard?.writeText(session.pin);
      setCopiedPin(true);
      setTimeout(() => setCopiedPin(false), 2000);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      {/* Tier 1: Institutional Governance Bar */}
      <div className="bg-slate-900 text-slate-100 text-[10px] py-1 px-3 border-b border-slate-800">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-1">
          <div className="flex items-center gap-1.5 font-semibold truncate">
            <Building2 className="w-3 h-3 text-blue-400 shrink-0" />
            <span className="truncate">D. P. Kharde Navjeevan College of Pharmacy</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-800 shrink-0">
            <ShieldCheck className="w-2.5 h-2.5" />
            <span>PCI & MSBTE Aligned</span>
          </span>
        </div>
      </div>

      {/* Tier 2: Clean Brand & User Status Bar */}
      <div className="max-w-4xl mx-auto px-3 py-2 flex items-center justify-between gap-2">
        <div
          onClick={() => setMode('landing')}
          className="flex items-center gap-2 cursor-pointer select-none min-w-0"
        >
          <img
            src="/brightpath-logo.png"
            alt="Logo"
            className="h-8 w-8 object-contain rounded-lg border border-slate-200 bg-white shrink-0"
          />
          <div className="min-w-0">
            <span className="font-black text-sm text-slate-900 truncate block">
              Bright Path Quiz Genie
            </span>
            <span className="text-[10px] text-blue-700 font-bold uppercase tracking-wider block">
              D.Pharm Exit Exam Prep
            </span>
          </div>
        </div>

        {/* Right Quick Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          {studentProfile ? (
            <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-lg text-xs">
              <span className="font-bold text-slate-800 text-[11px] truncate max-w-[100px]">
                {studentProfile.fullName}
              </span>
              <button
                onClick={logoutStudent}
                title="Logout"
                className="text-slate-400 hover:text-rose-600 p-0.5 cursor-pointer"
              >
                <LogOut className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <button
              onClick={openAuthModal}
              className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] rounded-lg flex items-center gap-1 cursor-pointer"
            >
              <UserPlus className="w-3 h-3" />
              <span>Login</span>
            </button>
          )}

          <button
            onClick={toggleAudio}
            title={audioEnabled ? 'Mute' : 'Unmute'}
            className="p-1 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 bg-white cursor-pointer"
          >
            {audioEnabled ? <Volume2 className="w-3.5 h-3.5 text-blue-600" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Tier 3: Centered 2-Mode Segmented Control */}
      <div className="max-w-4xl mx-auto px-3 pb-2 pt-0.5">
        <div className="grid grid-cols-2 gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
          <button
            onClick={() => setMode('practice')}
            className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              currentMode === 'practice'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpenCheck className="w-3.5 h-3.5" />
            <span>Self Practice Drill</span>
          </button>

          <button
            onClick={() => setMode('participant')}
            className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              currentMode === 'participant'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Tournament Arena</span>
          </button>
        </div>
      </div>
    </header>
  );
};
