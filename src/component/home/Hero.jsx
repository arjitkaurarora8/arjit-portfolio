"use client";

import React from "react";
import Button from "../ui/Button";
import SocialProofBar from "./SocialProof";
import TelegramContactButton from "../ui/TelegramContactButton";

function Hero() {
  return (
    <section className="pt-12 sm:pt-17 px-4 sm:px-6 bg-white">
      <div className="flex flex-col gap-4">
        <div className="w-96 h-9 rounded-lg outline-[2.62px] flex items-center justify-center outline-sky-50">
          <div className="w-80 h-4 justify-center text-sky-500 text-xs font-semibold font-inter leading-tight tracking-wide">
            Brands: Consistently drive 10% + increase in ARPU
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
            You're a founder or startup looking for a partner to shape products
            that users love and investors trust?{" "}
            <span className="font-semibold">Let's talk.</span>
          </p>
        </div>
      </div>
      <div className="flex my-8 sm:my-10 items-center gap-3 animate-lift-fade-in motion-reduce:animate-fade-in [--offset:10px] [animation-delay:300ms] [animation-duration:1s] [animation-fill-mode:both]">
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
