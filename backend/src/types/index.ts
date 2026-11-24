export interface AIModel {
  id: String;
  name: String;
  provider: String;
  enabled: Boolean;
}

export interface OpenRouterModel {
  id: String;
  name: String;
  architecture?: {
    input_modalities?: String[];
    output_modalities?: String[];
  };
}

export interface OpenRouterResponse {
  id: string;
  provider?: string;
  model: string;
  choices: {
    message: {
      role: string;
      content: string | null;
    };
    finish_reason: string | null;
  }[];
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}
