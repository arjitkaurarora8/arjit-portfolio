"use client";

import React from "react";
import Button from "../ui/Button";
import Link from "next/link";

function Navbar({ showLinks = true }) {
  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Past", href: "#past" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  const linkClasses =
    "text-gray-500 hover:text-gray-900 transition-transform duration-300 ease-in-out";

  return (
    <div className="px-4 sm:px-6 ">
      <nav className="flex items-center justify-between py-4 sm:py-6 border-b-2 border-gray-100 sticky top-0 bg-white z-30">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-2 group">
          <Link href="/" className="flex items-center gap-0.5 sm:gap-3.5">
            <div className="h-8 w-8 sm:h-11 sm:w-11 relative">
              <img
                // src="/avatar-logo.png"
                src="/arjit-logo.svg"
                alt="Avatar-Logo"
                className="absolute w-full rounded-full h-full object-contain inset-0 group-hover:opacity-0 transition-opacity duration-300 opacity-100"
              />
              <img
                // src="/avatar-logo-2.png"
                src="/arjit-logo-2.svg"
                alt="Avatar-Logo"
                className="absolute w-full h-full rounded-full object-contain inset-0 group-hover:opacity-100 transition-opacity duration-300 opacity-0"
              />
            </div>
            <div>
              <div className="flex flex-col">
                <span className="text-stone-900 text-xs sm:text-base font-semibold leading-tight tracking-tight">
                  Arjit Kaur Arora
                </span>
                <span className="text-gray-600 text-xs sm:text-base font-medium">
                  Product Lead
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-row gap-4 items-center">
          {/* Right Section: Links (conditionally render) */}
          {showLinks && (
            <div className="hidden lg:flex gap-4 text-base font-normal leading-tight tracking-tight hover:text-black">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={linkClasses}>
                  {link.name}
                </a>
              ))}
            </div>
          )}

          <Button text="Book a call" size="sm" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

// "use client";

// import React, { useState } from "react";
// import Button from "../ui/Button";
// import Link from "next/link";
// import { Menu, X } from "lucide-react"; // icons

// function Navbar({ showLinks = true }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Work", href: "#work" },
//     { name: "Past", href: "#past" },
//     { name: "About", href: "#about" },
//     { name: "Services", href: "#services" },
//   ];

//   const linkClasses =
//     "text-gray-600 hover:text-gray-900 transition-colors duration-200";

//   return (
//     <div className="px-4 sm:px-6">
//       <nav className="flex items-center justify-between py-4 sm:py-6 border-b-2 border-gray-100 top-0 bg-white z-30">
//         {/* Left Section: Hamburger + Logo */}
//         <div className="flex items-center sm:gap-2 group">
//           {/* Hamburger (visible only on small screens) */}
//           <button
//             className="lg:hidden pr-2.5"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? (
//               <X className="w-6 h-6 text-gray-800" />
//             ) : (
//               <Menu className="w-6 h-6 text-gray-800" />
//             )}
//           </button>

//           <Link href="/" className="flex items-center gap-1 sm:gap-3">
//             <div className="h-8 w-8 sm:h-11 sm:w-11 relative">
//               <img
//                 src="/arjit-logo.svg"
//                 alt="Avatar-Logo"
//                 className="absolute w-full h-full rounded-full object-contain inset-0 group-hover:opacity-0 transition-opacity duration-300 opacity-100"
//               />
//               <img
//                 src="/arjit-logo-2.svg"
//                 alt="Avatar-Logo"
//                 className="absolute w-full h-full rounded-full object-contain inset-0 group-hover:opacity-100 transition-opacity duration-300 opacity-0"
//               />
//             </div>
//             <div className="flex flex-col">
//               <span className="text-stone-900 text-xs sm:text-base font-semibold leading-tight tracking-tight">
//                 Arjit Kaur Arora
//               </span>
//               <span className="text-gray-600 text-xs sm:text-base font-medium">
//                 Product Lead
//               </span>
//             </div>
//           </Link>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           {/* Desktop Links */}
//           {showLinks && (
//             <div className="hidden lg:flex gap-6 text-base font-normal">
//               {navLinks.map((link) => (
//                 <a key={link.href} href={link.href} className={linkClasses}>
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           )}

