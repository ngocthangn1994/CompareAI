export interface scoreModel {
  model: string;
  accuracy: number;
  completeness: number;
  clarity: number;
  conciseness: number;
  reason: string;
}

export interface scoreSummary {
  success: boolean;
  message: string;
  data: {
    scores: scoreModel[];
    winner: string;
    verdict: string;
  };
}
