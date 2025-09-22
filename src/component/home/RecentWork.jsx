import Link from "next/link";

export default function RecentWork() {
  const projects = [
    {
      id: 1,
      src: "/work1.png",
      alt: "Work 1",
      title: "TradeProbe",
      subtitle: "WebApp & Mobile Design",
    },
    {
      id: 2,
      src: "/work2.png",
      alt: "Work 1",
      title: "TradeProbe",
      subtitle: "WebApp & Mobile Design",
    },
  ];
  return (
    <section
      id="work"
      className="w-full flex flex-col px-4 sm:px-6 scroll-mt-24"
    >
      <div className="flex flex-col items-center sm:items-end">
        <h2 className="text-stone-900 text-2xl sm:text-3xl font-semibold leading-9">
          Recent Work
        </h2>
        <p className="pt-2 sm:pt-4 flex text-center sm:text-right text-neutral-500 text-sm sm:text-base font-normal leading-snug tracking-tight max-w-md sm:max-w-none">
          Every product is designed - visually and how it works.{" "}
          <br className="hidden sm:block" />
          Using it will leave an impression. I'm going to make sure it's a good
          one.
        </p>
      </div>

      <div className="flex w-full pt-6 rounded-2xl overflow-hidden">
        {/* Left Image */}
        <Link
          href="/project"
          className="flex-1 group relative transition-all duration-500 ease-in-out hover:flex-[1.5]"
        >
          <img
            src="/work1.png"
            alt="Work 1"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] 
             object-cover
             rounded-l-2xl"
          />

          {/* <Image
            src={projects[1].src}
            alt={projects[1].alt}
            width={500}
            height={400}
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
          /> */}

          {/* Background overlay on hover - darker for better text visibility */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100
           transition-opacity duration-500 ease-in-out rounded-r-2xl"
          ></div>

          {/* Text Overlay with higher z-index and background */}
          <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <h3 className="text-white text-2xl font-bold leading-tight mb-1">
              {projects[1].title}
            </h3>
            <p className="text-white/90 text-base font-normal leading-tight">
              {projects[1].subtitle}
            </p>
          </div>
          {/* <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <div className="bg-opacity-70 px-3 py-2 rounded-lg">
              <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                TradeProbe
              </h3>
              <p className="text-sm text-gray-300 font-normal leading-tight pt-1.5">
                WebApp & Mobile Design
              </p>
            </div>
          </div> */}
        </Link>

        {/* Right Image */}
        <Link
          href="/project"
          className="flex-1 group relative transition-all duration-500 ease-in-out hover:flex-[1.5] overflow-hidden"
        >
          <img
            src="/work2.png"
            alt="Work 2"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] 
             object-cover 
             rounded-r-2xl"
          />

          {/* Background overlay on hover - darker for better text visibility */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 
          transition-opacity duration-500 ease-in-out rounded-r-2xl"
          ></div>

          {/* Text Overlay with higher z-index and background */}
          <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <h3 className="text-white text-2xl font-bold leading-tight mb-1">
              {projects[1].title}
            </h3>
            <p className="text-white/90 text-base font-normal leading-tight">
              {projects[1].subtitle}
            </p>
          </div>
          {/* <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <div className="bg-opacity-70 px-3 py-2 rounded-lg">
              <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                TradeProbe
              </h3>
              <p className="text-sm text-gray-300 font-normal leading-tight pt-1.5">
                WebApp & Mobile Design
              </p>
            </div>
          </div> */}
        </Link>
      </div>
    </section>
  );
}
