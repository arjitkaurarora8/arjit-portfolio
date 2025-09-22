"use client";

import React from "react";
import Button from "../ui/Button"; // Adjust path if needed

function Footer() {
  return (
    // <div className="p-6 bg-white flex flex-col items-center gap-28">
    <div className="p-4 sm:p-6 bg-white border-t border-gray-200">
      {/* Hero Text */}{" "}
      <div className="text-left">
        <h2 className="text-gray-900 text-6xl font-normal font-inter uppercase leading-[60px] max-w-md">
          Ready when <br /> you are.
        </h2>
      </div>
      {/* CTA Button */}
      <div className="flex justify-center">
        <Button
          text="Book a call"
          size="lg"
          className="my-10"
          textClassName="px-20" // extra padding on text only
          onClick={() =>
            window.open(
              "https://cal.com/arjit-kaur-arora-nk3ufj/introductioncall",
              "_blank"
            )
          }
        />
      </div>
      {/* Footer Bottom Section */}
      <div className="w-full pt-20">
        <div className="flex items-start justify-end gap-16">
          {/* Contact */}
          <div className="flex flex-col items-end gap-2">
            <span className="text-gray-500 text-base font-inter">Contact</span>
            <ul className="space-y-2 text-sm text-right">
              <li>
                <a
                  href="mailto:arjitkaurarora8@gmail.com"
                  className="text-gray-900 text-base hover:text-gray-600 transition-all duration-300"
                >
                  arjitkaurarora8@gmail.com
                </a>
              </li>
              <li className="text-gray-900 text-base hover:text-gray-600 transition-all duration-300">
                7018537372
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-end gap-2">
            <span className="text-gray-500 text-base font-inter">Socials</span>
            {["X (Twitter)", "Instagram", "Linkedin"].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="flex items-center gap-1 group cursor-pointer"
              >
                <span className="text-gray-900 text-base group-hover:text-gray-600 transition-transform duration-300">
                  {item}
                </span>
                <img
                  src="/linkarrow.png"
                  alt="External link"
                  className="w-5 h-5 group-hover:scale-120 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="text-gray-500 text-sm font-inter">
          © 2025 <span className="text-base">Arjit Kaur Arora</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
