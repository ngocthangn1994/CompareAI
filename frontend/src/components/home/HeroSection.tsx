import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { Link } from "react-router";
const HeroSection = () => {
  return (
    <>
      <div className="space-y-5">
        <Badge>One prompt. Multiple perspectives.</Badge>
        <p className="text-5xl md:text-7xl font-bold">
          Better answers <br></br>
          start with <br></br>
          <p className="text-violet-600">comparison.</p>
        </p>
        <p className="text-sm text-slate-500 mt-3">
          Ask once. Compare AI responses side by side.
          <br></br>
          Choose what works best for you.
        </p>
        <div className="flex gap-3 mb-3">
          <Link to="/compare">
            <Button>Start comparing</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
