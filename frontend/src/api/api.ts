const BASE_URL = "http://localhost:4000/v1/api/";
import type { getModels } from "../types/model";

async function fetchData<T>(
  path: string,
  method: string,
  body?: RequestInit["body"],
): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });

  if (!response.ok) {
    throw new Error("Invalid request HTTP, can't fetch data.");
  }

  let result = await response.json();
  return result;
}

const api = {
  getModels: async (path: string, method: string): Promise<getModels> => {
    return await fetchData(path, method);
  },
  compareModels: async (path: string, method: string, body?: string) => {
    return await fetchData(path, method, body);
  },
  scoreModels: async (path: string, method: string, body?: string) => {
    return await fetchData(path, method, body);
  },
};

export default api;
