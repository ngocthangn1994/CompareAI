import type { AIModel } from "../types";

const openRouterURL = "https://openrouter.ai/api/v1/models";
const headers = {
  "Content-Type": "application/json",
};

let cache: AIModel[] = [];
let cacheTime = 0;
let cacheDuration = 5 * 60 * 1000;
const PROVIDERS = ["openai", "x-ai", "anthropic", "deepseek", "google"];
export async function fetchModels(): Promise<AIModel[]> {
  let cacheFresh = Date.now() - cacheTime < cacheDuration;

  if (cache.length > 0 && cacheFresh) {
    return cache;
  }

  const request = await fetch(openRouterURL, {
    method: "get",
    headers: headers,
  });
  if (!request.ok) {
    throw new Error("Invalid AIModel.");
  }

  const data = await request.json();
  if (!Array.isArray(data.data)) {
    throw new Error("Invalid AIModel");
  }

  let models: AIModel[] = data.data
    .filter((model: any) => {
      let provider = model.id.split("/")[0];
      let supportInput = model.architecture?.input_modalities?.includes("text");
      let supportOutput =
        model.architecture?.output_modalities?.includes("text");
      return (
        PROVIDERS.includes(provider) &&
        !model.id.includes(":") &&
        supportInput &&
        supportOutput
      );
    })
    .map((model: any) => ({
      id: model.id,
      name: model.name,
      provider: model.id.split("/")[0],
      enabled: true,
    }));

  cache = models;
  cacheTime = Date.now();

  return models;
}
