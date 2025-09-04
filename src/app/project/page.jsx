import React from "react";
import Navbar from "@/component/layout/Navbar";
import Link from "next/link";

function ProjectShowcase() {
  const processSteps = [
    {
      number: "01",
      title: "Problem",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim exhausting, and not having a clear overview of all my assets made me quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo eee",
    },
    {
      number: "02",
      title: "Mood board",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim exhausting, and not having a clear overview of all my assets made me quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo eee",
    },
    {
      number: "03",
      title: "Design Iterations",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim exhausting, and not having a clear overview of all my assets made me quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo eee",
    },
    {
      number: "04",
      title: "Website/Webapp/MobileApp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim exhausting, and not having a clear overview of all my assets made me quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo eee",
    },
  ];

  return (
    <>
      <Navbar showLinks={false} />

      <div className="px-4 sm:px-6 pb-20 pt-10 flex flex-col overflow-hidden">
        <div className="flex flex-col gap-6 overflow-hidden">
          {/* Header Section */}
          <div className="inline-flex flex-col gap-5">
            <Link
              href="/"
              className="flex items-center gap-1 group cursor-pointer w-fit"
            >
              <span className="text-gray-900 text-sm sm:text-base group-hover:text-gray-600">
                Go back
              </span>
              <img
                src="/linkarrow.png"
                alt="External link"
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-120 transition-transform duration-300"
              />
            </Link>
            <div className="flex flex-col justify-start">
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-start sm:items-center justify-start">
                <h1 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-normal">
                  TradeProbe
                </h1>
                <h3 className="text-gray-400 text-lg sm:text-2xl lg:text-3xl font-normal">
                  (Product Design & Strategy)
                </h3>
              </div>
              <p className="text-gray-400 text-sm sm:text-base font-normal leading-snug tracking-tight max-w-xl mt-2">
                TradeProbe Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          {/* Project Info Header */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end overflow-hidden mb-6 gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-8 sm:gap-20">
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
                  Timeline
                </span>
                <span className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
                  Ongoing
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-gray-500 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
                  Tools
                </span>
                <span className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
                  Figma, Miro
                </span>
              </div>
            </div>

            <div>
              <a
                href="#"
                className="flex items-center gap-1 group cursor-pointer"
              >
                <span className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight group-hover:text-gray-600">
                  Live website
                </span>
                <img
                  src="/linkarrow.png"
                  alt="External link"
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-120 transition-transform duration-300"
                />
              </a>
            </div>
          </div>

          {/* Main Hero Image */}
          <div className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden">
            <img
              className="w-full h-auto rounded-xl sm:rounded-2xl"
              src="/tradeprobe-hero.png"
              alt="TradeProbe main application interface"
            />
          </div>

          {/* Process Section */}
          <div className="py-6 sm:py-10 flex flex-col justify-start items-start gap-4 sm:gap-6 overflow-hidden w-full">
            {/* Process Title */}
            <div className="flex justify-start items-end">
              <h2 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-normal font-inter leading-8 sm:leading-10">
                Process
              </h2>
            </div>

            {/* Process Steps */}
            <div className="self-stretch flex flex-col justify-center items-center gap-4 sm:gap-6 overflow-hidden">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="w-full pl-2 sm:pl-4 pb-4 sm:pb-6 relative flex flex-col justify-start items-start gap-2 overflow-hidden border-b-2 border-gray-100 last:border-b-0"
                >
                  <div className="max-w-full sm:max-w-[777px] flex flex-col justify-start items-start">
                    <h3 className="text-gray-500 text-xl sm:text-2xl lg:text-3xl font-normal font-inter leading-6 sm:leading-9">
                      <span className="text-gray-500">{step.number} </span>
                      <span className="text-gray-500">{step.title}</span>
                    </h3>
                  </div>
                  <div className="max-w-full sm:max-w-[539px] flex flex-col justify-start items-start">
                    <p className="text-gray-500 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Images Gallery */}
          {[1, 2, 3, 4, 5, 6, 7].map((imageNum) => (
            <div
              key={imageNum}
              className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <img
                className="w-full h-auto rounded-xl sm:rounded-2xl"
                src={`/tradeprobe-${imageNum}.png`}
                alt={`TradeProbe project showcase ${imageNum}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectShowcase;
