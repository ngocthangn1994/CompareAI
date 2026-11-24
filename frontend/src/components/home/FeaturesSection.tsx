import FeatureCard from "./FeatureCard";
import features from "../../data/featuresData";

const FeaturesSection = () => {
  return (
    <>
      <div className="py-10">
        <p className="text-center text-2xl font-bold">
          Less tab switching. More clarity.
        </p>
        <div className="grid md:grid-cols-3 gap-5 md:gap-20 items-center mt-5">
          {features.map((feature) => (
            <div>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
