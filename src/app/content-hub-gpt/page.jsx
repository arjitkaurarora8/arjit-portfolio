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
//                 src="/linkarrow.svg"
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
//                   src="/linkarrow.svg"
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
//       image: "/content-hub-gpt-1.png",
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
//       image: "/content-hub-gpt-2.png",
//     },
//     {
//       number: "03",
//       title: "SOLUTION",
//       sectionColor: "sky",
//       description: [
//         ">\\ Dashboard: Role-based content management",
//         ">\\ AI Editor: GPT suggestions + one-click publishing",
//         ">\\ Branding: Clean, enterprise-ready logo + color palette",
//       ],
//       image: "/content-hub-gpt-3.png",
//     },
//     {
//       number: "04",
//       title: "RESULTS",
//       sectionColor: "green",
//       description: [
//         ">\\ **40% reduction** in listing time",
//         ">\\ **100+ sellers** onboarded in beta",
//         ">\\ **82%** of companies using AI-driven content strategies report improved customer engagement",
//         ">\\ **63%** of marketers say breaking down content silos has improved brand consistency",
//         ">\\ **Product contributed to Zorang's acquisition by GSPANN**",
//       ],
//       image: "/content-hub-gpt-4.png",
//     },
//   ];

//   return (
//     <>
//       <Navbar showLinks={false} />

//       <div className="px-4 sm:px-6 pb-20 pt-8.5 md:pt-16.5 flex flex-col overflow-hidden">
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
//                 src="/linkarrow.svg"
//                 alt="External link"
//                 className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-120 transition-transform duration-300"
//               />
//             </Link>
//             <div className="flex flex-col justify-start">
//               <div className="flex gap-3 sm:gap-0 justify-between pt-2">
//                 <div className="w-full mb-2.5">
//                   <div className="rounded-lg outline-[2.62px] outline-sky-50 px-3.5 py-2.5 inline-flex items-center justify-center">
//                     <div className="text-sky-500 text-xs font-semibold font-inter leading-tight tracking-wide whitespace-nowrap">
//                       SaaS Dashboard + Branding
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <img
//                     src="./contentHubGPT.png"
//                     alt="content-hub-gpt image"
//                     // className="w-[210] h-[40]"
//                   />
//                 </div>
//               </div>

//               <h1 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter mt-1">
//                 GSPANN <span className="text-gray-400">X </span>ContentHubGPT
//               </h1>

//               <p className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight max-w-xl pt-2 sm:mt-4">
//                 When GPT was just starting to trend,{" "}
//                 <span className="font-bold">Walmart sellers </span> were still
//                 writing product descriptions manually;{" "}
//                 <span className="font-bold">Wasting hours every week.</span>
//               </p>
//             </div>
//           </div>

//           {/* Project Info Header */}
//           <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end overflow-hidden pt-8 sm:pt-16 gap-4 sm:gap-0">
//             <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-9 md:gap-10 lg:gap-20 xl:gap-38">
//               <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-8 sm:gap-20">
//                 <div className="flex flex-col">
//                   <span className="text-gray-500 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
//                     Timeline
//                   </span>
//                   <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
//                     Early GPT era (2023) & Acquired
//                   </span>
//                 </div>
//               </div>

//               <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:gap-8 xl:gap-14">
//                 <div className="flex flex-col">
//                   <span className="text-gray-500 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
//                     Tools
//                   </span>
//                   <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
//                     Figma, Miro, OpenAI API
//                   </span>
//                 </div>

//                 <div className="flex flex-col">
//                   <span className="text-gray-500 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
//                     Role
//                   </span>
//                   <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
//                     UX Researcher & Product Designer
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <a
//                 href="#"
//                 className="flex items-center md:gap-1 group cursor-pointer"
//               >
//                 <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight group-hover:text-gray-600">
//                   Live website
//                 </span>
//                 <img
//                   src="/linkarrow.svg"
//                   alt="External link"
//                   className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-120 transition-transform duration-300"
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
//           <div className="py-3 sm:py-12 flex flex-col justify-start items-start gap-4 sm:gap-6 overflow-hidden w-full">
//             {/* Process Title */}
//             <div className="flex justify-start items-end">
//               <h2 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter leading-8 sm:leading-10">
//                 Process
//               </h2>
//             </div>

