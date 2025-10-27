import React from "react";
import Navbar from "@/component/layout/Navbar";
import Link from "next/link";

function ProjectShowcase() {
  const processSteps = [
    {
      number: "01",
      title: "PROBLEM",
      subtitle:
        "In the growing Web3 landscape, **trust and transparency were major barriers in professional networking and recruitment.**</br>While traditional networks like LinkedIn relied on self-reported data, onchain professionals lacked verified credibility",
      //   subtitleBold: "Walmart Seller were spending hours on repetitive tasks.",
      keySection: "Key Challenges",

      description: [
        ">\\ No system to verify onchain activity or skill-based contributions.",
        "🧩 Recruiters couldn’t assess candidate reliability in decentralized environments.",
        "🔍 Professionals lacked a unified identity connecting wallet actions, DAOs, and achievements.",
        "💰 Web3 users had no incentive layer tied to their contributions or proof of work.",
      ],
      images: [
        { src: "/derec-1.png", alt: "Derec img" },
        { src: "/derec-2.png", alt: "Derec-img" },
      ],
      imageLayout: "stacked",
    },
    {
      number: "02",
      title: "JOURNEY",
      subtitle:
        "Derec started as an idea incubated under 1DotMedia to solve “the LinkedIn problem of Web3.”**The goal was to validate professional credibility onchain while enabling decentralized hiring and collaboration.**",
      keySection: "What I Did",
      description: [
        "> Conducted **market validation** via Web3 communities, analyzing user behaviors in DAOs and freelance ecosystems.",
        "> Created **user personas:** Recruiter, Web3 Professional, and DAO Admin.",
        "> Mapped existing pain points. Lack of proof-of-work, fragmented portfolio identities, and unverified job history.",
        "> Collaborated with developers to design wallet-based authentication and activity scoring logic.",
        "> Defined the product’s **scoring engine.** Translating wallet interactions into reputation metrics.",
      ],
      images: [
        { src: "/derec-3.png", alt: "derec-img 3" },
        { src: "/derec-4.png", alt: "derec-img 4" },
      ],
      imageLayout: "stacked",
    },
    {
      number: "03",
      title: "SOLUTION",
      subtitle:
        "Derec became a Web3-native professional networking platform powered by a scoring and reputation engine.",
      keySection: "Core Features Delivered",
      sectionColor: "sky",

      description: [
        ">\\ **Onchain Reputation Score:** Aggregates activity across protocols and DAOs to create a verified professional score.",
        ">\\ **Wallet-based Identity:** Users sign in via wallet (Privy). No email or third-party dependency.",
        ">\\ **Stake-to-Recruit Model:** Employers stake tokens to ensure commitment and fairness in hiring.",
        ">\\ **AI-Powered Professional Profiles:** Auto-generate insights from users’ transaction histories and contributions.",
        ">\\ **Reward & Incentive Engine:** Users earn reputation tokens by contributing to verified communities.",
        ">\\ **Web3 Resume:** Combines portfolio projects, wallet activity, and reputation into a single verified identity.",
        ">\\ **Network Layer:** Engage with professionals, share DAO experience, and collaborate securely onchain.",
      ],
      images: [
        { src: "/derec-5.png", alt: "derec-img 5" },
        { src: "/derec-6.png", alt: "derec-img 6" },
      ],
      //   note: "After getting acquired was revamped to GSPANN's Design Language",
      imageLayout: "stacked",
    },
    {
      number: "04",
      title: "RESULTS",
      subtitle:
        "Derec achieved significant validation during its early community testing phase and partnerships.",
      keySection: "Impact",
      sectionColor: "green",

      description: [
        ">\\ 1,000+ wallets connected within first beta testing phase.",
        "Improved recruiter confidence with verified identity checks.",
        ">\\  Average session time: 3.5 mins. Showing strong engagement with dashboard insights.",
        ">\\ Enabled early DAO pilots for skill-based bounties and verified contributions.",
        ">\\ Positioned Derec as a potential reward and incentive protocol for MiniPay and onchain projects.",
      ],

      images: [
        { src: "/derec-7.png", alt: "derec-img 7" },
        { src: "/derec-8.png", alt: "derec-img 8" },
      ],
      imageLayout: "stacked",
    },
  ];

  return (
    <>
      <Navbar showLinks={false} />

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
              <div className="flex gap-3 sm:gap-0 justify-between flex-col md:flex-row items-start md:items-center">
                <div className="w-full mb-2.5">
                  <div className="rounded-lg outline-[2.62px] outline-sky-50 px-3.5 py-2.5 inline-flex items-center justify-center">
                    <div className="text-sky-500 text-xs font-semibold font-inter leading-tight tracking-wide whitespace-nowrap">
                      Web3 Dashboard + Scoring Engine
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="./derec.svg"
                    alt="content-hub-gpt image"
                    className="w-[150px] md:w-[400px]"
                  />
                </div>
              </div>

              <h1 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold font-inter mt-2 md:mt-1">
                Derec/1DotMedia
              </h1>

              <p className="text-gray-900 text-sm sm:text-base font-normal font-inter leading-snug tracking-tight max-w-xl pt-2 sm:mt-4">
                On-chain actions were invisible — users felt no progress. Most
                users don’t realize how much value their on-chain actions
                generate — so they stop engaging.
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
                    13 months
                  </span>
                </div>
              </div>

              {/* <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:gap-8 xl:gap-14"> */}
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                  Tools
                </span>
                <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                  Figma, Notion
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-gray-500 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                  Role
                </span>
                <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                  Sr. UX Designer & Consultant
                </span>
              </div>
              {/* </div> */}

              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-8 sm:gap-20">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Industry
                  </span>
                  <span className="text-gray-900 text-sm md:text-base font-normal font-inter leading-snug tracking-tight">
                    Web3 & Recruitment
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
              className="w-full h-auto rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 py-[1.2px]"
              src="/derec-hero.png"
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
                                    <span className="text-sky-500 font-normal">
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
                                <span className="text-green-500 font-normal">
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
                        step.number === "03"
                          ? "bg-gradient-to-r from-blue-100 to-purple-100 py-[1.2px] p-4 sm:p-8"
                          : ""
                      }`}
                    >
                      <img
                        className="w-full h-auto rounded-xl sm:rounded-2xl"
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
                    <div className="w-full flex flex-col gap-4 mt-7.5 sm:mt-9.5  lg:mt-10">
                      {step.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="w-full relative bg-gradient-to-r from-blue-100 to-purple-100 py-[1.2px] rounded-xl sm:rounded-2xl overflow-hidden"
                        >
                          <img
                            className="w-full h-auto  rounded-xl sm:rounded-2xl"
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
