import React from "react";

const socials = [
  {
    name: "X",
    href: "https://x.com/arjitkaurarora",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/waspcassini/",
  },
  {
    name: "Behance",
    href: "https://www.behance.net/arjitkaurarora",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/arjitkaurarora/",
  },
  {
    name: "Download CV",
    href: "#", // Replace with actual CV link
  },
];

function About() {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 pt-8 md:pt-16 lg:pt-20 scroll-mt-24 "
    >
      <div className="bg-gradient-to-b from-amber-800 via-amber-800/50 to-transparent max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-white rounded-2xl px-6 md:px-10 pt-10 lg:pt-12 pb-8 lg:pb-10 overflow-hidden max-w-[1440px] mx-auto">
          {/* Left Content */}
          <div className="flex flex-col justify-start items-start">
            {/* Heading */}
            <h2 className="text-stone-900 text-xl sm:text-3xl font-semibold leading-9">
              Hi, I'm Arjit.
            </h2>
            <p className="text-neutral-500 text-base leading-7 tracking-tight pr-10 pt-5">
              I’m a Product & Design Leader with{" "}
              <span className="font-medium">6+ years of experience</span>{" "}
              helping startups and teams ship{" "}
              <span className="font-medium">20+ digital products</span> across{" "}
              <span className="font-medium">
                Fintech, E-commerce, EdTech, Healthcare, and Web3.
              </span>
              Currently serving as{" "}
              <span className="font-medium">CPO at TradeProbe</span>, I drive
              product vision, design execution, and strategy — turning complex
              challenges into intuitive, scalable solutions. With a track record
              of building design systems, leading teams, and contributing to
              successful fundraising, I specialize in creating products that not
              only delight users but also deliver measurable business impact.
              <br />
              <br />
              If you’re a founder or team looking for a partner who can take
              your product from concept to scale blending product thinking with
              strong design execution,{" "}
              <span className="font-medium text-amber-800">let’s talk.</span>
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-1.5 pt-12">
              <a
                href="mailto:arjitkaurarora8@gmail.com"
                className="text-base text-amber-800 hover:text-amber-900 transition-all duration-300 ease-out cursor-pointer"
              >
                arjitkaurarora8@gmail.com
              </a>

              <div className="flex gap-4 flex-wrap">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-1 group cursor-pointer"
                    // className="group flex items-center text-gray-900 text-base group-hover:text-gray-600 transition-transform duration-300"
                  >
                    <span className="text-gray-900 text-base group-hover:text-gray-600 transition-transform duration-300">
                      {social.name}
                    </span>
                    <img
                      src="/linkarrow.png"
                      alt="link-arrow"
                      className="w-5 h-5 group-hover:scale-120 transition-transform duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-start items-center">
            <img
              src="/arjit.png"
              alt="Arjit"
              className="w-[300px] sm:w-[400px] lg:w-[530px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
