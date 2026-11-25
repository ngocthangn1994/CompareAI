type ScoreCardProp = {
  model: string;
  accuracy: number;
  completeness: number;
  clarity: number;
  conciseness: number;
  reason: string;
};

const ScoreCard = ({
  model,
  accuracy,
  completeness,
  clarity,
  conciseness,
  reason,
}: ScoreCardProp) => {
  const qualityScore =
    Math.ceil(Number(accuracy + completeness + clarity + conciseness)) / 4;
  return (
    <>
      <div className="ring-1 ring-violet-300 rounded-xl p-2 bg-sky-50">
        <div className="flex justify-between items-center font-bold text-xl">
          <p className="text-xl font-bold">Quality score</p>
          <p>{qualityScore * 10}/100</p>
        </div>
        <div className="mt-3 space-y-2">
          <div className="flex justify-between items-center">
            <p>Accuracy: </p>
            <p className="text-sm">{accuracy * 10}/100</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Clarity: </p>
            <p className="text-sm">{clarity * 10}/100</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Completeness: </p>
            <p className="text-sm">{completeness * 10}/100 </p>
          </div>
          <div className="">
            <p className="font-bold">Reason: </p>
            <p className="text-sm text-slate-600">{reason}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreCard;
