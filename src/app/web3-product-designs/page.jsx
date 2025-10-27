import React from "react";
import Navbar from "@/component/layout/Navbar";
import Link from "next/link";

function ProjectShowcase() {
  const processSteps = [
    {
      title: "NFTFN.xyz",
      icon: "/nftfn-xyx.svg",
      size: "w-350px md:w-[500px]",
      subtitle: "**Simplifying complex DeFi data for traders.**",
      liveLink: "https://nftfn.xyz", // replace with actual link
      description: [
        "> Designed a multi-asset trading dashboard for NFT futures and options.",
        "> Integrated live market analytics, order books, and wallet connectivity.",
        "> Focused on dark mode accessibility and data visualization for quick insights.",
        "> Delivered both web and mobile responsive layouts for traders.",
      ],
      image: "/web3-1.png",
      alt: "NFTFN.xyz dashboard",
    },
    {
      title: "Cryptoweekly",
      icon: "/crypto-weekly.svg",
      size: "w-90px md:w-[100px]",
      subtitle: "**Making crypto news more human and shareable.**",
      liveLink: "https://cryptoweekly.io",
      description: [
        "> Designed Web3-native media portal featuring trends, funding updates, and community discussions.",
        "> Created a visual-first layout that enhances content discovery and credibility.",
        "> Focused on clean typography, modular grid layouts, and responsive storytelling.",
      ],
      image: "/web3-2.png",
      alt: "Cryptoweekly platform",
    },
    {
      title: "Terablock",
      icon: "/terablock.svg",
      size: "w-100px md:w-[120px]",
      subtitle: "**Automating smart crypto trades with simplicity.**",
      liveLink: "https://terablock.io",
      description: [
        "> Reimagined trade automation dashboard with multi-chain wallet integrations.",
        "> Created step-by-step flow for token transfers and swap management.",
        "> Prioritized error prevention, confirmation layers, and transaction feedback loops.",
      ],
      image: "/web3-3.png",
      alt: "Terablock dashboard",
    },
    {
      title: "EVM.ink",
      icon: "/evm.png",
      subtitle: "**Turning blockchain data into creator-friendly insights.**",
      liveLink: "https://evm.ink",
      description: [
        "> Designed creator dashboards with NFT performance metrics, ownership history, and wallet tracking.",
        "> Unified dark theme aesthetic with emphasis on performance graphs and collection analytics.",
        "> Supported wallet-based login and personalized portfolio overviews.",
      ],
      image: "/web3-4.png",
      alt: "EVM.ink dashboard",
    },
    {
      title: "Crypto Quest App",
      icon: "/crypto-quest-app.svg",
      size: "w-150px md:w-[170px]",
      subtitle: "**Learning crypto should feel like playing a game.**",
      liveLink: "https://cryptoquest.app",
      description: [
        "> Created a mobile-first experience merging crypto education with gamified rewards.",
        "> Users complete quests to earn tokens, learn trading basics, and level up their profile.",
        "> Designed avatar-based progression system for engagement and retention.",
      ],
      image: "/web3-5.png",
      alt: "Crypto Quest App",
    },
    {
      title: "Derec.io",
      icon: "/derec.svg",
      size: "w-120px md:w-[140px]",
      subtitle: "**Redefining how professionals connect in Web3.**",
      detailsLink: "https://derec.io/details",
      description: [
        "> Built recruiter and job seeker dashboards with wallet verification and scoring.",
        "> Simplified onchain activity visualization for skill validation and hiring.",
        "> Integrated AI-powered resume builder using wallet interactions.",
      ],
      image: "/web3-6.png",
      alt: "Derec.io platform",
    },
  ];

  return (
    <>
      <Navbar showLinks={false} />

      <div className="px-4 sm:px-6 pb-20 pt-8.5 md:pt-16.5 flex flex-col overflow-hidden">
        <div className="flex flex-col gap-4 overflow-hidden">
          {/* Header Section */}
          <div className="inline-flex flex-col gap-4 md:gap-5">
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
              <div className="flex md:flex-row flex-col md:gap-3 sm:gap-0 justify-between items-start md:items-center pt-1 md:pt-2">
                <div className="rounded-lg outline-[2.62px] mb-2 sm:mb-2.5 outline-sky-50 px-2 md:px-3.5 py-1.5 md:py-2.5 inline-flex items-center justify-center">
                  <div className="text-sky-500 text-xs font-semibold font-inter leading-tight tracking-wide whitespace-nowrap">
                    WEB3 Dashboards & Mobile Apps
                  </div>
                </div>
                <div>
                  <img
                    src="./web3.svg"
                    alt="web3 image"
                    className="w-[350px] md:w-[550px]"
                  />
                </div>
              </div>

              <h1 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter mt-4 md:mt-1">
                WEB3 Product Designs
              </h1>

              <p className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight max-w-xl pt-2 sm:mt-4">
                Designing intuitive, data-rich experiences for the decentralized
                world.
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
                    2021-2025
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
              src="/web3-hero.png"
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
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter leading-tight">
                      {step.title}
                    </h3>
                    {step.icon && (
                      <img
                        src={step.icon}
                        alt={`${step.title} icon`}
                        // className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                        className={`${
                          step.size ||
                          "w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                        } object-contain`}
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
                <div className="w-full flex flex-col sm:flex-row justify-between items-end sm:pt-0.5">
                  <div className="max-w-full sm:max-w-[540px] flex flex-col justify-start items-start gap-0.5">
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
                        Live website
                      </span>
                      <img
                        src="/linkarrow.svg"
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
                        src="/linkarrow.svg"
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
