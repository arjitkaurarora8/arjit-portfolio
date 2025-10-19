"use client";
import Link from "next/link";
import { useState } from "react";
import { ReadCaseStudyCursor } from "../ui/ReadCaseStudyCursor";

export default function DetailedCaseStudies() {
  const [isHovering, setIsHovering] = useState(false);

  const projects = [
    {
      id: 1,
      // src: "/work_1.png",
      alt: "Work 1",
      title: "TradeProbe",
      subtitle: "WebApp & Mobile Design",
    },
    {
      id: 2,
      src: "/work_2.png",
      alt: "Work 2",
      title: "ContentHubGPT",
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
          Detailed Case Studies
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

      {/* <div className="project-cards-wrapper w-full pt-6"> */}
      <div className="flex flex-col sm:flex-row w-full pt-2 sm:pt-4 gap-4 sm:gap-0">
        {/* Left Image */}
        <Link
          href="/project"
          className="flex-1 border border-r-0 border-emerald-700 group relative transition-all duration-800 ease-in-out sm:hover:flex-3 md:hover:flex-4 xl:hover:flex-[2.8] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:[660px] overflow-hidden rounded-2xl sm:rounded-l-2xl sm:rounded-r-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{ cursor: "none" }}
        >
          <div
            className="w-full h-full bg-no-repeat bg-cover bg-left sm:bg-left-top min-h-[300px] bg-work1-mobile md:bg-work1-desktop"
            // style={{ backgroundImage: "url('/work1.jpg')" }}
            // style={{ backgroundImage: "url('/work_1.png')" }}
          ></div>

          {/* Background overlay on hover - darker for better text visibility */}
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

          {/* Text Overlay with higher z-index and background */}
          <div className="absolute bottom-9 sm:bottom-12 left-4 sm:left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-4 ">
            <h3 className="text-white text-base sm:text-xl font-bold leading-tight mb-1">
              {projects[1].title}
            </h3>
            <p className="text-white/50 text-xs sm:text-sm font-normal leading-tight">
              {projects[1].subtitle}
            </p>
          </div>
        </Link>

        {/* Right Image */}
        <Link
          href="/content-hub-gpt"
          className="flex-1 group relative border border-l-0 border-emerald-700 transition-all duration-700 ease-in-out sm:hover:flex-1 md:hover:flex-1 xl:hover:flex-2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:[660px] overflow-hidden rounded-2xl sm:rounded-r-2xl sm:rounded-l-none"
          // className="flex-1 group relative border border-l-0 border-emerald-700 transition-all duration-600 ease-in-out sm:hover:flex-[1.35] lg:hover:flex-[1.3] overflow-hidden h-[300px] sm:h-[400px] md:h-[500px]  xl:h-[600px] 2xl:[660px] rounded-2xl sm:rounded-r-2xl sm:rounded-l-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{ cursor: "none" }}
        >
          <div
            className="w-full h-full bg-no-repeat bg-cover bg-left sm:bg-left-top min-h-[300px] bg-work2-mobile md:bg-work2-desktop"
            // style={{ backgroundImage: "url('/work_2.png')" }}
          ></div>

          {/* Background overlay on hover - darker for better text visibility */}
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

          {/* Text Overlay with higher z-index and background */}
          <div className="absolute bottom-9 sm:bottom-12 left-4 sm:left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-4 ">
            <h3 className="text-white text-base sm:text-xl font-bold leading-tight mb-1">
              {projects[1].title}
            </h3>
            <p className="text-white/50 text-xs sm:text-sm font-normal leading-tight">
              {projects[1].subtitle}
            </p>
          </div>
        </Link>
      </div>
      {/* </div> */}
    </section>
  );
}
