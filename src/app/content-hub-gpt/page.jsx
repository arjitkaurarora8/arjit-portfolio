// import React from "react";
// import Navbar from "@/component/layout/Navbar";
// import Link from "next/link";

// function ProjectShowcase() {
//   const processSteps = [
//     {
//       number: "01",
//       title: "PROBLEM",
//       description: [
//         "> Product descriptions took hours per seller per week",
//         "> Low SEO optimization → poor discoverability",
//         "> High friction → slow go-to-market for sellers",
//       ],
//     },
//     {
//       number: "02",
//       title: "JOURNEY",
//       description: [
//         "> Collaborated with Anurag & Sumit to identify seller pain points",
//         "> Conducted seller interviews → mapped workflows",
//         "> Designed wireframes for bulk generation + approval",
//         "> Built a clean, scalable dashboard and GPT-powered content editor",
//       ],
//     },
//     {
//       number: "03",
//       title: "SOLUTION",
//       sectionColor: "sky", // Add this to identify the section
//       description: [
//         ">\\ Dashboard: Role-based content management",
//         ">\\ AI Editor: GPT suggestions + one-click publishing",
//         ">\\ Branding: Clean, enterprise-ready logo + color palette",
//       ],
//     },
//     {
//       number: "04",
//       title: "RESULTS",
//       sectionColor: "green", // Add this to identify the section
//       description: [
//         ">\\ 40% reduction in listing time",
//         ">\\ 100+ sellers onboarded in beta",
//         ">\\ 82% of companies using AI-driven content strategies report improved customer engagement",
//         ">\\ 63%of marketers say breaking down content silos has improved brand consistency",
//         ">\\ Product contributed to Zorang’s acquisition by GSPANN",
//       ],
//     },
//   ];

//   return (
//     <>
//       <Navbar showLinks={false} />

//       <div className="px-4 sm:px-6 pb-20 pt-10 flex flex-col overflow-hidden">
//         <div className="flex flex-col gap-4 overflow-hidden">
//           {/* Header Section */}
//           <div className="inline-flex flex-col gap-5">
//             <Link
//               href="/"
//               className="flex items-center gap-1 group cursor-pointer w-fit"
//             >
//               <span className="text-gray-900 text-sm sm:text-base group-hover:text-gray-600">
//                 Go back
//               </span>
//               <img
//                 src="/linkarrow.png"
//                 alt="External link"
//                 className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-120 transition-transform duration-300"
//               />
//             </Link>
//             <div className="flex flex-col justify-start">
//               <div className="flex justify-between pt-2">
//                 <div className="w-56 h-9 bg-white rounded-lg outline-[2.62px] flex items-center justify-center outline-sky-50">
//                   <div className="justify-center text-sky-500 text-xs font-semibold font-inter leading-tight tracking-wide">
//                     SaaS Dashboard + Branding
//                   </div>
//                 </div>
//                 <div>
//                   <img src="./contentHubGPT.png" alt="tradeprobe" />
//                 </div>
//               </div>

//               <h1 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter mt-4">
//                 GSPANN <span className="text-gray-400">X </span>ContentHubGPT
//               </h1>

//               <p className="text-gray-900 text-sm sm:text-base font-light font-inter leading-snug tracking-tight max-w-xl pt-2 sm:mt-4">
//                 When GPT was just starting to trend,{" "}
//                 <span className="font-bold">Walmart sellers </span> were still
//                 writing product descriptions manually;{" "}
//                 <span className="font-bold">Wasting hours every week.</span>
//               </p>
//             </div>
//           </div>

//           {/* Project Info Header */}
//           <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end overflow-hidden pt-8 sm:pt-16 gap-4 sm:gap-0">
//             <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-38">
//               <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-8 sm:gap-20">
//                 <div className="flex flex-col">
//                   <span className="text-gray-500 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
//                     Timeline
//                   </span>
//                   <span className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
//                     Early GPT era (2023) & Acquired
//                   </span>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-3 sm:flex-row sm:gap-16">
//                 <div className="flex flex-col">
//                   <span className="text-gray-500 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
//                     Tools
//                   </span>
//                   <span className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
//                     Figma, Miro,OpenAI API
//                   </span>
//                 </div>

