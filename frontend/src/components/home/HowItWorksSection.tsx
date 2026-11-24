const HowItWorksSection = () => {
  const steps = [
    {
      id: "1",
      title: "Write your prompt",
      description: "Ask a question or describe what you need.",
    },
    {
      id: "2",
      title: "Pick your models",
      description: "Choose up to 3 AI models to compare",
    },
    {
      id: "3",
      title: "Compare the answer",
      description: "Read, compare, and pick the best response.",
    },
  ];
  return (
    <>
      <div className="grid md:grid-cols-3 gap-3 text-center">
        {steps.map((step) => (
          <div className="flex items-center gap-3 justify-center space-y-3">
            <p className="px-5 py-2 bg-violet-100 rounded-xl text-2xl md:text-6xl font-bold text-violet-700">
              {step.id}
            </p>
            <div>
              <p className="font-bold text-xl md:text-2xl">{step.title}</p>
              <p className="text-slate-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default HowItWorksSection;
