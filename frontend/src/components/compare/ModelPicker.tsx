import { GrAttachment } from "react-icons/gr";
import { GiRegeneration } from "react-icons/gi";
import { CiPlay1 } from "react-icons/ci";
import type { modelAI } from "../../types/model";
import { useState } from "react";
import modelIcon from "../../data/modelIcon";
import { IoMdCloseCircle } from "react-icons/io";

type ModelPickerProp = {
  models: modelAI[];
  isCompare: () => void;
  selectedIds: string[];
  toggleModel: (id: string) => void;
};

const ModelPicker = ({
  models,
  isCompare,
  selectedIds,
  toggleModel,
}: ModelPickerProp) => {
  const [open, setOpen] = useState<Boolean>(false);
  const selectedModels = models.filter((m) => selectedIds.includes(m.id));
  return (
    <>
      <div>
        <div className="grid grid-cols-[0.2fr_0.8fr] border border-slate-300 w-full p-5 rounded shadow-lg">
          <div className="flex items-center gap-1 text-xl text-slate-600 hover:text-slate-900">
            <GrAttachment />
            <p className="font-semibold">Attach File</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-5">
            <div className="grid grid-cols-3 gap-3">
              {selectedModels.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 text-xl border border-slate-200 rounded-2xl p-2 justify-center hover:bg-violet-100 hover:text-violet-600"
                >
                  <div className="flex items-center gap-2">
                    <p>{modelIcon[item.provider as keyof typeof modelIcon]}</p>
                    <p className="font-semibold text-sm">
                      {item.provider.toUpperCase()}
                    </p>
                  </div>
                  <button onClick={() => toggleModel(item.id)}>
                    <IoMdCloseCircle />
                  </button>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-1">
              <div className="flex items-center gap-1 text-xl border border-slate-200 rounded-xl p-3 bg-slate-100 hover:bg-violet-100 hover:text-violet-600">
                <GiRegeneration className="text-2xl" />
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="font-semibold"
                >
                  Change models
                </button>
              </div>
              <button
                onClick={isCompare}
                className="flex items-center gap-1 text-xl px-3 py-3 bg-violet-600 text-white rounded-xl hover:bg-violet-700"
              >
                <span>
                  <CiPlay1 />
                </span>
                <p className="text-xl font-semibold">Compare models</p>
              </button>
            </div>
          </div>
        </div>
        <div className="p-5">
          {open && (
            <div className="grid grid-cols-4 gap-3 text-slate-900">
              {models.map((model) => (
                <div
                  key={model.id}
                  className="flex items-center gap-5 ring-1 ring-violet-300 shadow-lg px-5 py-2 rounded-xl"
                >
                  <label key={model.id}>
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(model.id)}
                      onChange={() => toggleModel(model.id)}
                      disabled={!model.enabled}
                    />
                  </label>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">
                      {modelIcon[model.provider as keyof typeof modelIcon]}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">
                        {model.provider.toUpperCase()}
                      </p>
                      <p className="text-sm text-slate-600">
                        {model.name.split(":")[1]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default ModelPicker;
