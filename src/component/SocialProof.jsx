"use client";
import Image from "next/image";

const logos = [
  { id: 1, src: "/wander.svg", alt: "Wander" },
  { id: 2, src: "/petspot.svg", alt: "Petspot" },
  { id: 3, src: "/listener.svg", alt: "Listener.fm" },
  {
    id: 4,
    type: "text",
    src: "/chapterone.svg",
    label: "Chapter One",
    alt: "Chapter One",
  },
  { id: 5, src: "/lifelogs.svg", alt: "Lifelogs" },
  { id: 6, src: "/hngr.svg", alt: "HNGR" },
];

export default function SocialProofBar() {
  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* blur overlays */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

      {/* scrolling container */}
      <div className="flex animate-scroll gap-16">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-3 flex-shrink-0 opacity-70 hover:opacity-100 transition"
          >
            {logo.type === "text" ? (
              <>
                <Image src={logo.src} alt={logo.alt} width={36} height={36} />
                <span className="text-lg text-gray-800 font-medium">
                  {logo.label}
                </span>
              </>
            ) : (
              <Image src={logo.src} alt={logo.alt} width={160} height={50} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
