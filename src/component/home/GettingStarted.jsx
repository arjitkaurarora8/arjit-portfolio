import React from "react";

const steps = [
  {
    number: 1,
    title: "Book a free strategy call",
    description: `During this 30-minute meeting we'll talk
                  about your idea, goals, and identify where
                  you need help.`,
  },
  {
    number: 2,
    title: "Get a clear action plan",
    description: `You'll get a clear proposal and price
                  breakdown that will help you launch your
                  project.`,
  },
  {
    number: 3,
    title: "I'll start designing right away",
    description: `This is where the magic happens. After
                  we're aligned on the proposal, I'll start
                  bringing your vision to life.`,
  },
];

function GettingStarted() {
  return (
    <div className="px-4 sm:px-6 ">
      <div className="w-full mx-auto pt-14 md:pt-30 relative">
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 border-t border-black/10"></div>

        <div className="flex flex-col gap-8 md:gap-16">
          {/* Header Section */}
          <h2 className="text-stone-900 text-xl sm:text-3xl font-semibold leading-9">
            Getting started is easy
          </h2>

          {/* Steps Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col">
                {/* Step Circle with Image */}
                <div
                  className="w-16 h-16 relative rounded-full mb-6 flex items-center justify-end pr-2 bg-cover bg-center bg-no-repeat overflow-hidden"
                  style={{
                    backgroundImage: 'url("/numbersbg.png")',
                    filter: "blur(0.1px)",
                  }}
                >
                  {/* Gradient blur overlay - more blur on top */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent backdrop-blur-[0.5px] rounded-full"></div>

                  {/* Step Image instead of number */}
                  <img
                    src={`/step${step.number}.svg`}
                    alt={`Step ${step.number}`}
                    className="w-16 h-16 relative top-0.5 -right-3.5 z-10"
                  />
                </div>

                {/* Title */}
                <h3 className="text-black text-2xl font-normal leading-loose mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <div className="opacity-80">
                  <p className="text-zinc-800 text-base font-normal leading-7 whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;
