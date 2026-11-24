type Choice = {
  message: {
    content: string;
  };
};

export type ModelResult = {
  model: string;
  provider: string;
  choices: Choice[];
};

export type ModelCompareResult = {
  success: boolean;
  message: string;
  data: ModelResult[];
};
