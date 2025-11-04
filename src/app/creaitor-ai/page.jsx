import React from "react";
import Navbar from "@/component/layout/Navbar";
import Link from "next/link";

function ProjectShowcase() {
  const processSteps = [
    {
      number: "01",
      title: "PROBLEM",
      subtitle:
        "**Creators were spending more time writing than creating.** Manually brainstorming, drafting, and optimizing every piece of content.",
      //   subtitleBold: "Walmart Seller were spending hours on repetitive tasks.",
      keySection: "Key Challenges",

      description: [
        ">\\ Fragmented tools for research, writing, and optimization.",
        ">\\ Inconsistent brand voice across platforms.",
        ">\\ Long turnaround time for client-ready content.",
        ">\\ Lack of AI systems tailored for marketing tone and SEO performance.",
      ],
    },
    {
      number: "02",
      title: "JOURNEY",
      subtitle:
        "The goal was simple: **make content creation feel effortless.**",
      keySection: "What I Did",
      description: [
        "> Audited **creator workflows** and identified repetitive steps.",
        "> **Designed a centralized AI dashboard** for writing, editing, and publishing.",
        "> **Created assistant modules** for each use case: Blog, SEO, Email, and E-commerce.",
        "> Built clean **UI flows with prototype** that reduced decision fatigue and improved focus.",
      ],
      images: [
        { src: "/creaitor-ai-2.png", alt: "journey step 1" },
        { src: "/creaitor-ai-3.svg", alt: "journey step 2" },
      ],
      imageLayout: "stacked",
    },
    {
      number: "03",
      title: "SOLUTION",
      subtitle:
        "**An AI-powered workspace for creators to generate, refine, and publish on-brand content.** All in one place.",
      keySection: "Core Features Delivered",
      sectionColor: "sky",

      description: [
        ">\\  **AI Writing Assistant:** Suggests structure, tone, and keywords.",
        ">\\  **Content Library:** Manages multiple projects and drafts efficiently.",
        ">\\  **SEO + GEO Optimization:** Helps creators write for both audience and algorithms.",
        ">\\  **Category-Specific Templates:** For blogs, emails, social media, and landing pages.",
        ">\\  **Content Insights Dashboard:** Tracks readability, SEO score, and brand consistency.",
      ],
      images: [
        { src: "/creaitor-ai-4.png", alt: "journey step 1" },
        { src: "/creaitor-ai-5.png", alt: "journey step 2" },
      ],
      //   note: "After getting acquired was revamped to GSPANN's Design Language",
      imageLayout: "stacked",
    },
    {
      number: "04",
      title: "RESULTS",
      subtitle:
        "Creator.ai quickly gained traction among early adopters and content marketers.",
      keySection: "Impact",
      sectionColor: "green",
      description: [
        ">\\  **40% faster content output/creator**",
        ">\\  Improved **brand consistency** and writing accuracy across campaigns",
        ">\\  **Adopted by 10k+ creators within months of beta**",
        ">\\  Recognized as a Leader in AI Productivity Tools (2024–2025) by multiple platforms.",
      ],

      image: "/creaitor-ai-6.svg",
      alt: "results",
      imageLayout: "single",
    },
  ];

  return (
    <>
      <Navbar showLinks={true} />

      <div className="px-4 sm:px-6 pt-8.5 md:pt-16.5 flex flex-col overflow-hidden">
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
              <div className="flex justify-between flex-col md:flex-row items-start md:items-center pt-2">
                <div className="w-full mb-0 md:mb-2.5">
                  <div className="rounded-md md:rounded-lg outline-[2.62px] outline-sky-50 px-2 sm:px-3.5 py-1.5 sm:py-2.5 inline-flex items-center justify-center">
                    <div className="text-sky-500 text-xs font-semibold font-inter leading-tight tracking-wide whitespace-nowrap">
                      Web App Dashboard + AI Content Editor
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="./creator-ai.svg"
                    alt="creaitor-ai logo"
                    className="w-[150px] md:w-[200px]"
                  />
                </div>
              </div>

              <h1 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter mt-2 sm:mt-1">
                Creaitor.ai
              </h1>

              <p className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight max-w-xl pt-2 sm:mt-4">
                Creators were spending more time writing than creating.
              </p>
            </div>
          </div>

          {/* Project Info Header */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end overflow-hidden pt-8 sm:pt-16 gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-9 md:gap-10 lg:gap-20 xl:gap-28">
              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-8 sm:gap-20">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Timeline
                  </span>
                  <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    3 months
                  </span>
                </div>
              </div>

              {/* <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:gap-8 xl:gap-14"> */}
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
                  Product Designer (Freelance)
                </span>
              </div>
              {/* </div> */}

              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-8 sm:gap-20">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Industry
                  </span>
                  <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    AI / Creator Economy
                  </span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="https://www.creaitor.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center md:gap-1 group cursor-pointer"
              >
                <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight group-hover:text-gray-600">
                  Live website
                </span>
                <img
                  src="/linkarrow.svg"
                  alt="External link"
                  className=" h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </div>

          {/* Main Hero Image */}
          <div className="w-full relative pt-2.5 rounded-xl sm:rounded-2xl overflow-hidden">
            <img
              className="w-full h-auto rounded-xl sm:rounded-2xl"
              src="/creaitor-ai-hero.png"
              alt="Creaitor ai main application interface"
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
                              <strong
                                key={i}
                                className="font-semibold text-sky-700"
                              >
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
                            ? "bg-sky-700"
                            : step.number === "03"
                            ? "bg-sky-500"
                            : "bg-green-600"
                        } text-white text-base font-bold font-inter px-4 py-1 rounded inline-block`}
                      >
                        {step.keySection}
                      </div>
                    </div>
                  )}

                  {/* Description bullets */}
                  {/* Description bullets */}
                  <div className="max-w-full sm:max-w-[618px] flex flex-col justify-start items-start gap-0.5 pl-2 sm:pl-3">
                    {step.description.map((line, lineIndex) => {
                      // Determine slash color based on step number
                      const slashColor =
                        step.number === "01"
                          ? "text-red-500"
                          : step.number === "02"
                          ? "text-sky-700"
                          : step.number === "03"
                          ? "text-sky-500"
                          : "text-emerald-500";

                      if (line.includes("**")) {
                        // Split by ** to find bold parts
                        const parts = line.split("**");
                        return (
                          <p
                            key={lineIndex}
                            className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight pl-5 -indent-5"
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
                                    {/* ✅ CHANGED: Use dynamic slash color */}
                                    <span
                                      className={`${slashColor} font-normal`}
                                    >
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
                          className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight pl-5 -indent-5"
                        >
                          {match ? (
                            <>
                              <span>{match[1]}</span>
                              {match[2] && (
                                <span className={`${slashColor} font-normal`}>
                                  {match[2]} {/* ← dynamic color slash */}
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
                  {/* {step.imageLayout === "grid" && step.images && (
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
                  )} */}
                  {step.imageLayout === "single" && step.image && (
                    <div
                      className={`w-full relative rounded-xl sm:rounded-2xl overflow-hidden mt-7.5 sm:mt-9.5 lg:mt-10 ${
                        step.number === "03" ? "bg-black p-4 sm:p-8" : ""
                      }`}
                    >
                      <img
                        className="w-full h-auto rounded-xl sm:rounded-2xl "
                        src={step.image}
                        alt={`${step.title} step visualization`}
                      />
                      {/* {step.note && step.number === "03" && (
                        <div className="absolute top-6 sm:top-10 left-6 sm:left-12 right-6 sm:right-12">
                          <p className="text-orange-400 text-sm sm:text-base lg:text-lg font-semibold font-inter">
                            {step.note}
                          </p>
                        </div>
                      )} */}
                    </div>
                  )}
                  {step.imageLayout === "stacked" && step.images && (
                    <div className="w-full flex flex-col gap-4 mt-7.5 sm:mt-9.5 lg:mt-10">
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
          {/* <div className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden sm:-mt-6.5">
            <img
              className="w-full h-auto rounded-xl sm:rounded-2xl"
              src="/content-hub-gpt-5.png"
              alt="project showcase 5"
            />
          </div> */}
        </div>
      </div>
      <div className="flex justify-between items-center px-5 py-4 border-t border-gray-200 w-full">
        <div className="w-96 justify-center text-black">
          <span className="text-gray-500 text-2xl font-semibold font-inter uppercase leading-7">
            👀Checkout more of my
            <br />s
          </span>
          <span className="text-gray-500 text-3xl font-normal font-inter leading-7">
            aa
          </span>
          <span className="text-gray-500 text-2xl font-semibold font-inter uppercase leading-7">
            s Product Designs
          </span>
        </div>

        <Link href="/saas-dashboard-solutions">
          <button className="w-20 h-10 cursor-pointer bg-sky-500 flex gap-2 items-center justify-center rounded-lg outline-2 outline-blue-100 transform transition-all duration-150 active:scale-95 active:shadow-inner">
            <span className="text-white text-sm font-semibold">Here</span>
            <span>
              <img src="./readCaseCursorArrow.svg" alt="pointing arrow" />
            </span>
          </button>
        </Link>
      </div>
    </>
  );
}

export default ProjectShowcase;
