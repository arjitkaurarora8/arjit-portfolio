import React from "react";

function Pitch() {
  return (
    <div className="px-4 sm:px-6">
      <div className="bg-zinc-100 px-5 py-14 md:py-20 xl:py-24 flex justify-center items-center">
        <div className="max-w-[620px] w-full px-5 pb-10 sm:p-10 relative bg-white rounded-lg shadow-[0px_12px_24px_-8px_rgba(0,0,0,0.10)] overflow-hidden">
          {/* Red Wax Seal */}
          <div className="absolute -top-2 right-10 w-20 h-20">
            <img src="/seal.png" alt="" />
          </div>

          <div className="space-y-3">
            {/* Header Section */}
            <div className="space-y-2">
              <div className="text-neutral-500 text-lg sm:text-xl font-normal">
                Dear Founder…
              </div>
              <h1 className="text-black text-3xl sm:text-4xl font-medium leading-[42px] sm:leading-[52px]">
                My Story or Why I Do This…
              </h1>
            </div>

            {/* Introduction Text */}
            <div className="space-y-4 sm:space-y-7 opacity-80">
              <p className="text-black text-sm sm:text-base font-semibold leading-6.5 sm:leading-7">
                I've always been fascinated by how good design can make
                complicated things feel simple.
              </p>
              <p className="text-black text-sm sm:text-base font-normal leading-6.5 sm:leading-7">
                I've seen too many brilliant founders stuck between ideas and
                execution{" "}
                <span className="text-red-800 font-semibold">
                  juggling vision, users, and product chaos.
                </span>
              </p>
              <p>
                <span className="font-semibold text-black pt-10">
                  That's why I bridge all three.
                </span>
              </p>
              <p className="text-black text-sm sm:text-base font-normal leading-6.5 sm:leading-7">
                From building GPT-powered tools for Walmart sellers to leading a
                product that raised funding — I've spent my career making
                complex things feel simple, functional, and scalable.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-black/10"></div>

            {/* Your Problem Section - FIXED */}
            <div className="space-y-3 sm:space-y-4 pt-2.5">
              <h2 className="text-gray-400 text-xl sm:text-2xl font-semibold leading-loose">
                Your Problem
              </h2>

              <div className="space-y-2 sm:space-y-4 opacity-80 pb-4">
                <div className="flex items-start gap-2">
                  <span className="text-black text-base sm:text-lg font-normal leading-6.5 sm:leading-7 flex-shrink-0">
                    &gt;<span className="text-red-600">/</span>
                  </span>
                  <p className="text-black text-sm sm:text-base font-normal leading-6.5 sm:leading-7">
                    You have the vision, but not the bandwidth to execute it
                    fast.
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-black text-base sm:text-lg font-normal leading-6.5 sm:leading-7 flex-shrink-0">
                    &gt;<span className="text-red-600">/</span>
                  </span>
                  <p className="text-black text-sm sm:text-base font-normal leading-6.5 sm:leading-7">
                    You{" "}
                    <span className="font-medium">need a product partner</span>{" "}
                    who gets business, tech, and users alike.
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-black text-base sm:text-lg font-normal leading-6.5 sm:leading-7 flex-shrink-0">
                    &gt;<span className="text-red-600">/</span>
                  </span>
                  <p className="text-black text-sm sm:text-base font-normal leading-6.5 sm:leading-7">
                    You've outgrown "just design help". You need product
                    leadership.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-black/10"></div>

            {/* Your Solution Section - FIXED */}
            <div className="space-y-3 sm:space-y-4 pt-2.5">
              <h2 className="text-gray-400 text-xl sm:text-2xl font-semibold leading-loose">
                Your Solution
              </h2>

              <div className="space-y-6 sm:space-y-8 opacity-80">
                <div className="flex items-start gap-2">
                  <span className="text-black text-base sm:text-lg font-normal leading-6.5 sm:leading-7 flex-shrink-0">
                    &gt;<span className="text-emerald-600">/</span>
                  </span>
                  <p className="text-black text-sm sm:text-base font-normal leading-6.5 sm:leading-7">
                    I work with you like a co-founder, aligning design, dev, and
                    growth.
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-black text-base sm:text-lg font-normal leading-6.5 sm:leading-7 flex-shrink-0">
                    &gt;<span className="text-emerald-600">/</span>
                  </span>
                  <p className="text-black text-sm sm:text-base font-normal leading-6.5 sm:leading-7">
                    I create products that convert, delight, and scale.
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-black text-base sm:text-lg font-normal leading-6.5 sm:leading-7 flex-shrink-0">
                    &gt;<span className="text-emerald-600">/</span>
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-emerald-400 leading-6.5 sm:leading-7">
                    My focus: real traction, not just pretty pixels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pitch;
