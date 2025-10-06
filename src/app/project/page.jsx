import React from "react";
import Navbar from "@/component/layout/Navbar";
import Link from "next/link";

function ProjectShowcase() {
  const processSteps = [
    {
      number: "01",
      title: "PROBLEM",
      description: [
        "> High cost of tools like TradingView/MarketSmith/TradeZella",
        "> Waiting time is excessive on a strategy",
        "> Lack of structured trader education",
        "> Poor UX for beginner traders",
      ],
    },
    {
      number: "02",
      title: "JOURNEY",
      description: [
        "> Research: Interviews with 30+ traders, competitor analysis",
        "> Branding: Logo, color palette, type system → trader-first identity",
        "> Wireframes: Flows for scanners, watchlists, alerts, and learning modules",
        "> Design System: Reusable components for scalable development",
        "> UI Design: Light & dark dashboards, academy section, mobile optimization",
        "> Marketing Collab: Landing pages, ads, creatives",
      ],
    },
    {
      number: "03",
      title: "SOLUTION",
      sectionColor: "sky", // Add this to identify the section
      description: [
        ">\\ Dashboard: Real-time scanners, insights, watchlists",
        ">\\ Academy: Structured trader learning flow",
        ">\\ Design System: 50+ reusable components for dev speed with own design system and language with the support of SHADCN UI library",
        ">\\ Branding: Logo(with iterations) + design guidelines + iconography",
      ],
    },
    {
      number: "04",
      title: "RESULTS",
      sectionColor: "green", // Add this to identify the section
      description: [
        ">\\ 200+ paying users within 3 months of beta",
        ">\\ Raised ₹18L funding for 4.5% equity",
        ">\\ 30% retention lift after academy module release",
        ">\\ 25% reduction in onboarding drop-offs",
        ">\\ Saved 40% design/dev time per sprint",
      ],
    },
  ];

  return (
    <>
      <Navbar showLinks={false} />

      <div className="px-4 sm:px-6 pb-20 pt-8.5 md:pt-16.5 flex flex-col overflow-hidden">
        <div className="flex flex-col gap-4 overflow-hidden">
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
              <div className="flex justify-between pt-2">
                <div className="w-full">
                  <div className="rounded-lg outline-[2.62px] outline-sky-50 px-3.5 py-2.5 inline-flex items-center justify-center">
                    <div className="text-sky-500 text-xs font-semibold font-inter leading-tight tracking-wide whitespace-nowrap">
                      SaaS Dashboard, Design System, Branding and Academy
                    </div>
                  </div>
                </div>
                <div>
                  <img src="./tradeprobe-project.png" alt="tradeprobe" />
                </div>
              </div>

              <h1 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter mt-4">
                TradeProbe
              </h1>

              <p className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight max-w-xl pt-2 sm:mt-4">
                <span className="font-bold">Retail traders </span>
                were lost between expensive scanners/platforms with Bad UX and
                scattered YouTube knowledge. TradeProbe is built to change that.
                When traders told me they were paying thousands for scanners
                they barely understood, I knew there was a gap to fill. Traders
                were overwhelmed by data but lacked affordable tools to act
                fast.
              </p>
            </div>
          </div>

          {/* Project Info Header */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end overflow-hidden pt-8 sm:pt-16 gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-38">
              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-8 sm:gap-20">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
                    Timeline
                  </span>
                  <span className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
                    Ongoing(BETA live)
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-16">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
                    Tools
                  </span>
                  <span className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
                    Figma, FigJam, Notion, Framer
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
                    Role
                  </span>
                  <span className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
                    Product & Design Lead
                  </span>
                </div>
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
          <div className="w-full relative pt-2.5 rounded-xl sm:rounded-2xl overflow-hidden">
            <img
              className="w-full h-auto rounded-xl sm:rounded-2xl"
              src="/sniperscan-dashboard.png"
              alt="TradeProbe main application interface"
            />
          </div>

          {/* Process Section */}
          <div className="py-6 sm:py-22 flex flex-col justify-start items-start gap-4 sm:gap-6 overflow-hidden w-full">
            {/* Process Title */}
            <div className="flex justify-start items-end">
              <h2 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter leading-8 sm:leading-10">
                Process
              </h2>
            </div>

            {/* Process Steps */}
            <div className="self-stretch flex flex-col justify-center items-center gap-4 sm:gap-6 overflow-hidden">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="w-full pl-2 sm:pl-4 pb-4 sm:pb-6 relative flex flex-col justify-start items-start gap-2 overflow-hidden"
                >
                  <div className="max-w-full sm:max-w-[777px] flex flex-col justify-start items-start">
                    <h3 className="text-gray-500 text-lg sm:text-xl lg:text-2xl font-semibold font-inter leading-6 sm:leading-9 uppercase">
                      <span className="text-gray-400">{step.number} </span>
                      <span className="text-gray-400">{step.title}</span>
                    </h3>
                  </div>
                  <div className="max-w-full sm:max-w-[530px] flex flex-col justify-start items-start gap-0.5">
                    {step.description.map((line, lineIndex) => {
                      const match = line.match(/^(>)(\\?)(\s*)([^:]+:)?(.*)$/);

                      return (
                        <p
                          key={lineIndex}
                          className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight"
                        >
                          {match ? (
                            <>
                              <span>{match[1]}</span>
                              {match[2] && (
                                <span
                                  className={
                                    step.sectionColor === "sky"
                                      ? "text-sky-500"
                                      : step.sectionColor === "green"
                                      ? "text-green-500"
                                      : ""
                                  }
                                >
                                  {match[2]}
                                </span>
                              )}
                              {/* <span>{match[3]}</span>
                              {match[4] && <strong>{match[4]}</strong>} */}
                              {/* {match[3] && <span>{match[3]}</span>}
                              {match[4] && (
                                <strong className="ml-0.5 inline-block">
                                  {match[4]}
                                </strong>
                              )}

                              <span>{match[5]}</span> */}
                              {match[3] && (
                                <span className="mr-0.5">{match[3]}</span>
                              )}

                              {match[4] && (
                                <strong className="mr-0.5">{match[4]}</strong>
                              )}

                              {match[5] && <span>{match[5]}</span>}
                            </>
                          ) : (
                            line
                          )}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Images Gallery */}
          <div className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden">
            <img
              className="w-full h-auto rounded-xl sm:rounded-2xl"
              src="./content-hub-gpt-4.png"
              alt="gspann X content-hub-gpt"
            />
          </div>
          {[2, 3, 4, 5, 6, 7].map((imageNum) => (
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
