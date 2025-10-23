"use client";

import React, { useState } from "react";

import {
  FaGoogle,
  FaYahoo,
  FaMicrosoft,
  FaApple,
  FaEnvelope,
} from "react-icons/fa";

// Email handler component with user choice modal
const EmailHandler = ({ email = "arjitkaurarora8@gmail.com", children }) => {
  const [showEmailChoice, setShowEmailChoice] = useState(false);

  const emailServices = {
    gmail: {
      name: "Gmail",
      url: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      icon: <FaGoogle className="text-red-500 text-xl" />,
    },
    yahoo: {
      name: "Yahoo Mail",
      url: `https://compose.mail.yahoo.com/?to=${email}`,
      icon: <FaYahoo className="text-purple-600 text-xl" />,
    },
    outlook: {
      name: "Outlook",
      url: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}`,
      icon: <FaMicrosoft className="text-blue-600 text-xl" />,
    },
    icloud: {
      name: "iCloud Mail",
      url: `https://www.icloud.com/mail/`,
      icon: <FaApple className="text-gray-700 text-xl" />,
    },
    aol: {
      name: "AOL Mail",
      url: `https://mail.aol.com/webmail-std/en-us/suite`,
      icon: <FaEnvelope className="text-red-600 text-xl" />,
    },
  };

  const detectAndOpenEmail = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const currentUrl = window.location.href.toLowerCase();

    // Auto-detection logic
    let detectedProvider = null;

    if (currentUrl.includes("gmail") || userAgent.includes("chrome")) {
      detectedProvider = "gmail";
    } else if (currentUrl.includes("yahoo")) {
      detectedProvider = "yahoo";
    } else if (
      currentUrl.includes("outlook") ||
      currentUrl.includes("hotmail")
    ) {
      detectedProvider = "outlook";
    } else if (userAgent.includes("safari") && userAgent.includes("mac")) {
      detectedProvider = "icloud";
    } else if (currentUrl.includes("aol")) {
      detectedProvider = "aol";
    }

    // Check saved preference
    const savedProvider = localStorage.getItem("preferredEmailProvider");
    if (savedProvider && emailServices[savedProvider]) {
      detectedProvider = savedProvider;
    }

    if (detectedProvider) {
      openEmailService(detectedProvider);
    } else {
      // Show choice modal if can't detect
      setShowEmailChoice(true);
    }
  };

  const openEmailService = (provider) => {
    try {
      window.open(emailServices[provider].url, "_blank");
      localStorage.setItem("preferredEmailProvider", provider);
      setShowEmailChoice(false);
    } catch (error) {
      // Fallback to mailto
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <>
      <button
        onClick={detectAndOpenEmail}
        className="text-left text-base text-amber-800 hover:text-amber-900 transition-all duration-300 ease-out cursor-pointer bg-transparent border-none p-0 font-inherit"
      >
        {children || email}
      </button>

      {/* Email Choice Modal */}
      {showEmailChoice && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Choose your email service
            </h3>
            <div className="space-y-3">
              {Object.entries(emailServices).map(([key, service]) => (
                <button
                  key={key}
                  onClick={() => openEmailService(key)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
                >
                  <span className="text-2xl">{service.icon}</span>
                  <span className="font-medium">{service.name}</span>
                </button>
              ))}
              <button
                onClick={() => (window.location.href = `mailto:${email}`)}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <span className="text-2xl">📧</span>
                <span className="font-medium">Default Mail App</span>
              </button>
            </div>
            <button
              onClick={() => setShowEmailChoice(false)}
              className="mt-4 w-full py-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

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
      className="px-4 sm:px-6 pt-8 md:pt-16 lg:pt-22 scroll-mt-24 "
    >
      <div className="bg-gradient-to-b from-amber-800 via-amber-800/50 to-transparent max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white items-center rounded-2xl px-6 md:px-10 pt-10 lg:pt-12 overflow-hidden max-w-full mx-auto">
          {/* Left Content */}
          <div className="flex flex-col justify-start items-start">
            {/* Heading */}
            <h2 className="text-stone-900 text-xl sm:text-3xl font-semibold leading-9">
              Hi, I'm Arjit.
            </h2>
            <p className="text-neutral-500 text-base leading-7 tracking-tight pr-10 pt-5">
              I'm a Product & Design Leader with{" "}
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
              If you're a founder or team looking for a partner who can take
              your product from concept to scale blending product thinking with
              strong design execution,{" "}
              <span className="font-medium text-amber-800">let's talk.</span>
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-1.5 pt-12">
              {/* Updated email link with EmailHandler */}
              <EmailHandler email="arjitkaurarora8@gmail.com">
                arjitkaurarora8@gmail.com
              </EmailHandler>

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
          <div className="flex justify-end items-center">
            <img
              src="/about.png"
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
