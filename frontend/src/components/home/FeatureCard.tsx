import type { ReactNode } from "react";

type FeatureCardProp = {
  icon: ReactNode;
  title: String;
  description: String;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProp) => {
  return (
    <>
      <div className="border border-slate-200 shadow-sm rounded-xl p-5 shadow-sm flex gap-5 items-center text-center  justify-center">
        <span className="text-6xl text-violet-600">{icon}</span>
        <div>
          <p className="font-semibold text-3xl">{title}</p>
          <p className="text-slate-500">{description}</p>
        </div>
      </div>
    </>
  );
};
export default FeatureCard;
