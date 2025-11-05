"use client";

import React from "react";
import Button from "../ui/Button";
import SocialProofBar from "./SocialProof";
import TelegramContactButton from "../ui/TelegramContactButton";

function Hero() {
  return (
    <section className="pt-10 md:pt-16.5 px-4 sm:px-6.5 bg-white">
      <div className="flex flex-col gap-4">
        <div className="w-full ">
          <div className="rounded-md sm:rounded-lg outline-[2.62px] outline-sky-50 px-2 py-1.5 sm:px-3.5 sm:py-2.5 inline-flex items-center justify-center">
            <div className="text-sky-500 text-xs font-normal sm:font-semibold font-inter leading-tight tracking-wide whitespace-nowrap">
              Brands: Consistently drive 10% + increase in ARPU
            </div>
          </div>
        </div>

        <h1 className="animate-lift-fade-in motion-reduce:animate-fade-in [--offset:10px] [animation-delay:100ms] [animation-duration:0.5s] [animation-fill-mode:both] text-2xl md:text-4xl font-semibold md:leading-12">
          <span className="text-gray-400">Helping </span>
          <span className="text-gray-900">Founders </span>
          <span className="text-gray-400">turn ideas into </span>
          {/* <span className="text-gray-900">turn iteas into </span> */}
          <br className="hidden sm:block" />
          {/* <span className="text-gray-400">that </span> */}
          <span className="text-gray-900">Products Users Love</span>
        </h1>

        <div className="w-full sm:w-[539px] flex">
          <p className="animate-lift-fade-in motion-reduce:animate-fade-in [--offset:10px] [animation-delay:150ms] [animation-duration:0.8s] [animation-fill-mode:both] text-gray-400 text-sm sm:text-base font-inter font-normal leading-snug tracking-tight">
            Want a partner who blends strategy with design to turn early-stage
            chaos into clarity? I help startups build products that look good,
            work better, and scale fast.
            {/* <span className="font-semibold">Let's talk.</span> */}
          </p>
        </div>
      </div>
      <div className="flex mt-8 mb-2 sm:my-10 items-center gap-3 animate-lift-fade-in motion-reduce:animate-fade-in [--offset:10px] [animation-delay:300ms] [animation-duration:1s] [animation-fill-mode:both]">
        <Button text="Book 1:1 Strategy Session" size="md" />
        <TelegramContactButton
          text="Chat"
          size="md"
          onClick={() => window.open("https://t.me/arjitkaurarora", "_blank")}
        />
      </div>

      <SocialProofBar />
    </section>
  );
}

export default Hero;
