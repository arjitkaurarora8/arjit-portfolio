// "use client";
// import Link from "next/link";
// import { useState } from "react";

// import Image from "next/image";
// import { EyeCursor } from "../ui/EyeCursor";

// export default function BriefCaseStudies() {
//   const [isHovering, setIsHovering] = useState(false);

//   const projects = [
//     {
//       id: 1,
//       src: "/creaitor-ai-img.png",
//       alt: "Work 1",
//       title: "Creaitor Ai",
//       subtitle: "WebApp Design",
//     },
//     {
//       id: 2,
//       src: "/derec-img.png",
//       alt: "Work 2",
//       title: "Derec",
//       subtitle: "WebApp Design",
//     },
//     {
//       id: 3,
//       src: "/web3.png",
//       alt: "Work 3",
//       title: "WEB3 Products Compilation",
//       subtitle: "WebApp Design",
//     },
//     {
//       id: 4,
//       src: "/crikverse-img.png",
//       alt: "Work 4",
//       title: "Crikverse",
//       subtitle: "WebApp Design",
//     },
//     {
//       id: 5,
//       src: "/saas.png",
//       alt: "Work 5",
//       title: "Saas Dashboard Solutions",
//       subtitle: "WebApp Design",
//     },
//   ];

//   return (
//     <div id="past" className="w-full px-4 sm:px-6 pt-28 scroll-mt-24">
//       {/* Header Section */}
//       <div className="flex flex-col justify-start">
//         <h2 className="text-stone-900 text-3xl font-semibold leading-9 mb-5">
//           Brief Case Studies
//         </h2>
//         <div className="max-w-md mb-5">
//           <p className="text-neutral-500 text-base leading-snug tracking-tight">
//             Designed and developed products including dashboards, mobile apps,
//             and design systems — delivering solutions that balance usability,
//             versatility, and aesthetics.
//           </p>
//         </div>

//         <EyeCursor isVisible={isHovering} />

//         {/* jnfjeifbiuefhoiwediuerfiuwedouwhdneuw */}
//         {/* jnfjeifbiuefhoiwediuerfiuwedouwhdneuw */}
//         {/* jnfjeifbiuefhoiwediuerfiuwedouwhdneuw */}
//         {/* jnfjeifbiuefhoiwediuerfiuwedouwhdneuw */}

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 gap-4 h-auto md:grid-cols-2 md:gap-6 md:h-auto lg:grid-cols-[1fr_2fr] lg:grid-rows-3 lg:gap-4 lg:h-[1000px]">
//           {/* Row 1 - Left */}
//           <Link
//             href="/creaitor-ai"
//             className="group relative overflow-hidden rounded-2xl outline-[1px] outline-gray-100"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//             style={{ cursor: "none" }}
//           >
//             <div className="relative w-full h-64 md:h-full overflow-hidden">
//               <Image
//                 src={projects[0].src}
//                 alt={projects[0].alt}
//                 width={500}
//                 height={400}
//                 className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:brightness-75"
//               />

//               {/* Gradient overlay on hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               {/* Text overlay */}
//               <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
//                 <h3 className="text-white text-xl font-bold leading-tight mb-1">
//                   {projects[0].title}
//                 </h3>
//                 <p className="text-white/90 text-sm font-normal leading-tight">
//                   {projects[0].subtitle}
//                 </p>
//               </div>
//             </div>
//           </Link>

//           {/* Row 1-2 - Right (otherwork4 takes 2 rows on desktop only) */}
//           <Link
//             href="/crikverse"
//             className="lg:row-span-2 group relative overflow-hidden rounded-2xl outline-[1px] outline-gray-100"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//             style={{ cursor: "none" }}
//           >
//             <div className="relative w-full h-64 md:h-80 lg:h-full overflow-hidden">
//               <Image
//                 src={projects[3].src}
//                 alt={projects[3].alt}
//                 width={800}
//                 height={600}
//                 className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:brightness-75"
//               />

//               {/* Gradient overlay on hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               {/* Text overlay */}
//               <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
//                 <h3 className="text-white text-2xl font-bold leading-tight mb-1">
//                   {projects[3].title}
//                 </h3>
//                 <p className="text-white/90 text-base font-normal leading-tight">
//                   {projects[3].subtitle}
//                 </p>
//               </div>
//             </div>
//           </Link>

//           {/* Row 2 - Left */}
//           <Link
//             href="/derec"
//             className="group relative overflow-hidden rounded-2xl outline-[1px] outline-gray-100"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//             style={{ cursor: "none" }}
//           >
//             <div className="relative w-full h-64 md:h-48 lg:h-full overflow-hidden">
//               <Image
//                 src={projects[1].src}
//                 alt={projects[1].alt}
//                 width={500}
//                 height={400}
//                 className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:brightness-75"
//               />

