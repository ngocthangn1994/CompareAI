type AnswerCardProp = {
  provider: string;
  model: string;
  answer: string;
};
import modelIcon from "../../data/modelIcon";
const AnswerCard = ({ provider, model, answer }: AnswerCardProp) => {
  const icon = model.split("/")[0] as keyof typeof modelIcon;
  return (
    <>
      <div className="border border-slate-200 rounded p-5 rounded-2xl shadow-sm">
        <div className="space-y-5">
          <div className="flex items-center gap-3 bg-slate-100 p-2 rounded-xl shadow-sm">
            <span className="text-4xl">{modelIcon[icon]}</span>
            <div>
              <p className="text-xl font-bold">{provider}</p>
              <p className="text-sm text-slate-600">{model}</p>
            </div>
          </div>
          <div className="text-slate-600">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnswerCard;