//                 <div className="flex flex-col">
//                   <span className="text-gray-500 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
//                     Role
//                   </span>
//                   <span className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
//                     UX Researcher & Product Designer
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <a
//                 href="#"
//                 className="flex items-center gap-1 group cursor-pointer"
//               >
//                 <span className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight group-hover:text-gray-600">
//                   Live website
//                 </span>
//                 <img
//                   src="/linkarrow.png"
//                   alt="External link"
//                   className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-120 transition-transform duration-300"
//                 />
//               </a>
//             </div>
//           </div>

//           {/* Main Hero Image */}
//           <div className="w-full relative pt-2.5 rounded-xl sm:rounded-2xl overflow-hidden">
//             <img
//               className="w-full h-auto rounded-xl sm:rounded-2xl"
//               src="/work_2-md.png"
//               alt="TradeProbe main application interface"
//             />
//           </div>

//           {/* Process Section */}
//           <div className="py-6 sm:py-22 flex flex-col justify-start items-start gap-4 sm:gap-6 overflow-hidden w-full">
//             {/* Process Title */}
//             <div className="flex justify-start items-end">
//               <h2 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter leading-8 sm:leading-10">
//                 Process
//               </h2>
//             </div>

//             {/* Process Steps */}
//             <div className="self-stretch flex flex-col justify-center items-center gap-4 sm:gap-6 overflow-hidden">
//               {processSteps.map((step, index) => (
//                 <div
//                   key={index}
//                   className="w-full pl-2 sm:pl-4 pb-4 sm:pb-6 relative flex flex-col justify-start items-start gap-2 overflow-hidden"
//                 >
//                   <div className="max-w-full sm:max-w-[777px] flex flex-col justify-start items-start">
//                     <h3 className="text-gray-500 text-lg sm:text-xl lg:text-2xl font-semibold font-inter leading-6 sm:leading-9 uppercase">
//                       <span className="text-gray-400">{step.number} </span>
//                       <span className="text-gray-400">{step.title}</span>
//                     </h3>
//                   </div>
//                   <div className="max-w-full sm:max-w-[530px] flex flex-col justify-start items-start gap-0.5">
//                     {step.description.map((line, lineIndex) => {
//                       const match = line.match(/^(>)(\\?)(\s*)([^:]+:)?(.*)$/);

//                       return (
//                         <p
//                           key={lineIndex}
//                           className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight"
//                         >
//                           {match ? (
//                             <>
//                               <span>{match[1]}</span>
//                               {match[2] && (
//                                 <span
//                                   className={
//                                     step.sectionColor === "sky"
//                                       ? "text-sky-500"
//                                       : step.sectionColor === "green"
//                                       ? "text-green-500"
//                                       : ""
//                                   }
//                                 >
//                                   {match[2]}
//                                 </span>
//                               )}
//                               {/* <span>{match[3]}</span>
//                               {match[4] && <strong>{match[4]}</strong>} */}
//                               {/* {match[3] && <span>{match[3]}</span>}
//                               {match[4] && (
//                                 <strong className="ml-0.5 inline-block">
//                                   {match[4]}
//                                 </strong>
//                               )}

//                               <span>{match[5]}</span> */}
//                               {match[3] && (
//                                 <span className="mr-0.5">{match[3]}</span>
//                               )}

//                               {match[4] && (
//                                 <strong className="mr-0.5">{match[4]}</strong>
//                               )}

//                               {match[5] && <span>{match[5]}</span>}
//                             </>
//                           ) : (
//                             line
//                           )}
//                         </p>
//                       );
//                     })}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Project Images Gallery */}
//           {[1, 2, 3, 4, 5, 6, 7].map((imageNum) => (
//             <div
//               key={imageNum}
//               className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden"
//             >
//               <img
//                 className="w-full h-auto rounded-xl sm:rounded-2xl"
//                 src={`/tradeprobe-${imageNum}.png`}
//                 alt={`TradeProbe project showcase ${imageNum}`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProjectShowcase;

