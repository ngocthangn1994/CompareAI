import Sidebar from "../components/layout/Sidebar";
import PromptInput from "../components/compare/PromptInput";
import api from "../api/api";
import { useEffect, useState } from "react";
import type { modelAI } from "../types/model";
import type { ModelCompareResult } from "../types/comparison";
import AnswerCard from "../components/compare/AnswerCard";
import AnswerCardSkeleton from "../components/compare/AnswerCardSkeleton";
import ScoreCard from "../components/compare/ScoreCard";
import type { scoreSummary, scoreModel } from "../types/scoreAnswer";

const ComparePage = () => {
  const [models, setModels] = useState<modelAI[]>([]);
  const [prompt, setPrompt] = useState<string>("");
  const [result, setResult] = useState<ModelCompareResult>();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [scores, setScores] = useState<scoreSummary>();
  const [error, setError] = useState<string | null>(null);

  const toggleModel = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const handleClick = async () => {
    if (!prompt.trim() || selectedIds.length === 0) return;
    setLoading(true);
    setError(null);
    setScores(undefined);
    setResult(undefined);
    try {
      const comparePrompt = (await api.compareModels(
        "compare",
        "POST",
        JSON.stringify({ prompt, models: selectedIds }),
      )) as ModelCompareResult;
      setResult(comparePrompt);

      const scoreModels = (await api.scoreModels(
        "score",
        "POST",
        JSON.stringify({
          prompt,
          answer: comparePrompt.data,
        }),
      )) as scoreSummary;
      if (!scoreModels) {
        throw new Error("");
      }
      setScores(scoreModels);
    } catch (error) {
      console.error(error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to compare or score answer",
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    async function getModels() {
      let response = await api.getModels("models", "GET");
      if (!response) {
        throw new Error("Invalid response. Failed to fetch");
      }
      let result = response.data.slice(0, 12);
      setModels(result);
      return result;
    }
    getModels();
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-[0.2fr_0.8fr]">
        <div className="min-h-screen bg-slate-900">
          <Sidebar />
        </div>
        <div>
          <PromptInput
            isCompare={handleClick}
            models={models}
            prompt={prompt}
            setPrompt={setPrompt}
            selectedIds={selectedIds}
            toggleModel={toggleModel}
          />
          {isLoading && <AnswerCardSkeleton />}
          {result && (
            <div className="text-center p-5 text-2xl font-bold bg-violet-100 text-violet-700">
              Compare AI Models
            </div>
          )}
          <div className="grid md:grid-cols-3 p-5 gap-5">
            {result &&
              result.data.map((model) => (
                <div key={model.model}>
                  <AnswerCard
                    provider={model.provider}
                    model={model.model}
                    answer={model.choices[0]?.message.content ?? ""}
                  />
                </div>
              ))}
            {scores &&
              scores.data.scores.map((score) => (
                <ScoreCard
                  model={score.model}
                  accuracy={score.accuracy}
                  completeness={score.completeness}
                  clarity={score.clarity}
                  conciseness={score.conciseness}
                  reason={score.reason}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparePage;
