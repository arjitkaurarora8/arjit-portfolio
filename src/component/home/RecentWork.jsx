// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { ReadCaseStudyCursor } from "../ui/ReadCaseStudyCursor";

// export default function RecentWork() {
//   const [isHovering, setIsHovering] = useState(false);

//   const projects = [
//     {
//       id: 1,
//       src: "/work1.png",
//       alt: "Work 1",
//       title: "TradeProbe",
//       subtitle: "WebApp & Mobile Design",
//     },
//     {
//       id: 2,
//       src: "/work2.png",
//       alt: "Work 2",
//       title: "TradeProbe",
//       subtitle: "WebApp & Mobile Design",
//     },
//   ];

//   return (
//     <section
//       id="work"
//       className="w-full flex flex-col px-4 sm:px-6 scroll-mt-24"
//     >
//       <div className="flex flex-col items-center sm:items-end">
//         <h2 className="text-stone-900 text-2xl sm:text-3xl font-semibold leading-9">
//           Recent Work
//         </h2>
//         <p className="pt-2 sm:pt-4 flex text-center sm:text-right text-neutral-500 text-sm sm:text-base font-normal leading-snug tracking-tight max-w-md sm:max-w-none">
//           Every product is designed - visually and how it works.{" "}
//           <br className="hidden sm:block" />
//           Using it will leave an impression. I'm going to make sure it's a good
//           one.
//         </p>
//       </div>

//       {/* Custom Cursor */}
//       <ReadCaseStudyCursor isVisible={isHovering} />

//       <div className="flex w-full pt-6 rounded-2xl overflow-hidden">
//         {/* Left Image */}
//         <Link
//           href="/project"
//           className="flex-1 group relative transition-all duration-600 ease-in-out hover:flex-[1.3] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] "
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//           style={{ cursor: "none" }}
//         >
//           {/* <img
//             src="/work1.jpg"
//             alt="Work 1"
//             className="w-full h-full
//             object-top-left object-none
//              rounded-l-2xl"
//           /> */}
//           <div
//             className="w-full h-full rounded-l-2xl bg-no-repeat bg-cover bg-left-top"
//             style={{ backgroundImage: "url('/work1.jpg')" }}
//           ></div>

//           {/* Background overlay on hover - darker for better text visibility */}
//           <div
//             className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100
//            transition-opacity duration-500 ease-in-out rounded-r-2xl"
//           ></div>

//           {/* Text Overlay with higher z-index and background */}
//           <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
//             <h3 className="text-white text-2xl font-bold leading-tight mb-1">
//               {projects[1].title}
//             </h3>
//             <p className="text-white/90 text-base font-normal leading-tight">
//               {projects[1].subtitle}
//             </p>
//           </div>
//         </Link>

//         {/* Right Image */}
//         <Link
//           href="/project"
//           className="flex-1 group relative transition-all duration-600 ease-in-out hover:flex-[1.3] overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] "
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//           style={{ cursor: "none" }}
//         >
//           {/* <img
//             src="/work_2.png"
//             alt="Work 2"
//             className="w-full h-full
//              object-top-right object-none
//              rounded-r-2xl"
//           /> */}
//           <div
//             className="w-full h-full rounded-r-2xl bg-no-repeat bg-cover bg-right-top"
//             style={{ backgroundImage: "url('/work_2.png')" }}
//           ></div>

//           {/* Background overlay on hover - darker for better text visibility */}
//           <div
//             className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100
//           transition-opacity duration-500 ease-in-out rounded-r-2xl"
//           ></div>

//           {/* Text Overlay with higher z-index and background */}
//           <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
//             <h3 className="text-white text-2xl font-bold leading-tight mb-1">
//               {projects[1].title}
//             </h3>
//             <p className="text-white/90 text-base font-normal leading-tight">
//               {projects[1].subtitle}
//             </p>
//           </div>
//         </Link>
//       </div>
//     </section>
//   );
// }

"use client";
import Link from "next/link";
import { useState } from "react";
import { ReadCaseStudyCursor } from "../ui/ReadCaseStudyCursor";

export default function RecentWork() {
  const [isHovering, setIsHovering] = useState(false);

  const projects = [
    {
      id: 1,
      src: "/work1.png",
      alt: "Work 1",
      title: "TradeProbe",
      subtitle: "WebApp & Mobile Design",
    },
    {
      id: 2,
      src: "/work2.png",
      alt: "Work 2",
      title: "TradeProbe",
      subtitle: "WebApp & Mobile Design",
    },
  ];

  return (
    <section
      id="work"
      className="w-full flex flex-col px-4 sm:px-6 scroll-mt-24"
    >
      <div className="flex flex-col items-center sm:items-end">
        <h2 className="text-stone-900 text-2xl sm:text-3xl font-semibold leading-9">
          Recent Work
        </h2>
        <p className="pt-2 sm:pt-4 flex text-center sm:text-right text-neutral-500 text-sm sm:text-base font-normal leading-snug tracking-tight max-w-md sm:max-w-none">
          Every product is designed - visually and how it works.{" "}
          <br className="hidden sm:block" />
          Using it will leave an impression. I'm going to make sure it's a good
          one.
        </p>
      </div>

      {/* Custom Cursor */}
      <ReadCaseStudyCursor isVisible={isHovering} />

      <div className="flex flex-col sm:flex-row w-full pt-6 gap-4 sm:gap-0">
        {/* Left Image */}
        <Link
          href="/project"
          className="flex-1 group relative transition-all duration-600 ease-in-out sm:hover:flex-[1.3] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-2xl sm:rounded-l-2xl sm:rounded-r-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{ cursor: "none" }}
        >
          <div
            className="w-full h-full bg-no-repeat bg-cover bg-center sm:bg-left-top transition-transform duration-600 ease-in-out scale-105 group-hover:scale-100 min-h-[300px]"
            style={{ backgroundImage: "url('/work1.jpg')" }}
          ></div>
          {/* Background overlay on hover - darker for better text visibility */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100
           transition-opacity duration-500 ease-in-out"
          ></div>

          {/* Text Overlay with higher z-index and background */}
          <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <h3 className="text-white text-2xl font-bold leading-tight mb-1">
              {projects[0].title}
            </h3>
            <p className="text-white/90 text-base font-normal leading-tight">
              {projects[0].subtitle}
            </p>
          </div>
        </Link>

        {/* Right Image */}
        <Link
          href="/project"
          className="flex-1 group relative transition-all duration-600 ease-in-out sm:hover:flex-[1.35] overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-2xl sm:rounded-r-2xl sm:rounded-l-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{ cursor: "none" }}
        >
          <div
            className="w-full h-full bg-no-repeat sm:bg-top-right bg-cover transition-transform duration-600 ease-in-out scale-105 group-hover:scale-100 min-h-[300px]"
            style={{ backgroundImage: "url('/image (2).png')" }}
          ></div>
          {/* Background overlay on hover - darker for better text visibility */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 
          transition-opacity duration-500 ease-in-out"
          ></div>

          {/* Text Overlay with higher z-index and background */}
          <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <h3 className="text-white text-2xl font-bold leading-tight mb-1">
              {projects[1].title}
            </h3>
            <p className="text-white/90 text-base font-normal leading-tight">
              {projects[1].subtitle}
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