import React from "react";
import Navbar from "@/component/layout/Navbar";
import Link from "next/link";

function ProjectShowcase() {
  const processSteps = [
    {
      number: "01",
      title: "PROBLEM",
      description: [
        "> Product descriptions took hours per seller per week",
        "> Low SEO optimization → poor discoverability",
        "> High friction → slow go-to-market for sellers",
      ],
      image: "/content-hub-gpt-1.png",
    },
    {
      number: "02",
      title: "JOURNEY",
      description: [
        "> Collaborated with Anurag & Sumit to identify seller pain points",
        "> Conducted seller interviews → mapped workflows",
        "> Designed wireframes for bulk generation + approval",
        "> Built a clean, scalable dashboard and GPT-powered content editor",
      ],
      image: "/content-hub-gpt-2.png",
    },
    {
      number: "03",
      title: "SOLUTION",
      sectionColor: "sky",
      description: [
        ">\\ Dashboard: Role-based content management",
        ">\\ AI Editor: GPT suggestions + one-click publishing",
        ">\\ Branding: Clean, enterprise-ready logo + color palette",
      ],
      image: "/content-hub-gpt-3.png",
    },
    {
      number: "04",
      title: "RESULTS",
      sectionColor: "green",
      description: [
        ">\\ **40% reduction** in listing time",
        ">\\ **100+ sellers** onboarded in beta",
        ">\\ **82%** of companies using AI-driven content strategies report improved customer engagement",
        ">\\ **63%** of marketers say breaking down content silos has improved brand consistency",
        ">\\ **Product contributed to Zorang's acquisition by GSPANN**",
      ],
      image: "/content-hub-gpt-4.png",
    },
  ];

  return (
    <>
      <Navbar showLinks={false} />

      <div className="px-4 sm:px-6 pb-20 pt-10 flex flex-col overflow-hidden">
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
              <div className="flex gap-3 sm:gap-0 justify-between pt-2">
                <div className="w-56 h-9 bg-white rounded-lg outline-[2.62px] flex items-center justify-center outline-sky-50">
                  <div className="justify-center text-sky-500 text-xs font-semibold font-inter leading-tight tracking-wide">
                    SaaS Dashboard + Branding
                  </div>
                </div>
                <div>
                  <img
                    src="./contentHubGPT.png"
                    alt="content-hub-gpt image"
                    // className="w-[210] h-[40]"
                  />
                </div>
              </div>

              <h1 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter mt-4">
                GSPANN <span className="text-gray-400">X </span>ContentHubGPT
              </h1>

              <p className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight max-w-xl pt-2 sm:mt-4">
                When GPT was just starting to trend,{" "}
                <span className="font-bold">Walmart sellers </span> were still
                writing product descriptions manually;{" "}
                <span className="font-bold">Wasting hours every week.</span>
              </p>
            </div>
          </div>

          {/* Project Info Header */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end overflow-hidden pt-8 sm:pt-16 gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-9 md:gap-10 lg:gap-20 xl:gap-38">
              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-8 sm:gap-20">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Timeline
                  </span>
                  <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Early GPT era (2023) & Acquired
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:gap-8 xl:gap-14">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Tools
                  </span>
                  <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Figma, Miro, OpenAI API
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Role
                  </span>
                  <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    UX Researcher & Product Designer
                  </span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#"
                className="flex items-center md:gap-1 group cursor-pointer"
              >
                <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight group-hover:text-gray-600">
                  Live website
                </span>
                <img
                  src="/linkarrow.png"
                  alt="External link"
                  className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-120 transition-transform duration-300"
                />
              </a>
            </div>
          </div>

          {/* Main Hero Image */}
          <div className="w-full relative pt-2.5 rounded-xl sm:rounded-2xl overflow-hidden">
            <img
              className="w-full h-auto rounded-xl sm:rounded-2xl"
              src="/work_2-md.png"
              alt="TradeProbe main application interface"
            />
          </div>

          {/* Process Section */}
          <div className="py-3 sm:py-12 flex flex-col justify-start items-start gap-4 sm:gap-6 overflow-hidden w-full">
            {/* Process Title */}
            <div className="flex justify-start items-end">
              <h2 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter leading-8 sm:leading-10">
                Process
              </h2>
            </div>

            {/* Process Steps */}
            <div className="self-stretch flex flex-col justify-center items-center gap-4 sm:gap-5 overflow-hidden">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="w-full pl-2 sm:pl-4 relative flex flex-col justify-start items-start gap-2 overflow-hidden"
                >
                  <div className="max-w-full sm:max-w-[777px] flex flex-col justify-start items-start pl-2 sm:pl-4">
                    <h3 className="text-gray-500 text-lg sm:text-xl lg:text-2xl font-semibold font-inter leading-6 sm:leading-9 uppercase">
                      <span className="text-gray-400">{step.number} </span>
                      <span className="text-gray-400">{step.title}</span>
                    </h3>
                  </div>
                  <div className="max-w-full sm:max-w-[530px] flex flex-col justify-start items-start gap-0.5 pl-2 sm:pl-4">
                    {step.description.map((line, lineIndex) => {
                      // First check if line has bold markers **text**
                      if (line.includes("**")) {
                        // Split by ** to find bold parts
                        const parts = line.split("**");

                        return (
                          <p
                            key={lineIndex}
                            className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight"
                          >
                            {parts.map((part, i) => {
                              // Odd indices are the text inside ** **
                              if (i % 2 === 1) {
                                return (
                                  <strong key={i} className="font-semibold">
                                    {part}
                                  </strong>
                                );
                              }

                              // Even indices - check for special characters
                              if (part.startsWith(">\\")) {
                                return (
                                  <span key={i}>
                                    <span>&gt;</span>
                                    <span
                                      className={
                                        step.sectionColor === "sky"
                                          ? "text-sky-500"
                                          : step.sectionColor === "green"
                                          ? "text-green-500"
                                          : ""
                                      }
                                    >
                                      \
                                    </span>
                                    <span>{part.slice(2)}</span>
                                  </span>
                                );
                              }

                              return <span key={i}>{part}</span>;
                            })}
                          </p>
                        );
                      }

                      // Handle lines without bold
                      const match = line.match(/^(>)(\\?)(\s*)(.*)$/);

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
                              {match[3] && (
                                <span className="mr-0.5">{match[3]}</span>
                              )}
                              {match[4] && <span>{match[4]}</span>}
                            </>
                          ) : (
                            line
                          )}
                        </p>
                      );
                    })}
                  </div>

                  {/* Image for this step */}
                  {/* {step.image && (
                    <div className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden mt-6 sm:mt-12">
                      <img
                        className="w-full h-auto rounded-xl sm:rounded-2xl"
                        src={step.image}
                        alt={`${step.title} step visualization`}
                      />
                    </div>
                  )} */}
                  {/* Image for this step */}
                  {step.image && (
                    <div
                      className={`w-full relative rounded-xl sm:rounded-2xl overflow-hidden mt-7.5 sm:mt-9.5 lg:mt-11.5 ${
                        step.number === "03" ? "bg-black p-4 sm:p-8" : ""
                      }`}
                    >
                      <img
                        className="w-full h-auto rounded-xl sm:rounded-2xl"
                        src={step.image}
                        alt={`${step.title} step visualization`}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Project Images Gallery - Remaining images after process steps */}
          {[5].map((imageNum) => (
            <div
              key={imageNum}
              className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden -mt-9 sm:-mt-13"
            >
              <img
                className="w-full h-auto rounded-xl sm:rounded-2xl"
                src={`/content-hub-gpt-${imageNum}.png`}
                alt={`project showcase ${imageNum}`}
              />
              {/* {imageNum && (
                <img
                  src={`/content-hub-gpt-${imageNum}.png`}
                  alt={`Project ${imageNum}`}
                  className="w-full h-auto rounded-xl sm:rounded-2xl object-cover"
                />
              )} */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectShowcase;