//               {/* Gradient overlay on hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               {/* Text overlay */}
//               <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
//                 <h3 className="text-white text-xl font-bold leading-tight mb-1">
//                   {projects[1].title}
//                 </h3>
//                 <p className="text-white/90 text-sm font-normal leading-tight">
//                   {projects[1].subtitle}
//                 </p>
//               </div>
//             </div>
//           </Link>

//           {/* Row 3 - Left */}
//           <Link
//             href="/web3-product-designs"
//             className="lg:row-span-7 group relative overflow-hidden rounded-2xl outline-[1px] outline-gray-100"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//             style={{ cursor: "none" }}
//           >
//             <div className="relative w-full h-64 md:h-48 lg:h-full overflow-hidden">
//               {/* <div className="relative w-full h-72 md:h-96 overflow-hidden"> */}
//               <Image
//                 src={projects[2].src}
//                 alt={projects[2].alt}
//                 width={500}
//                 height={400}
//                 className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:brightness-75"
//               />

//               {/* Gradient overlay on hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               {/* Text overlay */}
//               <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
//                 <h3 className="text-white text-xl font-bold leading-tight mb-1">
//                   {projects[2].title}
//                 </h3>
//                 <p className="text-white/90 text-sm font-normal leading-tight">
//                   {projects[2].subtitle}
//                 </p>
//               </div>
//             </div>
//           </Link>

//           {/* Row 3 - Right */}
//           <Link
//             href="/saas-dashboard-solutions"
//             className="lg:row-span-7 group relative overflow-hidden rounded-2xl outline-[1px] outline-gray-100"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//             style={{ cursor: "none" }}
//           >
//             <div className="relative w-full h-64 md:h-48 lg:h-full overflow-hidden">
//               <Image
//                 src={projects[4].src}
//                 alt={projects[4].alt}
//                 width={800}
//                 height={300}
//                 className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:brightness-75"
//               />

//               {/* Gradient overlay on hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               {/* Text overlay */}
//               <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
//                 <h3 className="text-white text-xl font-bold leading-tight mb-1">
//                   {projects[4].title}
//                 </h3>
//                 <p className="text-white/90 text-sm font-normal leading-tight">
//                   {projects[4].subtitle}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>

//       <Link href="/project">
//         <div className="w-full inline-flex justify-end items-center pt-7 pb-14">
//           {/* <div className="w-96 h-9 rounded-lg outline-[2.62px] outline-gray-50 flex items-center justify-center ">
//             <div className="justify-center">
//               <span className="text-neutral-600 text-sm font-semibold font-inter leading-tight tracking-wide">
//                 More of my work here{" "}
//               </span>

//               <span className="text-neutral-600 text-base font-normal font-tiny uppercase leading-tight tracking-wide">
//                 PIXEL
//               </span>
//               <span className="text-orange-600 text-base font-normal font-tiny uppercase leading-tight tracking-wide">
//                 APOLLO
//               </span>
//               <span className="text-neutral-600 text-base font-normal font-tiny uppercase leading-tight tracking-wide">
//                 .com
//               </span>
//             </div>
//             <span className=" pl-1">
//               <img src="./arrow-right.svg" alt="arrow-right" />
//             </span>
//           </div> */}
//         </div>
//       </Link>
//     </div>
//   );
// }

//////////////////////////////////
//////////////////////////////////
////////////////
////////////////
//////////////////////////////////
//////////////////////////////////

"use client";
import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import { EyeCursor } from "../ui/EyeCursor";

