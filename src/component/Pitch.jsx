import React from "react";

function Pitch() {
  return (
    <div className="px-4 sm:px-6 bg-zinc-100 py-24 flex justify-center items-center min-h-screen">
      <div className="max-w-[640px] w-full p-10 relative bg-white rounded-lg shadow-[0px_12px_24px_-8px_rgba(0,0,0,0.10)] overflow-hidden">
        {/* Red Wax Seal */}
        <div className="absolute -top-2 right-10 w-20 h-20">
          <img src="/seal.svg" alt="" />
          {/* <div className="w-full h-full bg-red-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">🏷️</span>
          </div> */}
        </div>

        <div className="space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
            <div className="text-neutral-500 text-xs font-normal">
              Dear Founder…
            </div>
            <h1 className="text-black text-4xl font-medium leading-[52px]">
              In a world full of innovative
              <br />
              startup ideas…
            </h1>
          </div>

          {/* Introduction Text */}
          <div className="space-y-7 opacity-80">
            <p className="text-black text-base font-normal leading-7">
              …execution matters more than ever.
            </p>
            <p className="text-black text-base font-normal leading-7">
              Startups no longer launch with rushed designs made by fly-by-night
              <br />
              designers found on Fiverr.
            </p>
            <p className="text-black text-base font-normal leading-7">
              Design is no longer nice to have - it's one of the most important
              <br />
              investments founders can make to propel their growth.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-black/10"></div>

          {/* Your Problem Section */}
          <div className="space-y-6">
            <h2 className="text-black text-2xl font-normal leading-loose">
              Your Problem
            </h2>

            <div className="space-y-7 opacity-80">
              <div className="flex items-start">
                <div className="w-6 pr-2 py-3.5 flex-shrink-0">
                  <span className="text-black text-lg font-normal leading-7">
                    •
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-black text-base font-normal leading-7">
                    You know your industry well, but you lack design and product
                    skills
                    <br />
                    to make your vision a reality.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 pr-2 py-3.5 flex-shrink-0">
                  <span className="text-black text-lg font-normal leading-7">
                    •
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-black text-base font-normal leading-7">
                    You have an innovative idea, but you have no idea how to go
                    about
                    <br />
                    turning it into an actual product.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 pr-2 flex-shrink-0">
                  <span className="text-black text-lg font-normal leading-7">
                    •
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-black text-base font-normal leading-7">
                    You lack time and resources to focus on your product's
                    design.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-black/10"></div>

          {/* Your Solution Section */}
          <div className="space-y-6">
            <h2 className="text-black text-2xl font-normal leading-loose">
              Your Solution
            </h2>

            <div className="space-y-7 opacity-80">
              <div className="flex items-start">
                <div className="w-6 pr-2 py-3.5 flex-shrink-0">
                  <span className="text-black text-lg font-normal leading-7">
                    •
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-black text-base font-normal leading-7">
                    A dedicated, experienced design partner ready to take care
                    of all
                    <br />
                    your product design needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 pr-2 py-3.5 flex-shrink-0">
                  <span className="text-black text-lg font-normal leading-7">
                    •
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-black text-base font-normal leading-7">
                    A detailed, clean product that serves your perfect customer
                    and
                    <br />
                    positions your company as a market leader.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 pr-2 py-3.5 flex-shrink-0">
                  <span className="text-black text-lg font-normal leading-7">
                    •
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-black text-base font-normal leading-7">
                    A product that maximizes the potential of your idea, drawing
                    users'
                    <br />
                    attention and appealing to investors.
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
