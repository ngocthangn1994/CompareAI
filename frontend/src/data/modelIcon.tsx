import { BsClaude } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { RiDeepseekFill } from "react-icons/ri";
import { AiFillOpenAI } from "react-icons/ai";

const modelIcon = {
  anthropic: <BsClaude className="text-orange-600" />,
  google: <FaGoogle className="text-red-600" />,
  deepseek: <RiDeepseekFill className="text-blue-600" />,
  openai: <AiFillOpenAI className="text-black" />,
};

export default modelIcon;