export default function BriefCaseStudies() {
  const [isHovering, setIsHovering] = useState(false);

  const projects = [
    {
      id: 1,
      src: "/creaitor-ai-img.png",
      alt: "Work 1",
      title: "Creaitor Ai",
      subtitle: "WebApp Design",
    },
    {
      id: 2,
      src: "/derec-img.png",
      alt: "Work 2",
      title: "Derec",
      subtitle: "WebApp Design",
    },
    {
      id: 3,
      src: "/web3.png",
      alt: "Work 3",
      title: "WEB3 Products Compilation",
      subtitle: "WebApp Design",
    },
    {
      id: 4,
      src: "/crikverse-img.png",
      alt: "Work 4",
      title: "Crikverse",
      subtitle: "WebApp Design",
    },
    {
      id: 5,
      src: "/saas.png",
      alt: "Work 5",
      title: "Saas Dashboard Solutions",
      subtitle: "WebApp Design",
    },
  ];

  return (
    <div id="past" className="w-full px-4 sm:px-6 pt-28 scroll-mt-24">
      {/* Header Section */}
      <div className="flex flex-col justify-start">
        <h2 className="text-stone-900 text-3xl font-semibold leading-9 mb-5">
          Brief Case Studies
        </h2>
        <div className="max-w-md mb-5">
          <p className="text-neutral-500 text-base leading-snug tracking-tight">
            Designed and developed products including dashboards, mobile apps,
            and design systems — delivering solutions that balance usability,
            versatility, and aesthetics.
          </p>
        </div>

        <EyeCursor isVisible={isHovering} />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-[1fr_2fr] lg:gap-4">
          {/* Row 1 - Left - Creaitor AI */}
          <Link
            href="/creaitor-ai"
            className="group relative overflow-hidden rounded-2xl outline-[1px] outline-gray-100"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ cursor: "none" }}
          >
            <div className="relative w-full h-[260px] sm:h-[300px] md:h-auto lg:h-[280px] overflow-hidden">
              <Image
                src={projects[0].src}
                alt={projects[0].alt}
                width={500}
                height={400}
                className="w-full h-full object-cover object-top-left transition-all duration-700 ease-out group-hover:brightness-75"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-white text-xl font-bold leading-tight mb-1">
                  {projects[0].title}
                </h3>
                <p className="text-white/90 text-sm font-normal leading-tight">
                  {projects[0].subtitle}
                </p>
              </div>
            </div>
          </Link>

          {/* Row 1-2 - Right - Crikverse (spans 2 rows) */}
          <Link
            href="/crikverse"
            className="lg:row-span-2 group relative overflow-hidden rounded-2xl outline-[1px] outline-gray-100"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ cursor: "none" }}
          >
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-auto lg:h-[580px] overflow-hidden">
              <Image
                src={projects[3].src}
                alt={projects[3].alt}
                width={800}
                height={600}
                className="w-full h-full object-cover object-top-left transition-all duration-700 ease-out group-hover:brightness-75"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-white text-2xl font-bold leading-tight mb-1">
                  {projects[3].title}
                </h3>
                <p className="text-white/90 text-base font-normal leading-tight">
                  {projects[3].subtitle}
                </p>
              </div>
            </div>
          </Link>

          {/* Row 2 - Left - Derec */}
          <Link
            href="/derec"
            className="group relative overflow-hidden rounded-2xl outline-[1px] outline-gray-100"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ cursor: "none" }}
          >
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[314px] lg:h-[280px] overflow-hidden">
              <Image
                src={projects[1].src}
                alt={projects[1].alt}
                width={500}
                height={400}
                className="w-full h-full object-cover object-top-left transition-all duration-700 ease-out group-hover:brightness-75"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-white text-xl font-bold leading-tight mb-1">
                  {projects[1].title}
                </h3>
                <p className="text-white/90 text-sm font-normal leading-tight">
                  {projects[1].subtitle}
                </p>
              </div>
            </div>
          </Link>

          {/* Row 3 - Left - WEB3 Products */}
          <Link
            href="/web3-product-designs"
            className="group relative overflow-hidden rounded-2xl outline-[1px] outline-gray-100"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ cursor: "none" }}
          >
            <div className="relative w-full h-[260px] sm:h-[300px] md:h-[314px] lg:h-[380px] overflow-hidden">
              <Image
                src={projects[2].src}
                alt={projects[2].alt}
                width={500}
                height={600}
                className="w-full h-full object-cover object-top-left transition-all duration-700 ease-out group-hover:brightness-75"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-white text-xl font-bold leading-tight mb-1">
                  {projects[2].title}
                </h3>
                <p className="text-white/90 text-sm font-normal leading-tight">
                  {projects[2].subtitle}
                </p>
              </div>
            </div>
          </Link>

          {/* Row 3 - Right - SaaS Dashboard */}
          <Link
            href="/saas-dashboard-solutions"
            className="group relative overflow-hidden rounded-2xl outline-[1px] outline-gray-100"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ cursor: "none" }}
          >
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[315px] lg:h-[380px] overflow-hidden">
              <Image
                src={projects[4].src}
                alt={projects[4].alt}
                width={800}
                height={600}
                className="w-full h-full object-cover object-top-left transition-all duration-700 ease-out group-hover:brightness-75"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-white text-xl font-bold leading-tight mb-1">
                  {projects[4].title}
                </h3>
                <p className="text-white/90 text-sm font-normal leading-tight">
                  {projects[4].subtitle}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Link href="/project">
        <div className="w-full inline-flex justify-end items-center pt-7 pb-14"></div>
      </Link>
    </div>
  );
}
