
export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  image?: string;
  tags?: string[];   // nouveau champ optionnel
}

export interface FactCard {
  id: number;
  title: string;
  description: string;
  medicinalEffect: string;
}

export interface Ailment {
  id: number;
  name: string;
  description: string;
}

export interface Dish {
  id: number;
  name: string;
  image?: string;
  treatsAilments: number[];
  description: string;
  medicinalEffect: string;
}

export interface GameState {
  currentScreen: 'splash' | 'instructions' | 'quiz' | 'factCard' | 'healerMode' | 'results';
  currentQuestionIndex: number;
  score: number;
  correctAnswers: number;
  factsRead: number;
  timeBonus: number;
  healerModeCompleted: boolean;
}
