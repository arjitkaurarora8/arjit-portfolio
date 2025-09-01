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
    <div className="w-full mx-auto pt-20 px-4 sm:px-6 relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 border-t border-black/10"></div>

      <div className="flex flex-col gap-16">
        {/* Header Section */}
        <div className="flex flex-col">
          <div className="text-neutral-500 text-xs font-normal mb-4">
            Your plan
          </div>
          <h2 className="text-black text-4xl font-medium leading-13">
            Getting started is easy
          </h2>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              {/* Numbered Circle */}
              <div className="w-16 h-16 relative bg-gradient-to-b from-black/20 to-black/80 rounded-full mb-6 flex items-center justify-center">
                <div className="w-16 h-16 absolute opacity-60 rounded-full bg-gray-400"></div>
                <span className="text-white text-5xl font-normal leading-none relative z-10 [text-shadow:_2px_2px_0px_rgba(255,255,255,0.3)]">
                  {step.number}
                </span>
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
  );
}

export default GettingStarted;
