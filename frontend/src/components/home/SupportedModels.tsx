import { RiDeepseekFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { BsClaude } from "react-icons/bs";
import { AiFillOpenAI } from "react-icons/ai";

const SupportedModel = () => {
  const supporedModels = [
    {
      icon: <AiFillOpenAI />,
      name: "OpenAI",
    },
    {
      icon: <RiDeepseekFill className="text-blue-600" />,
      name: "DeepSeek",
    },
    {
      icon: <BsClaude className="text-orange-600" />,
      name: "Anthropic",
    },
    {
      icon: <FaGoogle className="text-red-600" />,
      name: "Google",
    },
  ];
  return (
    <>
      <div className="grid md:grid-cols-[0.4fr_0.6fr] md:text-2xl bg-violet-50 px-10 py-5 shadow-sm">
        <p className="font-semibold mb-3">
          Your favorite models. One workspace.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {supporedModels.map((item) => (
            <div className="flex gap-2 items-center text-xl md:text-2xl">
              <p className="md:text-4xl"> {item.icon}</p>
              <p className="font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SupportedModel;
