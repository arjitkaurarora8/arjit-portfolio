import Link from "next/link";

export default function RecentWork() {
  return (
    <section
      id="work"
      className="w-full flex flex-col px-4 sm:px-6 min-h-screen scroll-mt-24"
    >
      <div className="flex flex-col items-end">
        <h2 className="text-stone-900 text-2xl sm:text-3xl font-semibold leading-9">
          Recent Work
        </h2>
        <p className="pt-2 sm:pt-4 flex text-right text-neutral-500 text-sm sm:text-base font-normal leading-snug tracking-tight">
          Every product is designed - visually and how it works. <br />
          Using it will leave an impression. I’m going to make sure it’s a good
          one.
        </p>
      </div>

      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 w-full rounded-2xl overflow-hidden">
        <Link href="/project" className="w-full">
          <img
            src="/work1.svg"
            alt="Work 1"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 
                 object-cover 
                 cursor-pointer transition-transform duration-300 
                 group-hover:scale-105 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
          />
        </Link>
        <Link href="/project" className="w-full">
          <img
            src="/work2.svg"
            alt="Work 2"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 
                 object-cover 
                 cursor-pointer transition-transform duration-300 
                 group-hover:scale-105 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none"
          />
        </Link>
      </div>
    </section>
  );
}
