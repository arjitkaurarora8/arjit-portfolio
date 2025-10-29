"use client";

import React, { useState } from "react";

import Button from "../ui/Button";
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
        className="text-left text-base text-gray-900 hover:text-gray-600 transition-all duration-300 ease-out cursor-pointer bg-transparent border-none p-0 font-inherit"
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
  { name: "X", href: "https://x.com/arjitkaurarora" },
  { name: "Instagram", href: "https://www.instagram.com/architect.arjit/" },
  { name: "Linkedin", href: "https://www.linkedin.com/in/arjitkaurarora/" },
  { name: "Behance", href: "https://www.behance.net/arjitkaurarora" },
];

function Footer() {
  const [copied, setCopied] = useState(false);

  // const handleCopy = () => {
  //   navigator.clipboard.writeText("7018537372"); // number copy
  //   setCopied(true);

  //   // Reset back after short delay
  //   setTimeout(() => setCopied(false), 200);
  // };
  const handleCopy = () => {
    navigator.clipboard.writeText("7018537372"); // number copy
    setCopied(true);

    // Reset after 1.5s instead of 0.2s
    setTimeout(() => setCopied(false), 400);
  };

  const handleEmailClick = (e) => {
    e.preventDefault();

    const email = "arjitkaurarora8@gmail.com";
    const subject = "";
    const body = "";

    // Method: Opening Gmail directly if available
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Method 2: Standard mailto as fallback
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Checking if user likely uses Gmail
    const userAgent = navigator.userAgent.toLowerCase();
    const isGoogleUser =
      userAgent.includes("chrome") || window.location.href.includes("gmail");

    if (isGoogleUser) {
      // Try Gmail web interface first
      window.open(gmailUrl, "_blank");
    } else {
      // Use standard mailto
      window.location.href = mailtoUrl;
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-white border-t border-gray-200">
      {/* Hero Text */}
      <div className="text-left sm:text-left">
        <div className="w-96 justify-center text-gray-500 text-2xl font-semibold font-inter uppercase leading-7">
          🎯 Turn Your Product Idea Into a Market Hit.
        </div>
      </div>

      <div className="text-left sm:text-left pt-3">
        <h2 className="text-gray-900 text-4xl sm:text-6xl font-normal font-inter uppercase leading-tight sm:leading-[60px] max-w-xs sm:max-w-md">
          Ready when <br /> you are.
        </h2>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <Button
          text="Book 1:1 strategy session"
          size="lg"
          className="my-6 sm:my-10"
          // textClassName="px-8 sm:px-20" // responsive padding
        />
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full pt-8 sm:pt-20">
        <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-0">
          {/* Left Section - Sharing Experiences */}
          <div className="flex flex-col gap-2 order-1 sm:order-1">
            <span className="text-gray-500 text-base font-inter">
              Sharing Experiences
            </span>

            <ul className="space-y-1 text-sm">
              <a
                href="https://www.instagram.com/waspcassini/"
                className="flex flex-row gap-2 items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-900 hover:text-gray-600 text-base">
                  Travel
                </span>
                <span>
                  <img
                    src="./streamline-plump-color_world.svg"
                    alt="streamline-plump"
                    width={23}
                  />
                </span>
              </a>
              <a
                href="https://tinyurl.com/YourLocalGuide"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-2 items-center"
              >
                <span className="text-gray-900 hover:text-gray-600 text-base">
                  Your Local Guide
                </span>
                <span>
                  <img
                    src="ri_guide-line.svg"
                    alt="arrow-guide-line"
                    width={20}
                  />
                </span>
              </a>
              <li className="text-gray-400 font-inter pt-4 sm:pt-6 text-base">
                © 2025 <span>Arjit Kaur Arora</span>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact & Socials */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-end gap-8 sm:gap-16 order-2 sm:order-2">
            {/* Contact */}
            <div className="flex flex-col items-start sm:items-end gap-2">
              <span className="text-gray-500 text-base font-inter">
                Contact
              </span>

              <ul className="space-y-1 text-sm text-left sm:text-right">
                <li className="flex items-center gap-1 group cursor-pointer">
                  <EmailHandler email="arjitkaurarora8@gmail.com">
                    arjitkaurarora8@gmail.com
                  </EmailHandler>
                  <img
                    src="/linkarrow.svg"
                    alt="External link"
                    className="w-5 h-5 group-hover:scale-120 transition-transform duration-300"
                  />
                </li>

                <li
                  className="w-full flex justify-end gap-1"
                  // className="flex items-center gap-1 group cursor-pointer justify-start bg-red-300 md:justify-end"
                >
                  <div className="text-base transition-all duration-300">
                    <span className="text-gray-400">(+91)</span>
                    <span className="text-gray-900">70185-37372</span>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="relative transition-transform duration-150 active:scale-90 flex items-center cursor-pointer"
                  >
                    <img
                      src="./copy.svg"
                      alt="Copy img"
                      className="w-5 h-5 cursor-pointer"
                    />

                    {/* Copied Tooltip */}
                    {copied && (
                      <span className="absolute top-5 right-0 text-sm text-gray-400 px-2 py-0.5 animate-fadeInOut">
                        copied!
                      </span>
                    )}
                    {/* {copied && (
                      <span className="absolute -top-5 right-0 text-sm text-black bg-gray-100 rounded px-2 py-0.5 shadow-sm animate-fadeInOut">
                        Copied!
                      </span>
                    )} */}
                  </button>
                </li>

                <li className="text-gray-400 font-normal text-base pt-4 sm:pt-6">
                  Made in IN<span className="font-medium">(DIA)</span>TER{" "}
                  <span>💌</span>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className=" flex flex-row justify-between gap-10 md:gap-16">
              <div className="flex flex-col items-start sm:items-end gap-1">
                <span className="text-gray-500 text-base font-inter">
                  Socials
                </span>
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 group cursor-pointer"
                  >
                    <span className="text-gray-900 text-base group-hover:text-gray-600 transition-transform duration-300">
                      {social.name}
                    </span>
                    <img
                      src="/linkarrow.svg"
                      alt="External link"
                      className="w-5 h-5 group-hover:scale-120 transition-transform duration-300"
                    />
                  </a>
                ))}
              </div>

              <video
                src="/tv-background.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-48 h-auto rounded-lg"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
