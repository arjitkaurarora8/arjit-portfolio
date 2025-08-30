import React from "react";
import Button from "./Button";
import SocialProofBar from "./SocialProof";

function Hero() {
  return (
    <section className="pt-25 px-6 bg-white">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-4xl font-semibold md:leading-14">
          <span className="text-gray-500">
            Designing seamless products with best <br />
          </span>
          <span className="text-gray-900">User Experiences </span>
          <span className="text-gray-500">for </span>
          <span className="text-gray-900">Web & Mobile</span>
          <span className="text-gray-500">.</span>
        </h1>

        <div className="w-[539px] flex">
          <p className="text-gray-500 text-base font-inter font-normal leading-snug tracking-tight">
            You’re a founder or startup looking for a partner to shape products
            that users love and investors trust? Let’s talk.
          </p>
        </div>
      </div>

      <Button
        text="Book a call here"
        size="md"
        className="my-10"
        // textClassName="px-20" //extra padding on text only
      />

      <SocialProofBar />
    </section>
  );
}

export default Hero;
