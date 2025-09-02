import React from "react";
import Button from "./Button";

function Navbar({ showLinks = true }) {
  return (
    <nav className="flex items-center justify-between p-4 sm:p-6 border-b-2 border-gray-200 sticky top-0 bg-white z-30">
      {/* Left Section: Logo */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 sm:h-11 sm:w-11 relative">
          <img
            src="/avatar-logo.png"
            alt="Avatar-Logo"
            className="absolute w-full h-full object-contain inset-0 hover:opacity-0 transition-opacity duration-300 opacity-100"
          />
          <img
            src="/avatar-logo-2.png"
            alt="Avatar-Logo"
            className="absolute w-full h-full object-contain inset-0 hover:opacity-100 transition-opacity duration-300 opacity-0"
          />
        </div>
        <div>
          <div className="flex flex-col">
            <span className="text-stone-900 text-sm sm:text-base font-semibold leading-tight tracking-tight">
              Arjit kaur Arora
            </span>
            <span className="text-gray-600 text-sm sm:text-base font-medium">
              Product Lead
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 items-center">
        {/* Right Section: Links (conditionally render) */}
        {showLinks && (
          <div className="hidden lg:flex gap-4 text-base font-normal leading-tight tracking-tight hover:text-black">
            <a href="#work" className="text-gray-400 hover:text-gray-800">
              Work
            </a>
            <a href="#past" className="text-gray-400 hover:text-gray-800">
              Past
            </a>
            <a href="#about" className="text-gray-400 hover:text-gray-800">
              About
            </a>
            <a href="#services" className="text-gray-400 hover:text-gray-800">
              Services
            </a>
          </div>
        )}

        <Button text="Book" size="sm" />
      </div>
    </nav>
  );
}

export default Navbar;
