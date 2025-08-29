import Link from "next/link";
import Image from "next/image";

export default function OtherWork() {
  return (
    <div className="min-h-screen w-full px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="flex flex-col justify-start">
          <h2 className="text-4xl font-bold mb-4">Other Work</h2>
          <p className="text-lg text-gray-600">
            Designed and developed products including dashboards, mobile apps,
            and design systems — delivering solutions that balance usability,
            versatility, and aesthetics.
          </p>
        </div>

        {/* Right Side Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Column 1 (3 images) */}
          <div className="flex flex-col gap-6">
            <Link href="/project">
              <Image
                src="/work1.jpg"
                alt="Work 1"
                width={500}
                height={400}
                className="rounded-2xl shadow-md hover:scale-105 transition"
              />
            </Link>
            <Link href="/project">
              <Image
                src="/work2.jpg"
                alt="Work 2"
                width={500}
                height={400}
                className="rounded-2xl shadow-md hover:scale-105 transition"
              />
            </Link>
            <Link href="/project">
              <Image
                src="/work3.jpg"
                alt="Work 3"
                width={500}
                height={400}
                className="rounded-2xl shadow-md hover:scale-105 transition"
              />
            </Link>
          </div>

          {/* Column 2 (2 images) */}
          <div className="flex flex-col gap-6">
            <Link href="/project">
              <Image
                src="/work4.jpg"
                alt="Work 4"
                width={500}
                height={400}
                className="rounded-2xl shadow-md hover:scale-105 transition"
              />
            </Link>
            <Link href="/project">
              <Image
                src="/work5.jpg"
                alt="Work 5"
                width={500}
                height={400}
                className="rounded-2xl shadow-md hover:scale-105 transition"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
