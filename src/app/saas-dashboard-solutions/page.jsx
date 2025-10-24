import React from "react";
import Navbar from "@/component/layout/Navbar";
import Link from "next/link";

function ProjectShowcase() {
  const processSteps = [
    {
      title: "heliosOne",
      icon: "/helios.svg",
      subtitle:
        "**Making business operational insights simpler for utility professionals.**",
      liveLink: "https://nftfn.xyz", // replace with actual link
      description: [
        "> Designed an **AI-powered SaaS dashboard** enabling organizations to track performance, compliance, and energy savings.",
        "> Created a multi-panel layout with smart visualizations and real-time updates.",
        "> Focused on **color-coded KPIs and modular cards** for executive decision-making.",
        "> Integrated alert prioritization for faster issue resolution.",
      ],
      image: "/saas-1.png",
      alt: "helios dashboard",
    },
    {
      title: "Etf.com",
      icon: "/etf.png",
      subtitle:
        "**Bringing structure and design consistency to financial intelligence.**",
      liveLink: "https://cryptoweekly.io",
      description: [
        "> Designed a dashboard experience for ETF performance tracking and content publishing.",
        "> Simplified access to real-time fund data, trend charts, and weekly insights.",
        "> Ensured accessibility and legibility across tablet and desktop interfaces.",
        "> Built for scalability allowing future AI summarization modules.",
      ],
      image: "/saas-2.png",
      alt: "etf platform",
    },
    {
      title: "Esource",
      icon: "/esource.png",
      subtitle: "**Turning dense analytics into actionable clarity..**",
      liveLink: "https://terablock.io",
      description: [
        "> Redesigned the corporate analytics and resources portal.",
        "> Implemented a content-first layout improving readability and engagement.",
        "> Introduced adaptive card-based navigation and simplified hierarchy.",
        "> Collaborated on color accessibility standards for better inclusivity.",
      ],
      image: "/saas-3.png",
      alt: "esource dashboard",
    },
    {
      title: "NIGP",
      icon: "/nictp.png",
      subtitle:
        "**Enabling leaders in procurement to access knowledge seamlessly..**",
      liveLink: "https://evm.ink",
      description: [
        "> Designed the NIGP corporate website to enhance resource discovery and learning.",
        "> Focused on UX consistency across the public and member-only sections.",
        "> Created responsive content templates for reports, events, and leadership programs.",
        "> Improved search structure with contextual filters and metadata tagging.",
      ],
      image: "/saas-4.png",
      alt: "NIGP dashboard",
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
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <div className="flex flex-col justify-start">
              <div className="flex gap-3 sm:gap-0 justify-between pt-2">
                <div className="w-full mb-2.5">
                  <div className="rounded-lg outline-[2.62px] outline-sky-50 px-3.5 py-2.5 inline-flex items-center justify-center">
                    <div className="text-sky-500 text-xs font-semibold font-inter leading-tight tracking-wide whitespace-nowrap">
                      Web Dashboards + Admin Panels + Corporate Websites
                    </div>
                  </div>
                </div>
                <div>
                  <img src="./saas.svg" alt="content-hub-gpt image" />
                </div>
              </div>

              <h1 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter mt-1">
                SaaS Dashboard Solutions
              </h1>

              <p className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight max-w-xl pt-2 sm:mt-4">
                Designing clarity into complex enterprise data systems.
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
                    SAAS Based Solution
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:gap-8 xl:gap-14">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Tools
                  </span>
                  <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Figma, Notion, Miro, Google Suite
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Role
                  </span>
                  <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    UX & Product Designer
                  </span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#"
                className="flex items-center md:gap-1 group cursor-pointer"
              >
                <span className="text-gray-900 text-sm md:text-base font-normal underline font-inter leading-snug tracking-tight group-hover:text-gray-600">
                  Figma File Compilation
                </span>
                <img
                  src="/linkarrow.png"
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
              src="/saas-hero.png"
              alt="Web3 projects showcase"
            />
          </div>

          {/* Projects Section */}
          <div className="py-3 sm:py-12 flex flex-col justify-start items-start gap-8 sm:gap-12 overflow-hidden w-full">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="w-full relative flex flex-col justify-start items-start overflow-hidden"
              >
                {/* Title with Icon */}
                <div className="w-full flex items-center justify-between">
                  <div className="flex justify-between w-full">
                    <h3 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter leading-tight">
                      {step.title}
                    </h3>
                    {step.icon && (
                      <img
                        src={step.icon}
                        alt={`${step.title} icon`}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                      />
                    )}
                  </div>
                </div>

                {/* Subtitle with Live Link or Details Link */}
                <div className="max-w-full sm:max-w-[620px]">
                  {step.subtitle.includes("**") ? (
                    <p className="text-gray-900 text-sm sm:text-base font-normal font-inter pt-3 leading-snug tracking-tight">
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
                    <p className="text-gray-900 text-base sm:text-lg font-normal font-inter leading-snug tracking-tight">
                      {step.subtitle}
                    </p>
                  )}
                </div>

                {/* Description bullets */}
                <div className="w-full flex flex-col sm:flex-row justify-between items-en sm:pt-0.5">
                  <div className="max-w-full sm:max-w-[520px] flex flex-col justify-start items-start gap-0.5">
                    {step.description.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight"
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Live Link or Details Link */}
                  {step.liveLink && (
                    <a
                      href={step.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 group cursor-pointer flex-shrink-0"
                    >
                      <span className="text-gray-900 text-sm sm:text-base font-normal underline font-inter leading-snug tracking-tight group-hover:text-gray-600 whitespace-nowrap">
                        Live Link
                      </span>
                      <img
                        src="/linkarrow.png"
                        alt="External link"
                        className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
                      />
                    </a>
                  )}

                  {step.detailsLink && (
                    <a
                      href={step.detailsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 group cursor-pointer flex-shrink-0"
                    >
                      <span className="text-gray-900 text-sm sm:text-base font-normal underline font-inter leading-snug tracking-tight group-hover:text-gray-600 whitespace-nowrap">
                        Get more details here
                      </span>
                      <img
                        src="/linkarrow.png"
                        alt="External link"
                        className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
                      />
                    </a>
                  )}
                </div>

                {/* Project Image */}
                {step.image && (
                  <div className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden mt-4 sm:mt-6">
                    <img
                      className="w-full h-auto rounded-xl sm:rounded-2xl"
                      src={step.image}
                      alt={step.alt}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer CTA */}
      <div className="flex justify-between items-center px-5 py-4 border-t border-gray-200 w-full">
        <div className="w-96 justify-center text-black">
          <span className="text-gray-500 text-2xl font-semibold font-inter uppercase leading-7">
            👀Checkout more of my
            <br />
          </span>
          <span className="text-gray-500 text-3xl font-normal font-jaro uppercase leading-7">
            Web3{" "}
          </span>
          <span className="text-gray-500 text-2xl font-semibold font-inter uppercase leading-7">
            Product Designs
          </span>
        </div>

        <Link href="/project">
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
