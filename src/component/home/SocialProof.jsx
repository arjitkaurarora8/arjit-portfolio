"use client";
import Image from "next/image";

const logos = [
  { id: 1, src: "/tradeprobe.svg", alt: "Tradeprobe", width: 150, height: 40 },
  { id: 2, src: "/derec.svg", alt: "Derec", width: 100, height: 25 },
  {
    id: 3,
    src: "/creator-ai.svg",
    alt: "Creaitor Ai",
    width: 180,
    height: 65,
  },
  { id: 4, src: "/trillisent.png", alt: "Trillisent", width: 150, height: 50 },
  {
    id: 5,
    src: "/contenthubGPT.svg",
    alt: "Content Hub GPT",
    width: 290,
    height: 90,
  },
  { id: 6, src: "/zorang.png", alt: "Zorang", width: 120, height: 30 },
  {
    id: 7,
    src: "/german-drishty.svg",
    alt: "German Drishty",
    width: 90,
    height: 40,
  },
  { id: 8, src: "/modish-card.svg", alt: "Modish Card", width: 55, height: 25 },
  {
    id: 9,
    src: "/onference.svg",
    alt: "OnferenceTV",
    width: 160,
    height: 60,
  },
  { id: 10, src: "/nftfn.svg", alt: "NFTFN", width: 90, height: 25 },
  { id: 11, src: "/eSource.svg", alt: "eSource", width: 120, height: 40 },
  { id: 12, src: "/etf.png", alt: "ETF", width: 80, height: 20 },
  { id: 13, src: "/evm.png", alt: "EVM", width: 40, height: 10 },
  { id: 14, src: "/nictp.png", alt: "NICTP", width: 90, height: 20 },
  { id: 15, src: "/terablock.svg", alt: "Terablock", width: 120, height: 40 },
  { id: 16, src: "/cars.png", alt: "Cars", width: 110, height: 25 },
  {
    id: 17,
    src: "/crypto-weekly.svg",
    alt: "Crypto Weekly",
    width: 110,
    height: 40,
  },
  { id: 18, src: "/crikverse.svg", alt: "Crikverse", width: 200, height: 90 },
  { id: 19, src: "/algorise.svg", alt: "Algorise", width: 170, height: 60 },
  { id: 19, src: "/helios.png", alt: "Algorise", width: 120, height: 30 },
  { id: 19, src: "/slt.svg", alt: "Algorise", width: 80, height: 40 },
  { id: 20, src: "/updeed.png", alt: "Updeed", width: 70, height: 20 },
];

export default function SocialProofBar() {
  return (
    <>
      <style jsx global>{`
        @keyframes infiniteScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .logo-track {
          display: flex;
          animation: infiniteScroll 90s linear infinite;
        }
      `}</style>
      <div className="w-full overflow-hidden py-8 sm:py-12 animate-lift-fade-in motion-reduce:animate-fade-in [--offset:10px] [animation-delay:400ms] [animation-duration:1s] [animation-fill-mode:both]">
        <div className="flex">
          {/* First Track */}
          <div className="logo-track">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex items-center justify-center min-w-[200px] mx-2"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-28  object-contain"
                />
              </div>
            ))}
          </div>
          {/* Second Track*/}
          <div className="logo-track">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={`logo-dup-${index}`}
                className="flex items-center justify-center min-w-[200px] mx-2"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-28 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
