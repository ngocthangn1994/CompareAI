import Button from "../ui/Button";
import logo from "../../assets/logo_brainbattleai.png";
import dataComparison from "../../data/demoComparison";
import { FaBalanceScale } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";

const ComparisonPreview = () => {
  return (
    <>
      <div className="border border-violet-200 rounded-xl px-3 py-3 bg-violet-100 shadow-sm space-y-3">
        <div className="flex justify-between items-center">
          <img className="w-35 h-auto object-contain" src={logo} />
          <div className="grid grid-cols-2 gap-2">
            <p className="flex items-center gap-1 text-violet-600 bg-violet-100 px-2 py-1 rounded-xl">
              <FaBalanceScale /> Compare
            </p>
            <p className="flex items-center gap-1">
              <CiSaveDown2 /> Saved
            </p>
          </div>
          <CiSettings />
        </div>
        <div className="flex items-center gap-3">
          <input
            placeholder="Explain recursion with a simple example"
            className="w-full bg-white border border-slate-300 rounded-xl p-2"
          />
          <Button>Compare</Button>
        </div>
        <div className="grid md:grid-cols-3 gap-5 p-2">
          {dataComparison.map((item) => (
            <div className="p-2 rounded-xl bg-white shadow-sm p-2">
              <div className="flex justify-between items-center gap-3 p-1">
                <div className="flex items-center gap-3">
                  <p>{item.icon}</p>
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.provider}</p>
                  </div>
                </div>
                <p className="text-sm text-green-600 bg-green-100 p-1 rounded-xl font-medium">
                  {item.grade}
                </p>
              </div>
              <p className="text-sm mt-3 p-2">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ComparisonPreview;
