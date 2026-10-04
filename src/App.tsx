/**
 * Bright Path D.Pharm Exit Exam Prep
 * Tagline: Learn. Skill. Succeed.
 * Module 13: Competitive Quiz & Exit Exam Practice
 */

import React from 'react';
import { LiveQuizProvider, useLiveQuiz } from './context/LiveQuizContext';
import { Navbar } from './components/Navbar';
import { LandingView } from './components/LandingView';
import { ParticipantView } from './components/ParticipantView';
import { ProjectorView } from './components/ProjectorView';
import { QuizmasterView } from './components/QuizmasterView';
import { PracticeView } from './components/PracticeView';
import { StudentAuthModal } from './components/StudentAuthModal';

const MainContent: React.FC = () => {
  const { currentMode } = useLiveQuiz();

  switch (currentMode) {
    case 'participant':
      return <ParticipantView />;
    case 'projector':
      return <ProjectorView />;
    case 'quizmaster':
      return <QuizmasterView />;
    case 'practice':
      return <PracticeView />;
    case 'landing':
    default:
      return <LandingView />;
  }
};

export default function App() {
  return (
    <LiveQuizProvider>
      <div className="min-h-screen max-w-full overflow-x-hidden bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1 w-full max-w-full overflow-x-hidden flex flex-col">
          <MainContent />
        </main>
        <StudentAuthModal />
      </div>
    </LiveQuizProvider>
  );
}
