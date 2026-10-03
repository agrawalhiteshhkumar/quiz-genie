import React from 'react';
import { useLiveQuiz } from '../context/LiveQuizContext';
import {
  BookOpenCheck,
  Bookmark,
  Tv,
  User,
  UserCheck,
  Gamepad2,
  Sparkles
} from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const {
    currentMode,
    setMode,
    studentProfile,
    openAuthModal,
    bookmarkedQuestionIds
  } = useLiveQuiz();

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-lg px-2 py-1.5 flex items-center justify-around">
      {/* 1. Practice Drill */}
      <button
        onClick={() => setMode('practice')}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer min-w-[64px] ${
          currentMode === 'practice'
            ? 'text-blue-700 font-bold'
            : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <BookOpenCheck className="w-5 h-5 mb-0.5" />
        <span className="text-[10px] tracking-tight">Practice Drill</span>
      </button>

      {/* 2. Participant Player */}
      <button
        onClick={() => setMode('participant')}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer min-w-[64px] ${
          currentMode === 'participant'
            ? 'text-blue-700 font-bold'
            : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <Gamepad2 className="w-5 h-5 mb-0.5" />
        <span className="text-[10px] tracking-tight">Live Buzzer</span>
      </button>

      {/* 3. Bookmarks / Revision */}
      <button
        onClick={() => {
          setMode('practice');
        }}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer min-w-[64px] relative ${
          currentMode === 'practice'
            ? 'text-slate-600'
            : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <div className="relative">
          <Bookmark className="w-5 h-5 mb-0.5 text-amber-500 fill-amber-500" />
          {bookmarkedQuestionIds.length > 0 && (
            <span className="absolute -top-1 -right-2 w-4 h-4 bg-amber-500 text-slate-950 rounded-full font-mono text-[9px] font-black flex items-center justify-center">
              {bookmarkedQuestionIds.length}
            </span>
          )}
        </div>
        <span className="text-[10px] tracking-tight">Revision</span>
      </button>

      {/* 4. Auditorium View */}
      <button
        onClick={() => setMode('projector')}
        className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer min-w-[64px] ${
          currentMode === 'projector'
            ? 'text-blue-700 font-bold'
            : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <Tv className="w-5 h-5 mb-0.5" />
        <span className="text-[10px] tracking-tight">Auditorium</span>
      </button>

      {/* 5. Student Profile / Auth */}
      <button
        onClick={studentProfile ? () => setMode('landing') : openAuthModal}
        className="flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors cursor-pointer min-w-[64px] text-slate-500 hover:text-slate-900"
      >
        {studentProfile ? (
          <>
            <UserCheck className="w-5 h-5 mb-0.5 text-emerald-600" />
            <span className="text-[10px] tracking-tight text-emerald-700 font-bold truncate max-w-[55px]">
              Verified
            </span>
          </>
        ) : (
          <>
            <User className="w-5 h-5 mb-0.5 text-blue-600" />
            <span className="text-[10px] tracking-tight text-blue-600 font-bold">Sign In</span>
          </>
        )}
      </button>
    </nav>
  );
};
