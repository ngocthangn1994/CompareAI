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
      <div className="px-2 space-y-2 md:px-10 md:space-y-10">
        <Navbar />
        <div className="md:grid grid-cols-[0.5fr_0.5fr] p-2 md:px-10 md:py-10">
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
