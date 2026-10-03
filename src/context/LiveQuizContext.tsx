import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import {
  TournamentSession,
  Team,
  ScoreLedgerItem,
  AppMode,
  Question,
  StudentProfile,
} from '../types/quiz';
import { DPHARM_QUESTIONS, INITIAL_TEAMS } from '../data/questions';
import { soundEffects } from '../utils/audio';

const STORAGE_KEY = 'brightpath_tournament_state_v1';
const STUDENT_STORAGE_KEY = 'brightpath_student_profile_v1';
const BOOKMARKS_STORAGE_KEY = 'brightpath_bookmarked_questions_v1';
const BROADCAST_CHANNEL_NAME = 'brightpath_quiz_sync_channel';

interface LiveQuizContextValue {
  session: TournamentSession;
  currentQuestion: Question;
  allQuestions: Question[];
  currentMode: AppMode;
  participantTeamId: string | null;
  audioEnabled: boolean;
  studentProfile: StudentProfile | null;
  isAuthModalOpen: boolean;
  bookmarkedQuestionIds: string[];
  toggleBookmark: (questionId: string) => void;
  isBookmarked: (questionId: string) => boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  loginStudent: (data: { fullName: string; college: string; email: string }) => StudentProfile;
  logoutStudent: () => void;
  setMode: (mode: AppMode) => void;
  setParticipantTeamId: (teamId: string | null) => void;
  joinLiveRoom: (pin: string, teamName: string) => { success: boolean; message: string; teamId?: string };
  startQuestion: (index?: number) => void;
  openBuzzer: () => void;
  lockBuzzer: () => void;
  buzzIn: (teamId?: string) => { success: boolean; reactionMs?: number };
  revealAnswer: () => void;
  awardPoints: (teamId: string, delta: number, reason: string) => void;
  penalizeTeam: (teamId: string, delta?: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  resetTournament: () => void;
  lockTournament: () => void;
  addCustomTeam: (teamName: string, college?: string) => string;
  toggleAudio: () => void;
}

const DEFAULT_SESSION: TournamentSession = {
  pin: '829140',
  status: 'idle',
  currentQuestionIndex: 0,
  timerSeconds: 30,
  initialTimerSeconds: 30,
  isTimerRunning: false,
  buzzerLocked: true,
  buzzedTeamId: null,
  buzzedTimestamp: null,
  answerRevealed: false,
  selectedSubjectFilter: 'All',
  teams: INITIAL_TEAMS,
  ledger: [
    {
      id: 'led-init-1',
      timestamp: '10:00:15',
      teamId: 'team-alpha',
      teamName: 'Team Galen (Pharma Titans)',
      deltaPoints: 1,
      newTotal: 7,
      reason: 'Round 1 Speed Round - Capping Mechanism (+1 Mark)',
      awardedBy: 'Quizmaster'
    },
    {
      id: 'led-init-2',
      timestamp: '10:02:40',
      teamId: 'team-beta',
      teamName: 'Team Curare (Pharmacologists)',
      deltaPoints: 1,
      newTotal: 6,
      reason: 'Round 1 - Paracetamol Overdose NAC Protocol (+1 Mark)',
      awardedBy: 'Quizmaster'
    }
  ],
  tournamentLocked: false,
};

const LiveQuizContext = createContext<LiveQuizContextValue | undefined>(undefined);

export const LiveQuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<TournamentSession>(() => {
    if (typeof window !== 'undefined') {
      try {
        const cached = localStorage.getItem(STORAGE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed && parsed.teams && parsed.pin) {
            return parsed;
          }
        }
      } catch {
        // Fallback to default
      }
    }
    return DEFAULT_SESSION;
  });

  const [currentMode, setCurrentMode] = useState<AppMode>('landing');
  const [participantTeamId, setParticipantTeamId] = useState<string | null>('team-alpha');
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [studentProfile, setStudentProfile] = useState<StudentProfile | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        const cached = localStorage.getItem(STUDENT_STORAGE_KEY);
        if (cached) {
          return JSON.parse(cached);
        }
      } catch {
        // Safe ignore
      }
    }
    return null;
  });

  const [bookmarkedQuestionIds, setBookmarkedQuestionIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const cached = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
        if (cached) {
          return JSON.parse(cached);
        }
      } catch {
        // Safe ignore
      }
    }
    return ['DP-PHARM-001', 'DP-PCOL-002']; // Default initial bookmarks for high-yield revision
  });

  const toggleBookmark = useCallback((qId: string) => {
    setBookmarkedQuestionIds((prev) => {
      const exists = prev.includes(qId);
      const next = exists ? prev.filter((id) => id !== qId) : [...prev, qId];
      try {
        localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Safe ignore
      }
      return next;
    });
  }, []);

  const isBookmarked = useCallback((qId: string) => {
    return bookmarkedQuestionIds.includes(qId);
  }, [bookmarkedQuestionIds]);

  const openAuthModal = useCallback(() => setIsAuthModalOpen(true), []);
  const closeAuthModal = useCallback(() => setIsAuthModalOpen(false), []);

  const loginStudent = useCallback((data: { fullName: string; college: string; email: string }) => {
    const profile: StudentProfile = {
      id: `std-${Date.now()}`,
      fullName: data.fullName.trim(),
      college: data.college.trim(),
      email: data.email.trim().toLowerCase(),
      verifiedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setStudentProfile(profile);
    try {
      localStorage.setItem(STUDENT_STORAGE_KEY, JSON.stringify(profile));
    } catch {
      // Safe ignore
    }

    // Automatically check or create a team for this student in the session
    const existing = session.teams.find(
      (t) => t.name.toLowerCase() === profile.fullName.toLowerCase()
    );

    if (existing) {
      setParticipantTeamId(existing.id);
    } else {
      const newId = `team-${Date.now()}`;
      const newTeam: Team = {
        id: newId,
        name: profile.fullName,
        college: profile.college,
        points: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        streak: 0,
        avatarBg: 'from-blue-600 to-indigo-700',
      };
      setSession((prev) => ({
        ...prev,
        teams: [newTeam, ...prev.teams],
      }));
      setParticipantTeamId(newId);
    }

    if (audioEnabled) {
      soundEffects.playCorrect();
    }
    setIsAuthModalOpen(false);
    return profile;
  }, [audioEnabled, session.teams]);

  const logoutStudent = useCallback(() => {
    setStudentProfile(null);
    try {
      localStorage.removeItem(STUDENT_STORAGE_KEY);
    } catch {
      // Safe ignore
    }
  }, []);

  const broadcastRef = useRef<BroadcastChannel | null>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const questionStartTimestampRef = useRef<number>(Date.now());

  // Set up BroadcastChannel for instant cross-tab sync
  useEffect(() => {
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      const channel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
      broadcastRef.current = channel;

      channel.onmessage = (event) => {
        if (event.data && event.data.type === 'SYNC_SESSION') {
          setSession(event.data.payload);
        }
      };

      return () => {
        channel.close();
      };
    }
  }, []);

  // Sync to local storage & broadcast channel whenever session updates
  const updateSession = useCallback((newSessionOrFn: TournamentSession | ((prev: TournamentSession) => TournamentSession)) => {
    setSession((prev) => {
      const next = typeof newSessionOrFn === 'function' ? newSessionOrFn(prev) : newSessionOrFn;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        if (broadcastRef.current) {
          broadcastRef.current.postMessage({ type: 'SYNC_SESSION', payload: next });
        }
      } catch {
        // LocalStorage quota or safe ignore
      }
      return next;
    });
  }, []);

  // Timer countdown management
  useEffect(() => {
    if (session.isTimerRunning && session.timerSeconds > 0) {
      timerIntervalRef.current = setInterval(() => {
        updateSession((prev) => {
          if (!prev.isTimerRunning || prev.timerSeconds <= 0) {
            return prev;
          }
          const nextSec = prev.timerSeconds - 1;
          if (nextSec === 5 && audioEnabled) {
            soundEffects.playTick();
          }
          if (nextSec <= 0) {
            if (audioEnabled) soundEffects.playWrong();
            return {
              ...prev,
              timerSeconds: 0,
              isTimerRunning: false,
              buzzerLocked: true,
            };
          }
          return {
            ...prev,
            timerSeconds: nextSec,
          };
        });
      }, 1000);
    } else {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [session.isTimerRunning, session.timerSeconds, audioEnabled, updateSession]);

  const currentQuestion = DPHARM_QUESTIONS[session.currentQuestionIndex] || DPHARM_QUESTIONS[0];

  const setMode = useCallback((mode: AppMode) => {
    setCurrentMode(mode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleAudio = useCallback(() => {
    setAudioEnabled((prev) => {
      const next = !prev;
      soundEffects.enabled = next;
      return next;
    });
  }, []);

  const joinLiveRoom = useCallback((pin: string, teamName: string) => {
    if (pin.trim() !== session.pin) {
      return { success: false, message: `Invalid Tournament PIN. The active auditorium PIN is ${session.pin}.` };
    }
    if (!teamName.trim()) {
      return { success: false, message: 'Please provide a Team or Participant Name.' };
    }

    // Check if team exists
    const cleanName = teamName.trim();
    let existingTeam = session.teams.find((t) => t.name.toLowerCase() === cleanName.toLowerCase());

    if (!existingTeam) {
      // Create new team
      const newId = `team-${Date.now()}`;
      const colorPalettes = [
        'from-blue-600 to-indigo-700',
        'from-purple-600 to-indigo-800',
        'from-emerald-600 to-teal-700',
        'from-amber-500 to-orange-700',
        'from-rose-600 to-pink-700',
        'from-cyan-600 to-blue-800',
      ];
      const randomBg = colorPalettes[session.teams.length % colorPalettes.length];
      const newTeam: Team = {
        id: newId,
        name: cleanName,
        points: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        streak: 0,
        avatarBg: randomBg,
      };

      updateSession((prev) => ({
        ...prev,
        teams: [...prev.teams, newTeam],
      }));
      setParticipantTeamId(newId);
      setCurrentMode('participant');
      return { success: true, message: `Joined as ${cleanName}`, teamId: newId };
    } else {
      setParticipantTeamId(existingTeam.id);
      setCurrentMode('participant');
      return { success: true, message: `Reconnected as ${existingTeam.name}`, teamId: existingTeam.id };
    }
  }, [session.pin, session.teams, updateSession]);

  const addCustomTeam = useCallback((teamName: string, college?: string) => {
    const newId = `team-${Date.now()}`;
    const newTeam: Team = {
      id: newId,
      name: teamName.trim(),
      college: college?.trim() || 'Independent Pharmacy Scholar',
      points: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      streak: 0,
      avatarBg: 'from-sky-600 to-indigo-700',
    };
    updateSession((prev) => ({
      ...prev,
      teams: [...prev.teams, newTeam],
    }));
    return newId;
  }, [updateSession]);

  const startQuestion = useCallback((index?: number) => {
    questionStartTimestampRef.current = Date.now();
    updateSession((prev) => {
      const qIdx = index !== undefined ? index : prev.currentQuestionIndex;
      return {
        ...prev,
        currentQuestionIndex: qIdx,
        status: 'question_active',
        timerSeconds: prev.initialTimerSeconds,
        isTimerRunning: true,
        buzzerLocked: false,
        buzzedTeamId: null,
        buzzedTimestamp: null,
        answerRevealed: false,
      };
    });
  }, [updateSession]);

  const openBuzzer = useCallback(() => {
    questionStartTimestampRef.current = Date.now();
    updateSession((prev) => ({
      ...prev,
      status: 'buzzer_open',
      buzzerLocked: false,
      buzzedTeamId: null,
      buzzedTimestamp: null,
      isTimerRunning: true,
    }));
  }, [updateSession]);

  const lockBuzzer = useCallback(() => {
    updateSession((prev) => ({
      ...prev,
      buzzerLocked: true,
      isTimerRunning: false,
    }));
  }, [updateSession]);

  const buzzIn = useCallback((overrideTeamId?: string) => {
    const targetTeamId = overrideTeamId || participantTeamId;
    if (!targetTeamId) {
      return { success: false };
    }

    if (session.buzzerLocked || session.buzzedTeamId) {
      return { success: false };
    }

    const now = Date.now();
    const reactionMs = Math.max(120, now - questionStartTimestampRef.current);

    if (audioEnabled) {
      soundEffects.playBuzzer();
    }

    updateSession((prev) => {
      if (prev.buzzerLocked || prev.buzzedTeamId) return prev;
      return {
        ...prev,
        status: 'buzzed',
        buzzerLocked: true,
        buzzedTeamId: targetTeamId,
        buzzedTimestamp: now,
        isTimerRunning: false,
        teams: prev.teams.map((t) =>
          t.id === targetTeamId
            ? { ...t, buzzedAt: now, reactionTimeMs: reactionMs }
            : t
        ),
      };
    });

    return { success: true, reactionMs };
  }, [participantTeamId, session.buzzerLocked, session.buzzedTeamId, audioEnabled, updateSession]);

  const revealAnswer = useCallback(() => {
    if (audioEnabled) {
      soundEffects.playCorrect();
    }
    updateSession((prev) => ({
      ...prev,
      status: 'answer_revealed',
      answerRevealed: true,
      buzzerLocked: true,
      isTimerRunning: false,
    }));
  }, [audioEnabled, updateSession]);

  const awardPoints = useCallback((teamId: string, delta: number, reason: string) => {
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    if (delta > 0 && audioEnabled) {
      soundEffects.playCorrect();
    } else if (audioEnabled && (delta < 0 || reason.toLowerCase().includes('incorrect') || reason.toLowerCase().includes('wrong'))) {
      soundEffects.playWrong();
    }

    updateSession((prev) => {
      let targetName = 'Team';
      let newTotal = 0;
      const isMarkedWrong = delta < 0 || (delta === 0 && (reason.toLowerCase().includes('incorrect') || reason.toLowerCase().includes('wrong') || reason.toLowerCase().includes('penalty')));
      
      const updatedTeams = prev.teams.map((team) => {
        if (team.id === teamId) {
          targetName = team.name;
          const nextPoints = Math.max(0, team.points + delta);
          newTotal = nextPoints;
          return {
            ...team,
            points: nextPoints,
            correctAnswers: delta > 0 ? team.correctAnswers + 1 : team.correctAnswers,
            wrongAnswers: isMarkedWrong ? team.wrongAnswers + 1 : team.wrongAnswers,
            streak: delta > 0 ? team.streak + 1 : 0,
          };
        }
        return team;
      });

      const newLedgerItem: ScoreLedgerItem = {
        id: `led-${Date.now()}`,
        timestamp: timeStr,
        teamId,
        teamName: targetName,
        deltaPoints: delta,
        newTotal,
        reason,
        questionId: DPHARM_QUESTIONS[prev.currentQuestionIndex]?.id,
        awardedBy: 'Quizmaster',
      };

      return {
        ...prev,
        teams: updatedTeams,
        ledger: [newLedgerItem, ...prev.ledger],
      };
    });
  }, [audioEnabled, updateSession]);

  const penalizeTeam = useCallback((teamId: string, delta: number = 0) => {
    awardPoints(teamId, delta, 'Incorrect Buzzer Answer (0 Marks / No Negative Marking)');
  }, [awardPoints]);

  const nextQuestion = useCallback(() => {
    updateSession((prev) => {
      const nextIdx = (prev.currentQuestionIndex + 1) % DPHARM_QUESTIONS.length;
      return {
        ...prev,
        currentQuestionIndex: nextIdx,
        status: 'question_active',
        timerSeconds: prev.initialTimerSeconds,
        isTimerRunning: true,
        buzzerLocked: false,
        buzzedTeamId: null,
        buzzedTimestamp: null,
        answerRevealed: false,
      };
    });
  }, [updateSession]);

  const prevQuestion = useCallback(() => {
    updateSession((prev) => {
      const prevIdx = prev.currentQuestionIndex > 0 ? prev.currentQuestionIndex - 1 : DPHARM_QUESTIONS.length - 1;
      return {
        ...prev,
        currentQuestionIndex: prevIdx,
        status: 'question_active',
        timerSeconds: prev.initialTimerSeconds,
        isTimerRunning: true,
        buzzerLocked: false,
        buzzedTeamId: null,
        buzzedTimestamp: null,
        answerRevealed: false,
      };
    });
  }, [updateSession]);

  const resetTournament = useCallback(() => {
    updateSession(() => ({
      ...DEFAULT_SESSION,
      pin: `${Math.floor(100000 + Math.random() * 900000)}`,
    }));
  }, [updateSession]);

  const lockTournament = useCallback(() => {
    if (audioEnabled) {
      soundEffects.playFanfare();
    }
    updateSession((prev) => ({
      ...prev,
      status: 'concluded',
      tournamentLocked: true,
      buzzerLocked: true,
      isTimerRunning: false,
    }));
  }, [audioEnabled, updateSession]);

  return (
    <LiveQuizContext.Provider
      value={{
        session,
        currentQuestion,
        allQuestions: DPHARM_QUESTIONS,
        currentMode,
        participantTeamId,
        audioEnabled,
        studentProfile,
        isAuthModalOpen,
        bookmarkedQuestionIds,
        toggleBookmark,
        isBookmarked,
        openAuthModal,
        closeAuthModal,
        loginStudent,
        logoutStudent,
        setMode,
        setParticipantTeamId,
        joinLiveRoom,
        startQuestion,
        openBuzzer,
        lockBuzzer,
        buzzIn,
        revealAnswer,
        awardPoints,
        penalizeTeam,
        nextQuestion,
        prevQuestion,
        resetTournament,
        lockTournament,
        addCustomTeam,
        toggleAudio,
      }}
    >
      {children}
    </LiveQuizContext.Provider>
  );
};

export const useLiveQuiz = () => {
  const context = useContext(LiveQuizContext);
  if (!context) {
    throw new Error('useLiveQuiz must be used within a LiveQuizProvider');
  }
  return context;
};
