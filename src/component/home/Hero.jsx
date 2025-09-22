"use client";

import React from "react";
import Button from "../ui/Button";
import SocialProofBar from "./SocialProof";
import TelegramContactButton from "../ui/TelegramContactButton";

function Hero() {
  return (
    <section className="pt-12 sm:pt-25 px-4 sm:px-6 bg-white">
      <div className="flex flex-col">
        <h1 className="animate-lift-fade-in motion-reduce:animate-fade-in [--offset:10px] [animation-delay:100ms] [animation-duration:0.5s] [animation-fill-mode:both] text-2xl md:text-4xl font-semibold md:leading-14">
          <span className="text-gray-400">
            Designing seamless products with best{" "}
            <br className="hidden sm:block" />
          </span>
          <span className="text-gray-900">User Experiences </span>
          <span className="text-gray-400">for </span>
          <span className="text-gray-900">Web & Mobile</span>
          <span className="text-gray-400">.</span>
        </h1>

        <div className="w-full sm:w-[539px] flex mt-4 sm:mt-0">
          <p className="animate-lift-fade-in motion-reduce:animate-fade-in [--offset:10px] [animation-delay:150ms] [animation-duration:0.8s] [animation-fill-mode:both] text-gray-400 text-sm sm:text-base font-inter font-normal leading-snug tracking-tight">
            You're a founder or startup looking for a partner to shape products
            that users love and investors trust? Let's talk.
          </p>
        </div>
      </div>
      <div className="flex my-8 sm:my-10 items-center gap-3 animate-lift-fade-in motion-reduce:animate-fade-in [--offset:10px] [animation-delay:300ms] [animation-duration:1s] [animation-fill-mode:both]">
        <Button
          text="Book a call"
          size="md"
          onClick={() =>
            window.open(
              "https://cal.com/arjit-kaur-arora-nk3ufj/introductioncall",
              "_blank"
            )
          }
        />
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
