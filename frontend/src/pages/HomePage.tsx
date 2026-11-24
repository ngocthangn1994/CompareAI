import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import ComparisonPreview from "../components/home/ComparisonPreview";
import SupportedModel from "../components/home/SupportedModels";
import FeaturesSection from "../components/home/FeaturesSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import CallToAction from "../components/home/CallToAction";
const HomePage = () => {
  return (
    <>
      <div className="px-10 space-y-10">
        <Navbar />
        <div className="grid grid-cols-[0.5fr_0.5fr] px-10 py-10">
          <HeroSection />
          <ComparisonPreview />
        </div>
        <SupportedModel />
        <FeaturesSection />
        <HowItWorksSection />
        <CallToAction />
      </div>
    </>
  );
};

export default HomePage;
