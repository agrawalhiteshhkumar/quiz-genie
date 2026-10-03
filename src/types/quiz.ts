export type Subject =
  | 'Pharmaceutics'
  | 'Pharmacology'
  | 'Pharmacognosy'
  | 'Pharmaceutical Chemistry'
  | 'Pharmacy Law & Ethics'
  | 'Clinical Pharmacy';

export type BloomsTaxonomy =
  | 'Remember'
  | 'Understand'
  | 'Apply'
  | 'Analyze'
  | 'Evaluate';

export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface QuestionOption {
  key: OptionKey;
  text: string;
}

export interface Question {
  id: string;
  subject: Subject;
  topic: string;
  bloomTaxonomy: BloomsTaxonomy;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  options: QuestionOption[];
  correctKey: OptionKey;
  explanation: string;
  clinicalKeyPoint: string;
  pciReference: string;
}

export interface Team {
  id: string;
  name: string;
  college?: string;
  points: number;
  correctAnswers: number;
  wrongAnswers: number;
  streak: number;
  buzzedAt?: number | null;
  reactionTimeMs?: number | null;
  avatarBg: string;
}

export interface ScoreLedgerItem {
  id: string;
  timestamp: string;
  teamId: string;
  teamName: string;
  deltaPoints: number;
  newTotal: number;
  reason: string;
  questionId?: string;
  awardedBy: 'Quizmaster' | 'System Auto-Rule';
}

export type QuizStatus =
  | 'idle'
  | 'question_active'
  | 'buzzer_open'
  | 'buzzed'
  | 'answer_revealed'
  | 'concluded';

export interface TournamentSession {
  pin: string;
  status: QuizStatus;
  currentQuestionIndex: number;
  timerSeconds: number;
  initialTimerSeconds: number;
  isTimerRunning: boolean;
  buzzerLocked: boolean;
  buzzedTeamId: string | null;
  buzzedTimestamp: number | null;
  answerRevealed: boolean;
  selectedSubjectFilter: string | 'All';
  teams: Team[];
  ledger: ScoreLedgerItem[];
  tournamentLocked: boolean;
}

export interface StudentProfile {
  id: string;
  fullName: string;
  college: string;
  email: string;
  verifiedAt: string;
}

export type AppMode = 'landing' | 'participant' | 'projector' | 'quizmaster' | 'practice';