//             {/* Process Steps */}
//             <div className="self-stretch flex flex-col justify-center items-center gap-4 sm:gap-5 overflow-hidden">
//               {processSteps.map((step, index) => (
//                 <div
//                   key={index}
//                   className="w-full relative flex flex-col justify-start items-start gap-2 overflow-hidden"
//                 >
//                   <div className="max-w-full sm:max-w-[777px] flex flex-col justify-start items-start pl-2 sm:pl-3">
//                     <h3 className="text-gray-500 text-lg sm:text-xl lg:text-2xl font-semibold font-inter leading-6 sm:leading-9 uppercase">
//                       <span className="text-gray-400">{step.number} </span>
//                       <span className="text-gray-400">{step.title}</span>
//                     </h3>
//                   </div>
//                   <div className="max-w-full sm:max-w-[530px] flex flex-col justify-start items-start gap-0.5 pl-2 sm:pl-3">
//                     {step.description.map((line, lineIndex) => {
//                       // First check if line has bold markers **text**
//                       if (line.includes("**")) {
//                         // Split by ** to find bold parts
//                         const parts = line.split("**");

//                         return (
//                           <p
//                             key={lineIndex}
//                             className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight"
//                           >
//                             {parts.map((part, i) => {
//                               // Odd indices are the text inside ** **
//                               if (i % 2 === 1) {
//                                 return (
//                                   <strong key={i} className="font-semibold">
//                                     {part}
//                                   </strong>
//                                 );
//                               }

//                               // Even indices - check for special characters
//                               if (part.startsWith(">\\")) {
//                                 return (
//                                   <span key={i}>
//                                     <span>&gt;</span>
//                                     <span
//                                       className={
//                                         step.sectionColor === "sky"
//                                           ? "text-sky-500"
//                                           : step.sectionColor === "green"
//                                           ? "text-green-500"
//                                           : ""
//                                       }
//                                     >
//                                       \
//                                     </span>
//                                     <span>{part.slice(2)}</span>
//                                   </span>
//                                 );
//                               }

//                               return <span key={i}>{part}</span>;
//                             })}
//                           </p>
//                         );
//                       }

//                       // Handle lines without bold
//                       const match = line.match(/^(>)(\\?)(\s*)(.*)$/);

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
//                               {match[3] && (
//                                 <span className="mr-0.5">{match[3]}</span>
//                               )}
//                               {match[4] && <span>{match[4]}</span>}
//                             </>
//                           ) : (
//                             line
//                           )}
//                         </p>
//                       );
//                     })}
//                   </div>