//           <Button text="Book a call" size="sm" />
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="lg:hidden absolute top-16 left-0 w-full bg-white/95 shadow-md z-20 py-4">
//           <div className="flex flex-col items-start gap-4 px-6 pt-2 min-h-screen">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setMenuOpen(false)} // close menu on click
//                 className="w-full text-gray-700 text-base font-medium hover:text-gray-900 transition-colors duration-200"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;
// "use client";

// import React, { useState } from "react";
// import Button from "../ui/Button";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// function Navbar({ showLinks = true }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Work", href: "#work" },
//     { name: "Past", href: "#past" },
//     { name: "About", href: "#about" },
//     { name: "Services", href: "#services" },
//   ];

//   const linkClasses =
//     "text-gray-600 hover:text-gray-900 transition-colors duration-200";

//   return (
//     <>
//       {/* Spacer div to prevent content jump */}
//       <div className="h-[72px] sm:h-[88px]" />

//       {/* Fixed Navbar */}
//       <nav className="z-30 fixed top-0 left-2 right-2 md:left-10 md:right-10 lg:left-14 lg:right-14 xl:left-30 xl:right-30 border-b-2 border-gray-100">
//         {/* <nav className="flex items-center justify-between py-4 sm:py-6 border-b-2 border-gray-100 top-0 bg-white z-30"> */}
//         {/* Container with same padding as your page content */}
//         <div className="px-4 sm:px-6 flex items-center justify-between gap-20 py-4 sm:py-6 w-full">
//           {/* Left Section: Logo + Name + Hamburger */}
//           <div className="flex items-center sm:gap-2 group">
//             {/* Hamburger */}
//             <button
//               className="sm:hidden pr-2.5"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? (
//                 <X className="w-6 h-6 text-gray-800" />
//               ) : (
//                 <Menu className="w-6 h-6 text-gray-800" />
//               )}
//             </button>

//             <Link href="/" className="flex items-center gap-1 sm:gap-3">
//               <div className="h-8 w-8 sm:h-11 sm:w-11 relative">
//                 <img
//                   src="/arjit-logo.svg"
//                   alt="Avatar-Logo"
//                   className="absolute w-full h-full rounded-full object-contain inset-0 group-hover:opacity-0 transition-opacity duration-300 opacity-100"
//                 />
//                 <img
//                   src="/arjit-logo-2.svg"
//                   alt="Avatar-Logo"
//                   className="absolute w-full h-full rounded-full object-contain inset-0 group-hover:opacity-100 transition-opacity duration-300 opacity-0"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-stone-900 text-sm md:text-sm lg:text-base font-semibold leading-tight tracking-tight">
//                   Arjit Kaur Arora
//                 </span>
//                 <span className="text-gray-600 text-sm md:text-sm lg:text-base font-medium">
//                   Product Lead
//                 </span>
//               </div>
//             </Link>
//           </div>

//           {/* Right Section: Links + Button */}
//           <div className="flex items-center gap-3 md:gap-4">
//             {showLinks && (
//               <div className="hidden sm:flex sm:gap-3 lg:gap-6 text-sm md:text-sm lg:text-base font-normal">
//                 {navLinks.map((link) => (
//                   <a key={link.href} href={link.href} className={linkClasses}>
//                     {link.name}
//                   </a>
//                 ))}
//               </div>
//             )}
//             <Button text="Book a call" size="sm" />
//           </div>
//         </div>
//       </nav>
//       {menuOpen && (
//         <div className="lg:hidden absolute top-16 left-0 w-full bg-white/95 shadow-md z-20 py-4">
//           <div className="flex flex-col items-start gap-4 px-6 pt-2 min-h-screen">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setMenuOpen(false)} // close menu on click
//                 className="w-full text-gray-700 text-base font-medium hover:text-gray-900 transition-colors duration-200"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;
