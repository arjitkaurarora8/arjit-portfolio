import Link from "next/link";

export default function RecentWork() {
  return (
    <section className="w-full bg-white py-24 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-2 gap-12 items-start">
        {/* RIGHT: Heading + Paragraph */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-4xl font-semibold leading-snug text-gray-700">
            Recent Work
          </h2>
          <p className="max-w-md text-gray-500 text-base leading-snug">
            Every product is designed — visually and how it works. Using it will
            leave an impression. I’m going to make sure it’s a good one.
          </p>
        </div>
        {/* LEFT: 2 Images */}
        <div className="grid grid-cols-2 gap-0 w-full">
          <Link href="/project">
            <img
              src="/work1.jpg"
              alt="Work 1"
              className="w-full h-auto object-cover cursor-pointer 
                         hover:shadow-xl hover:scale-105 transition-all duration-300"
            />
          </Link>
          <Link href="/project">
            <img
              src="/work2.jpg"
              alt="Work 2"
              className="w-full h-auto object-cover cursor-pointer 
                         hover:shadow-xl hover:scale-105 transition-all duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
