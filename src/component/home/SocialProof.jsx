"use client";
import Image from "next/image";

const logos = [
  { id: 1, src: "/tradeprobe.png", alt: "Tradeprobe", width: 200, height: 50 },
  { id: 2, src: "/derec.png", alt: "Derec", width: 130, height: 40 },
  { id: 3, src: "/creaitorAi.png", alt: "Creaitor Ai", width: 210, height: 70 },
  { id: 4, src: "/trillisent.png", alt: "Trillisent", width: 180, height: 60 },
  {
    id: 5,
    src: "/contentHubGPT.png",
    alt: "Content Hub GPT",
    width: 270,
    height: 80,
  },
];

export default function SocialProofBar() {
  return (
    <div className="relative w-full overflow-hidden pt-5 pb-20 px-6">
      {/* translucent overlay on top */}
      <div className=" pointer-events-none" />

      {/* blur overlays */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

      {/* scrolling container */}
      <div className="flex animate-scroll gap-16">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-3 flex-shrink-0 opacity-70 hover:opacity-100 transition"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
