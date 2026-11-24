import type { OpenRouterResponse } from "../types";
import env from "../config/env";

const apiKey = env.OPEN_ROUTER_API_KEY;
const urlRequest = "https://openrouter.ai/api/v1/chat/completions";
const headers = {
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
};

export async function fetchAnswer(
  prompt: String,
  model: String,
): Promise<OpenRouterResponse> {
  const request = await fetch(urlRequest, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      model: model,
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1000,
    }),
  });
  if (!request.ok) {
    const errText = await request.text();
    throw new Error(`OpenRouter ${request.status} for ${model}: ${errText}`);
  }
  let result = (await request.json()) as OpenRouterResponse;
  if (!result.choices?.length) {
    throw new Error(`No answer returned from ${model}`);
  }
  return result;
}

export async function compareAnswer(
  prompt: String,
  models: String[],
): Promise<OpenRouterResponse[]> {
  let result: OpenRouterResponse[] = [];
  for (let model of models) {
    let answer = await fetchAnswer(prompt, model);
    result.push(answer);
  }
  return result;
}
