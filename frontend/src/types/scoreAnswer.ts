export interface scoreModel {
  model: string;
  accuracy: Number;
  completeness: Number;
  clarity: Number;
  conciseness: Number;
  strengths: string;
  weaknesses: string;
}

export interface scoreSummary {
  scoreModels: scoreModel[];
  winner: string;
  verdict: string;
}
