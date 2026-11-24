export interface modelAI {
  id: string;
  name: string;
  provider: string;
  enabled: boolean;
}

export interface getModels {
  data: modelAI[];
}
