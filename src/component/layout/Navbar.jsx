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
    <nav className="flex items-center justify-between p-4 sm:p-6 border-b-2 border-gray-100 sticky top-0 bg-white z-30">
      {/* Left Section: Logo */}
      <div className="flex items-center gap-2 group">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 sm:h-11 sm:w-11 relative">
            <img
              src="/avatar-logo.png"
              alt="Avatar-Logo"
              className="absolute w-full h-full object-contain inset-0 group-hover:opacity-0 transition-opacity duration-300 opacity-100"
            />
            <img
              src="/avatar-logo-2.png"
              alt="Avatar-Logo"
              className="absolute w-full h-full object-contain inset-0 group-hover:opacity-100 transition-opacity duration-300 opacity-0"
            />
          </div>
          <div>
            <div className="flex flex-col">
              <span className="text-stone-900 text-sm sm:text-base font-semibold leading-tight tracking-tight">
                Arjit Kaur Arora
              </span>
              <span className="text-gray-600 text-sm sm:text-base font-medium">
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

        <Button text="Book 1:1 Strategy Session" size="sm" />
      </div>
    </nav>
  );
}

export default Navbar;
