import React from "react";

function About() {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 py-8 md:py-16 lg:py-28 scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-white rounded-2xl px-6 md:px-10 pt-10 lg:pt-12 overflow-hidden max-w-[1440px] mx-auto">
        {/* Left Content */}
        <div className="flex flex-col justify-start items-start">
          {/* Heading */}
          <h2 className="text-stone-900 text-3xl font-semibold leading-9">
            Hi, I'm Arjit.
          </h2>
          <p className="text-neutral-500 text-base leading-7 tracking-tight pr-10 pt-5">
            I’m a Product & Design Leader with{" "}
            <span className="font-medium">6+ years of experience</span> helping
            startups and teams ship{" "}
            <span className="font-medium">20+ digital products</span> across{" "}
            <span className="font-medium">
              Fintech, E-commerce, EdTech, Healthcare, and Web3.
            </span>
            {/* <br /> */}
            {/* <br /> */}
            Currently serving as{" "}
            <span className="font-medium">CPO at TradeProbe</span>, I drive
            product vision, design execution, and strategy — turning complex
            challenges into intuitive, scalable solutions.
            {/* <br /> */}
            With a track record of building design systems, leading teams, and
            contributing to successful fundraising, I specialize in creating
            products that not only delight users but also deliver measurable
            business impact.
            <br />
            <br />
            If you’re a founder or team looking for a partner who can take your
            product from concept to scale blending product thinking with strong
            design execution, <span className="font-medium">let’s talk.</span>
          </p>

          {/* Contact */}
          <div className="flex flex-col gap-2 pt-12 lg:pb-10">
            <p className="text-neutral-500 text-base">
              arjitkaurarora8@gmail.com
            </p>

            <div className="flex gap-6 flex-wrap">
              <a
                href="#"
                className="group flex items-center gap-2 text-neutral-400 hover:text-neutral-600 hover:scale-105 transition"
              >
                X (Twitter)
                <img
                  src="/linkarrow.svg"
                  alt="link-arrow"
                  className="w-5 h-5 transition-transform duration-200 group-hover:scale-130"
                />
              </a>

              <a
                href="#"
                className="group flex items-center gap-2 text-neutral-400 hover:text-neutral-600 hover:scale-105  transition"
              >
                Instagram
                <img
                  src="/linkarrow.svg"
                  alt="link-arrow"
                  className="w-5 h-5 transition-transform duration-200 group-hover:scale-130"
                />
              </a>

              <a
                href="#"
                className="group flex items-center gap-2 text-neutral-400 hover:text-neutral-600 hover:scale-105  transition"
              >
                Download CV
                <img
                  src="/linkarrow.svg"
                  alt="link-arrow"
                  className="w-5 h-5 transition-transform duration-200 group-hover:scale-130"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-start items-center">
          <img
            src="/arjit.svg"
            alt="Arjit"
            className="w-[300px] sm:w-[400px] lg:w-[530px] h-auto rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
