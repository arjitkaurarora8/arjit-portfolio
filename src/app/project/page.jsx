// import React from "react";
// import Navbar from "@/component/Navbar";

// function page() {
//   return (
//     <>
//       <Navbar showLinks={false} />
//       <div className="px-4 sm:px-6 pt-10 pb-20">
//         <div className="flex flex-col gap-5">
//           <a href="#" className="flex items-center gap-1 group cursor-pointer">
//             <span className="text-gray-900 text-base group-hover:text-gray-600 group-hover:scale-108 transition-transform duration-300">
//               Go back
//             </span>
//             <img
//               src="/linkarrow.svg"
//               alt="External link"
//               className="w-5 h-5 group-hover:scale-125 transition-transform duration-300"
//             />
//           </a>
//           <div className="flex flex-col justify-start">
//             <div className="flex flex-row gap-2 items-center justify-start">
//               <h1 className="text-gray-900 text-4xl font-normal">TradeProbe</h1>
//               <h3 className="text-gray-400 text-3xl font-normal">
//                 (Product Design & Startegy)
//               </h3>
//             </div>
//             <p className="text-gray-400 text-base font-normal leading-snug tracking-tight mr-96">
//               TradeProbe Lorem ipsum dolor sit amet, consectetur adipiscing
//               elit, sed do eiusmod tempor incididunt ut labore et dolore magna
//               aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
//               laboris nisi ut aliquip ex ea commodo consequat.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default page;

// import React from "react";
// import Navbar from "@/component/Navbar";

// function page() {
//   return (
//     <>
//       <Navbar showLinks={false} />
//       <div className="px-4 sm:px-6 pt-10 pb-20">
//         <div className="flex flex-col gap-5 max-w-4xl">
//           <a
//             href="#"
//             className="flex items-center gap-1 group cursor-pointer w-fit"
//           >
//             <span className="text-gray-900 text-base group-hover:text-gray-600 transition-colors duration-300">
//               Go back
//             </span>
//             <img
//               src="/linkarrow.svg"
//               alt="External link"
//               className="w-5 h-5 group-hover:scale-125 transition-transform duration-300"
//             />
//           </a>

//           <div className="flex flex-col justify-start gap-4">
//             <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-start flex-wrap">
//               <h1 className="text-gray-900 text-3xl sm:text-4xl font-normal">
//                 TradeProbe
//               </h1>
//               <h3 className="text-gray-400 text-2xl sm:text-3xl font-normal">
//                 (Product Design & Strategy)
//               </h3>
//             </div>

//             <div className="max-w-none sm:max-w-2xl lg:max-w-3xl">
//               <p className="text-gray-400 text-base font-normal leading-relaxed tracking-tight">
//                 TradeProbe Lorem ipsum dolor sit amet, consectetur adipiscing
//                 elit, sed do eiusmod tempor incididunt ut labore et dolore magna
//                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                 ullamco laboris nisi ut aliquip ex ea commodo consequat.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col">
//         <div className="flex flex-row justify-between">
//           <div className="flex flex-row gap-4">
//             <div className="flex flex-col">
//               <span>Timeline</span>
//               <span>Ongoing</span>
//             </div>
//             <div className="flex flex-col">
//               <span>Tools</span>
//               <span>Figma, Miro</span>
//             </div>
//           </div>
//           <div>
//             <a
//               href="#"
//               className="flex items-center gap-1 group cursor-pointer"
//             >
//               <span className="text-gray-900 text-base group-hover:text-gray-600 group-hover:scale-108 transition-transform duration-300">
//                 Live Website
//               </span>
//               <img
//                 src="/linkarrow.svg"
//                 alt="External link"
//                 className="w-5 h-5 group-hover:scale-120 transition-transform duration-300"
//               />
//             </a>
//           </div>
//         </div>
//         <img src="/projectimage1.svg" alt="" />
//       </div>
//     </>
//   );
// }

// export default page;

import React from "react";
import Navbar from "@/component/Navbar";

function ProjectShowcase() {
  // Sample data - replace with your actual project data
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

      <div className="px-6 pb-20 flex flex-col overflow-hidden bg-red-200">
        <div className="flex flex-col justify-center items-center gap-6 overflow-hidden">
          {/* Project Info Header */}
          <div className="w-full flex justify-between items-end overflow-hidden mb-6">
            <div className="flex justify-start items-end gap-20 flex-wrap">
              <div className="flex flex-col">
                <span className="text-gray-500 text-base font-normal font-inter leading-snug tracking-tight">
                  Timeline
                </span>
                <span className="text-gray-900 text-base font-normal font-inter leading-snug tracking-tight">
                  Ongoing
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-base font-normal font-inter leading-snug tracking-tight">
                  Tools
                </span>
                <span className="text-gray-900 text-base font-normal font-inter leading-snug tracking-tight">
                  Figma, Miro
                </span>
              </div>
            </div>

            <div>
              <a
                href="#"
                className="flex items-center gap-1 group cursor-pointer"
              >
                <span className="text-gray-900 text-base font-normal font-inter leading-snug tracking-tight group-hover:text-gray-600 transition-colors duration-300">
                  Live website
                </span>
                <img
                  src="/linkarrow.svg"
                  alt="External link"
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </div>

          {/* Main Hero Image */}
          <div className="rounded-3xl flex justify-center items-center overflow-hidden">
            <div className="w-full max-w-[1152px] h-[800px] relative rounded-[20px] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="/tradeprobe-hero.svg"
                alt="TradeProbe main application interface"
              />
            </div>
          </div>

          {/* Process Section */}
          <div className="py-10 flex flex-col justify-start items-start gap-6 overflow-hidden w-full">
            {/* Process Title */}
            <div className="self-stretch flex justify-start items-end overflow-hidden">
              <div className="max-w-[777px] flex flex-col justify-start items-start">
                <h2 className="text-gray-900 text-4xl font-normal font-inter leading-10">
                  Process
                </h2>
              </div>
            </div>

            {/* Process Steps */}
            <div className="self-stretch flex flex-col justify-center items-center gap-6 overflow-hidden">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="w-full pl-4 pb-6 relative flex flex-col justify-start items-start gap-2 overflow-hidden border-b-2 border-gray-100 last:border-b-0"
                >
                  <div className="max-w-[777px] flex flex-col justify-start items-start">
                    <h3 className="text-gray-500 text-3xl font-normal font-inter leading-9">
                      <span className="text-gray-500">{step.number} </span>
                      <span className="text-gray-500">{step.title}</span>
                    </h3>
                  </div>
                  <div className="max-w-[539px] flex flex-col justify-start items-start">
                    <p className="text-gray-500 text-base font-normal font-inter leading-snug tracking-tight">
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
              className="w-full max-w-[1152px] h-[800px] relative rounded-2xl overflow-hidden"
            >
              <img
                className="w-full h-full object-cover"
                src={`/tradeprobe-${imageNum}.jpg`}
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
