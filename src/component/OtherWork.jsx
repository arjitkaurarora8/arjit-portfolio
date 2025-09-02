import Link from "next/link";
import Image from "next/image";

export default function OtherWork() {
  return (
    <div id="#past" className="w-full px-4 sm:px-6 pt-28 scroll-mt-24">
      {/* Header Section */}
      <div className="flex flex-col justify-start">
        <h2 className="text-stone-900 text-3xl font-semibold leading-9 mb-5">
          Other Work
        </h2>
        <div className="max-w-md mb-5">
          <p className="text-neutral-500 text-base leading-snug tracking-tight">
            Designed and developed products including dashboards, mobile apps,
            and design systems — delivering solutions that balance usability,
            versatility, and aesthetics.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 bg-gray-50 gap-4 h-auto md:grid-cols-2 md:gap-6 md:h-auto lg:grid-cols-[1fr_2fr] lg:grid-rows-3 lg:gap-6 lg:h-[800px]">
          {/* Row 1 - Left */}
          <Link href="/project">
            <Image
              src="/otherwork1.svg"
              alt="Work 1"
              width={500}
              height={400}
              className="w-full h-64 md:h-48 lg:h-full object-cover rounded-2xl shadow-md hover:scale-103 transition"
            />
          </Link>

          {/* Row 1-2 - Right (otherwork4 takes 2 rows on desktop only) */}
          <Link href="/project" className="lg:row-span-2">
            <Image
              src="/otherwork4.svg"
              alt="Work 4"
              width={800}
              height={600}
              className="w-full h-64 md:h-80 lg:h-full object-cover rounded-2xl shadow-md hover:scale-103 transition"
            />
          </Link>

          {/* Row 2 - Left */}
          <Link href="/project">
            <Image
              src="/otherwork2.png"
              alt="Work 2"
              width={500}
              height={400}
              className="w-full h-64 md:h-48 lg:h-full object-cover rounded-2xl shadow-md hover:scale-103 transition"
            />
          </Link>

          {/* Row 3 - Left */}
          <Link href="/project">
            <Image
              src="/otherwork3.svg"
              alt="Work 3"
              width={500}
              height={400}
              className="w-full h-64 md:h-48 lg:h-full object-cover rounded-2xl shadow-md hover:scale-103 transition"
            />
          </Link>

          {/* Row 3 - Right */}
          <Link href="/project">
            <Image
              src="/otherwork5.svg"
              alt="Work 5"
              width={800}
              height={300}
              className="w-full h-64 md:h-48 lg:h-full object-cover rounded-2xl shadow-md hover:scale-103 transition"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
