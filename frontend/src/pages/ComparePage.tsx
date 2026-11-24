import Sidebar from "../components/layout/Sidebar";
import PromptInput from "../components/compare/PromptInput";
import api from "../api/api";
import { useEffect, useState } from "react";
import type { modelAI } from "../types/model";
import type { ModelCompareResult } from "../types/comparison";
import AnswerCard from "../components/compare/AnswerCard";
import AnswerCardSkeleton from "../components/compare/AnswerCardSkeleton";
const ComparePage = () => {
  const [models, setModels] = useState<modelAI[]>([]);
  const [prompt, setPrompt] = useState<string>("");
  const [result, setResult] = useState<ModelCompareResult>();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const toggleModel = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const handleClick = async () => {
    if (!prompt.trim() || selectedIds.length === 0) return;
    setLoading(true);
    try {
      const comparePrompt = (await api.compareModels(
        "compare",
        "POST",
        JSON.stringify({ prompt, models: selectedIds }),
      )) as ModelCompareResult;
      setResult(comparePrompt);
    } catch (error) {
      throw new Error("Error when request compare prompt.");
      console.error(error);
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
        <div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparePage;
