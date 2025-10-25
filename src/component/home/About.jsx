"use client";

import React, { useState } from "react";
import {
  FaGoogle,
  FaYahoo,
  FaMicrosoft,
  FaApple,
  FaEnvelope,
} from "react-icons/fa";

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

    const savedProvider = localStorage.getItem("preferredEmailProvider");
    if (savedProvider && emailServices[savedProvider]) {
      detectedProvider = savedProvider;
    }

    if (detectedProvider) {
      openEmailService(detectedProvider);
    } else {
      setShowEmailChoice(true);
    }
  };

  const openEmailService = (provider) => {
    try {
      window.open(emailServices[provider].url, "_blank");
      localStorage.setItem("preferredEmailProvider", provider);
      setShowEmailChoice(false);
    } catch (error) {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <>
      <span>
        <button
          onClick={detectAndOpenEmail}
          className="text-left text-base bg-transparent text-neutral-500 hover:text-neutral-600 transition-all duration-300 ease-out cursor-pointer border-none p-0 font-inherit"
        >
          {children || email}
        </button>
      </span>

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
    name: "X (Twitter)",
    href: "https://x.com/arjitkaurarora",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/waspcassini/",
  },
  {
    name: "Download CV",
    href: "#",
  },
];

function About() {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 pt-8 md:pt-16 lg:pt-22 scroll-mt-24"
    >
      <div className="bg-gradient-to-b from-amber-800 via-amber-800/50 to-transparent max-w-full mx-auto pt-[0.5px]">
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2 items-center 
            rounded-2xl px-6 md:px-10 pt-10 pb-6 
            overflow-hidden max-w-full mx-auto relative
            bg-white
          "
        >
          {/* Left Content */}
          <div className="flex flex-col justify-start items-start lg:pl-16 z-10">
            <h2 className="text-stone-900 text-2xl sm:text-3xl font-semibold pt-6 leading-9">
              Hi, I'm Arjit.
            </h2>

            <div className="justify-center text-neutral-500 text-base font-bold font-inter leading-6 tracking-tight">
              Fuelled by chai & curiosity
            </div>

            <div className="text-neutral-500 text-base leading-7 tracking-tight">
              <p className="pt-2 sm:pt-4">
                I'm a{" "}
                <span className="font-semibold">Product & Design Leader</span>{" "}
                with 6+ years of experience helping startups ship 20+ digital
                products across{" "}
                <span className="font-semibold">
                  Fintech, WEB3, E-commerce, EdTech, Healthcare and SaaS.
                </span>{" "}
              </p>

              <p className="pt-3 sm:pt-5">
                With a background that blends creativity and business, I've
                built and scaled cross-functional teams, design systems, and
                products that deliver measurable outcomes.
              </p>

              <p className="pt-3 sm:pt-5 font-semibold">
                I believe great products aren't just beautifully designed.
              </p>
              <p className="font-semibold">They're strategically aligned.</p>

              <p className="pt-3 sm:pt-5">
                Design isn't decoration; it's direction.
              </p>

              <p className="pt-3 sm:pt-5">
                If you're a{" "}
                <span className="font-semibold">founder or startup</span>{" "}
                looking for a partner to take your product from concept to
                scale,
                <span className="font-medium text-amber-700"> let's talk.</span>
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2 pt-5 sm:pt-7">
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
                    <span className="text-neutral-400 text-base group-hover:text-neutral-500 transition-transform duration-300">
                      {social.name}
                    </span>
                    <img
                      src="/linkarrow.svg"
                      alt="link-arrow"
                      className="w-5 h-5 group-hover:scale-120 transition-transform duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="
              flex justify-center lg:justify-end items-center mt-8 lg:mt-0 
              relative lg:absolute lg:bottom-0 lg:right-26
            "
          >
            <img
              src="/about.png"
              alt="Arjit"
              className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[435px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
