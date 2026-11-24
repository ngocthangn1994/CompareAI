import ModelPicker from "./ModelPicker";
import type { modelAI } from "../../types/model";
type PromptInputProp = {
  models: modelAI[];
  prompt: string;
  setPrompt: (value: string) => void;
  isCompare: () => void;
  selectedIds: string[];
  toggleModel: (id: string) => void;
};
const PromptInput = ({
  models,
  prompt,
  setPrompt,
  isCompare,
  selectedIds,
  toggleModel,
}: PromptInputProp) => {
  return (
    <>
      <div className="p-10">
        <p className="text-3xl font-bold">One prompt. Multiple perspectives.</p>
        <p className="text-slate-500">
          Compare answers from top AI models side by side, spot the differences,
          and find the best response for your needs.
        </p>
        <div className="mt-5 border border-slate-200 rounded-xl">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="type your question here and pick the AI Models..."
            className="px-5 field-sizing-content w-full min-h-50 p-5 text-2xl text-slate-600 hover:border-slate-300 outline-none"
          ></textarea>
          <ModelPicker
            isCompare={isCompare}
            models={models}
            selectedIds={selectedIds}
            toggleModel={toggleModel}
          />
        </div>
      </div>
    </>
  );
};

export default PromptInput;
