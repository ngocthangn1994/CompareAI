import { FaArrowCircleRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <>
      <div className="bg-violet-900 px-10 py-5 rounded-2xl md:flex justify-between items-center">
        <p className="text-2xl md:text-4xl text-white font-bold">
          Find the answer that fits.
        </p>
        <span className="text-xl md:text-3xl font-semibold px-5 py-3 bg-violet-200 rounded-xl text-violet-700 flex items-center gap-3">
          Start your first comparison <FaArrowCircleRight />
        </span>
      </div>
    </>
  );
};
export default CallToAction;
