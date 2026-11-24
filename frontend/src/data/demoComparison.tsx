import { BsOpenai } from "react-icons/bs";
import { BsClaude } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";

const dataComparison = [
  {
    icon: <BsOpenai />,
    content:
      "Recursive is way for a function to call itself to solve a smaller version of the same problem. Example, calculating a factorial: factorial(n) = x * factorial(n-1),, with factorial(1) = 1.",
    name: "GPT",
    provider: "OpenAI",
    grade: "Quality 8.7",
    color: "green",
  },
  {
    icon: <BsClaude />,
    content:
      "Recursion is problem-solving technique where a function calls itself to break a problem into smaller, similar problems.A simple example is a factorial: if n == 1=, return 1; otherwide, return n * factorial (n-1)",
    name: "Claude",
    provider: "Anthropic",
    grade: "Quality 8.7",
    color: "violet",
  },
  {
    icon: <FaGoogle />,
    content:
      "Recursive means function solves a problem by calling itself with a simpler input, until it reaches a base case. For example, a factorial canbe defined as: factorial(n) = n * factorial (n-1), with facotrial(1)=1",
    name: "Gemini",
    provider: "Google",
    grade: "Quality 8.9",
    color: "orange",
  },
];
export default dataComparison;
