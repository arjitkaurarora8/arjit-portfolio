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
  { id: 6, src: "/zorang.png", alt: "Zorang", width: 130, height: 40 },
  {
    id: 7,
    src: "/germanDrishty.png",
    alt: "German Drishty",
    width: 130,
    height: 40,
  },
  { id: 8, src: "/modishcard.png", alt: "Modish Card", width: 50, height: 20 },
  {
    id: 9,
    src: "/onferenceTV.png",
    alt: "OnferenceTV",
    width: 130,
    height: 40,
  },
  { id: 10, src: "/nftfn.png", alt: "NFTFN", width: 130, height: 40 },
  { id: 11, src: "/eSource.png", alt: "eSource", width: 130, height: 40 },
  { id: 12, src: "/etf.png", alt: "ETF", width: 130, height: 40 },
  { id: 13, src: "/evm.png", alt: "EVM", width: 50, height: 20 },
  { id: 14, src: "/nictp.png", alt: "NICTP", width: 130, height: 40 },
  { id: 15, src: "/terablock.png", alt: "Terablock", width: 130, height: 40 },
  { id: 16, src: "/cars.png", alt: "Cars", width: 130, height: 40 },
  {
    id: 17,
    src: "/cryptoWeekly.png",
    alt: "Crypto Weekly",
    width: 130,
    height: 40,
  },
  { id: 18, src: "/crikverse.png", alt: "Crikverse", width: 130, height: 40 },
  { id: 19, src: "/updeed.png", alt: "Updeed", width: 130, height: 40 },
];

export default function SocialProofBar() {
  return (
    <div className="relative w-full overflow-hidden pt-5 pb-20 animate-lift-fade-in motion-reduce:animate-fade-in [--offset:10px] [animation-delay:400ms] [animation-duration:1s] [animation-fill-mode:both]">
      {/* Seamless scrolling container - duplicate logos 3 times for smooth infinite scroll */}
      <div className="flex animate-infinite-scroll gap-12 whitespace-nowrap">
        {/* First set */}
        {logos.map((logo, index) => (
          <div
            key={`set1-${index}`}
            className="flex items-center justify-center flex-shrink-0 transition-opacity duration-300 hover:opacity-100"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          </div>
        ))}

        {/* Second set for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`set2-${index}`}
            className="flex items-center justify-center flex-shrink-0 transition-opacity duration-300 hover:opacity-100"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="max-h-12 w-auto object-contain"
            />
          </div>
        ))}

        {/* Third set for extra seamless effect */}
        {logos.map((logo, index) => (
          <div
            key={`set3-${index}`}
            className="flex items-center justify-center flex-shrink-0 transition-opacity duration-300 hover:opacity-100"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="max-h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 7s linear infinite;
        }
      `}</style>
    </div>
  );
}