//                   {/* Image for this step */}
//                   {/* {step.image && (
//                     <div className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden mt-6 sm:mt-12">
//                       <img
//                         className="w-full h-auto rounded-xl sm:rounded-2xl"
//                         src={step.image}
//                         alt={`${step.title} step visualization`}
//                       />
//                     </div>
//                   )} */}
//                   {/* Image for this step */}
//                   {step.image && (
//                     <div
//                       className={`w-full relative rounded-xl sm:rounded-2xl overflow-hidden mt-7.5 sm:mt-9.5 lg:mt-11.5 ${
//                         step.number === "03" ? "bg-black p-4 sm:p-8" : ""
//                       }`}
//                     >
//                       <img
//                         className="w-full h-auto rounded-xl sm:rounded-2xl"
//                         src={step.image}
//                         alt={`${step.title} step visualization`}
//                       />
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Project Images Gallery - Remaining images after process steps */}
//           {[5].map((imageNum) => (
//             <div
//               key={imageNum}
//               className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden sm:-mt-6.5"
//             >
//               <img
//                 className="w-full h-auto rounded-xl sm:rounded-2xl"
//                 src={`/content-hub-gpt-${imageNum}.png`}
//                 alt={`project showcase ${imageNum}`}
//               />
//               {/* {imageNum && (
//                 <img
//                   src={`/content-hub-gpt-${imageNum}.png`}
//                   alt={`Project ${imageNum}`}
//                   className="w-full h-auto rounded-xl sm:rounded-2xl object-cover"
//                 />
//               )} */}
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
      subtitle:
        "**When GPT was just starting to trend**, Walmart sellers were still writing and optimizing product listings manually.",
      subtitleBold: "Walmart Seller were spending hours on repetitive tasks.",
      keySection: "Key Challenges",
      description: [
        ">\\  Sellers lacked automation for product descriptions, SEO, and taxonomy alignment.",
        ">\\  Manual workflows caused **inconsistent content quality** and slower go-to-market speed.",
        ">\\  Fragmented tools increased **errors and cognitive load**, affecting sales performance.",
      ],
      images: [
        { src: "/walmart-1.png", alt: "Walmart branding" },
        { src: "/walmart-2.png", alt: "Seller dashboard" },
      ],
      imageLayout: "grid",
    },
    {
      number: "02",
      title: "JOURNEY",
      subtitle:
        "Collaborated with Anurag Gupta and Sumit Kapoor (Co-Founders, Zorang) to conceptualize a scalable AI content management solution.",
      keySection: "What I Did",
      description: [
        "> Conducted **market and user research** with Walmart sellers to uncover inefficiencies.",
        "> Defined **user personas and mapped content** creation workflows.",
        "> Designed **low-to-high fidelity wireframes** in Figma with iterative feedback loops.",
        "> Integrated OpenAI APIs to power content generation, taxonomy tagging, and SEO insights.",
        "> Led the design team and tested AI-powered modules before GPT tools became mainstream.",
        "> Positioned **ContentHubGPT as a SaaS**-ready platform for enterprise sellers.",
      ],
      image: "/content-hub-gpt-2.png",
      imageLayout: "single",
    },
    {
      number: "03",
      title: "SOLUTION",
      subtitle:
        "Designed and developed an AI-powered content automation platform that simplified the end-to-end process of managing product listings.",
      keySection: "Core Features Delivered",
      sectionColor: "sky",
      description: [
        ">\\  **Content Generation:** AI-based copywriting tailored to Walmart's tone and SEO needs.",
        ">\\  **SEO Enhancement:** Automated keyword analysis and real-time optimization scoring.",
        ">\\  **Taxonomy Alignment:** Smart tagging and category matching for marketplace compliance.",
        ">\\  **Dashboard UX:** A clean, modular layout enabling fast navigation and seamless uploads.",
        ">\\  **Branding:** Minimal SaaS visual identity later adapted to GSPANN's enterprise design system.",
      ],
      image: "/content-hub-gpt-3.png",
      note: "After getting acquired was revamped to GSPANN's Design Language",
      imageLayout: "single",
    },
    {
      number: "04",
      title: "RESULTS",
      subtitle:
        "After acquisition, ContentHubGPT became a core part of GSPANN's AI suite for digital commerce.",
      keySection: "Impact",
      sectionColor: "green",
      description: [
        ">\\  **40% reduction** in listing time",
        ">\\  **82% improvement** in user engagement after UI/UX revamp under GSPANN.",
        ">\\  **30% increase** in conversion rate for AI-enhanced content.",
        ">\\  🧩 **Platform played a key role in Zorang's acquisition by GSPANN.**",
        ">\\  **Now scaled for enterprise clients as part of GSPANN's GenAI suite.**",
      ],

      image: "/content-hub-gpt-4.png",
      alt: "GSPANN acquires ContentHubGPT",
      imageLayout: "single",
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
                src="/linkarrow.svg"
                alt="External link"
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <div className="flex flex-col justify-start">
              <div className="flex gap-3 sm:gap-0 justify-between pt-2">
                <div className="w-full mb-2.5">
                  <div className="rounded-lg outline-[2.62px] outline-sky-50 px-3.5 py-2.5 inline-flex items-center justify-center">
                    <div className="text-sky-500 text-xs font-semibold font-inter leading-tight tracking-wide whitespace-nowrap">
                      SaaS Dashboard + Branding
                    </div>
                  </div>
                </div>
                <div>
                  <img src="./contentHubGPT.svg" alt="content-hub-gpt image" />
                </div>
              </div>

              <h1 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter mt-1">
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
                    7-8 months(Early GPT Era 2023)
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:gap-8 xl:gap-14">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Tools
                  </span>
                  <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Figma, Miro, HotJar, OpenAI API
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Role
                  </span>
                  <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Sr. UX Researcher & Product Designer
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-8 sm:gap-20">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Industry
                  </span>
                  <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    ECommerce
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
                  src="/linkarrow.svg"
                  alt="External link"
                  className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300"
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
                  className="w-full relative flex flex-col justify-start items-start gap-2 overflow-hidden"
                >
                  {/* Step number and title */}
                  <div className="max-w-full sm:max-w-[777px] flex flex-col justify-start items-start pl-2 sm:pl-3">
                    <h3 className="text-gray-500 text-lg sm:text-xl lg:text-2xl font-semibold font-inter leading-6 sm:leading-9 uppercase">
                      <span className="text-gray-400">{step.number} </span>
                      <span className="text-gray-400">{step.title}</span>
                    </h3>
                  </div>
                  {/* Subtitle section */}
                  {/* {step.subtitle && (
                    <div className="max-w-full sm:max-w-[777px] flex flex-col justify-start items-start pl-2 sm:pl-3 mt-3">
                      <p className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
                        {step.subtitle}
                      </p>
                      {step.subtitleBold && (
                        <p className="text-sky-600 text-sm sm:text-base font-semibold font-inter leading-snug tracking-tight mt-1">
                          {step.subtitleBold}
                        </p>
                      )}
                    </div>
                  )} */}
                  {/* Subtitle section */}
                  {step.subtitle && (
                    <div className="max-w-full sm:max-w-[620px] flex flex-col justify-start items-start pl-2 sm:pl-3 mt-1">
                      {step.subtitle.includes("**") ? (
                        <p className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
                          {step.subtitle.split("**").map((part, i) =>
                            i % 2 === 1 ? (
                              <strong key={i} className="font-semibold">
                                {part}
                              </strong>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      ) : (
                        <p className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight">
                          {step.subtitle}
                        </p>
                      )}

                      {step.subtitleBold && (
                        <p className="text-sky-700 text-sm sm:text-base font-semibold font-inter leading-snug tracking-tight">
                          {step.subtitleBold}
                        </p>
                      )}
                    </div>
                  )}
                  {/* Key Section Label */}
                  {step.keySection && (
                    <div className="max-w-full flex flex-col justify-start items-start pl-2 sm:pl-3 mt-1">
                      <div
                        className={`${
                          step.number === "01"
                            ? "bg-red-700"
                            : step.number === "02"
                            ? "bg-blue-800"
                            : step.number === "03"
                            ? "bg-sky-600"
                            : "bg-green-600"
                        } text-white text-base font-bold font-inter px-4 py-1 rounded inline-block`}
                      >
                        {step.keySection}
                      </div>
                    </div>
                  )}

                  {/* Description bullets */}
                  {/* <div className="max-w-full sm:max-w-[620px] flex flex-col justify-start items-start gap-0.5 pl-2 sm:pl-3 mt-2">
                    {step.description.map((line, lineIndex) => {
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
                  </div> */}

                  {/* Description bullets */}
                  <div className="max-w-full sm:max-w-[620px] flex flex-col justify-start items-start gap-0.5 pl-2 sm:pl-3">
                    {step.description.map((line, lineIndex) => {
                      if (line.includes("**")) {
                        // Split by ** to find bold parts
                        const parts = line.split("**");
                        return (
                          <p
                            key={lineIndex}
                            className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight"
                          >
                            {parts.map((part, i) => {
                              // Odd indices are the text inside ** ** → make them bold
                              if (i % 2 === 1) {
                                return (
                                  <strong key={i} className="font-semibold">
                                    {part}
                                  </strong>
                                );
                              }

                              // ✅ CHANGED: handle both single '\' and double '\\' cases
                              if (
                                part.startsWith(">\\") ||
                                part.startsWith(">\\\\")
                              ) {
                                return (
                                  <span key={i}>
                                    <span>&gt;</span>
                                    {/* ✅ CHANGED: Always show one red slash */}
                                    <span className="text-red-500 font-bold">
                                      \
                                    </span>
                                    {/* ✅ CHANGED: slice depending on single or double slash */}
                                    <span>
                                      {part.slice(
                                        part.startsWith(">\\\\") ? 3 : 2
                                      )}
                                    </span>
                                  </span>
                                );
                              }

                              // Normal text (no bold or special char)
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
                                <span className="text-red-500 font-bold">
                                  {match[2]} {/* ← red slash */}
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

                  {/* Images for this step */}
                  {step.imageLayout === "grid" && step.images && (
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7.5 sm:mt-9.5 lg:mt-11.5">
                      {step.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden"
                        >
                          <img
                            className="w-full h-auto rounded-xl sm:rounded-2xl object-cover"
                            src={img.src}
                            alt={img.alt}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {step.imageLayout === "single" && step.image && (
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
                      {step.note && step.number === "03" && (
                        <div className="absolute top-6 sm:top-10 left-6 sm:left-12 right-6 sm:right-12">
                          <p className="text-orange-400 text-sm sm:text-base lg:text-lg font-semibold font-inter">
                            {step.note}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                  {step.imageLayout === "stacked" && step.images && (
                    <div className="w-full flex flex-col gap-4 mt-7.5 sm:mt-9.5 lg:mt-11.5">
                      {step.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden"
                        >
                          <img
                            className="w-full h-auto rounded-xl sm:rounded-2xl"
                            src={img.src}
                            alt={img.alt}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Project Images Gallery - Last image */}
          <div className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden sm:-mt-6.5">
            <img
              className="w-full h-auto rounded-xl sm:rounded-2xl"
              src="/content-hub-gpt-5.png"
              alt="project showcase 5"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectShowcase;
