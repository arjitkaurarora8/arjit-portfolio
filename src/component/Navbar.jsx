// import React from "react";
// import Button from "./Button";

// function Navbar() {
//   return (
//     <nav className="flex items-center justify-between p-6 border-b-2 border-gray-200 sticky top-0 bg-white z-30">
//       {/* Left Section: Logo */}
//       <div className="flex items-center gap-2">
//         <div className="h-11 w-11 relative">
//           <img
//             src="/avatar-logo.svg" // ✅ directly from public folder
//             alt="Avatar-Logo"
//             className="absolute w-full h-full object-contain  inset-0 hover:opacity-0 transition-opacity duration-300 opacity-100"
//             //   className="h-10 w-10 rounded-full" // adjust size as needed
//           />
//           <img
//             src="/avatar-logo-2.svg" // ✅ directly from public folder
//             alt="Avatar-Logo"
//             className="absolute w-full h-full object-contain  inset-0 hover:opacity-100 transition-opacity duration-300 opacity-0"

//             //   className="h-10 w-10 rounded-full" // adjust size as needed
//           />
//         </div>
//         <div>
//           <div className="flex flex-col">
//             <span className="text-stone-900 text-base font-semibold leading-tight tracking-tight">
//               Arjit kaur Arora
//             </span>
//             <span className="text-gray-600 text-base font-medium">
//               Product Lead
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-row gap-4 items-center">
//         {/* Right Section: Links */}
//         <div className="flex gap-4 text-base font-normal leading-tight tracking-tight hover:text-black">
//           <a href="#work" className="text-gray-400  hover:hover:text-gray-800 ">
//             Work
//           </a>
//           <a href="#past" className="text-gray-400  hover:hover:text-gray-800 ">
//             Past
//           </a>
//           <a
//             href="#about"
//             className="text-gray-400  hover:hover:text-gray-800 "
//           >
//             About
//           </a>
//           <a
//             href="#services"
//             className="text-gray-400  hover:hover:text-gray-800 "
//           >
//             Services
//           </a>
//         </div>

//         <Button text="Book" size="sm" />
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// Navbar.jsx
import React from "react";
import Button from "./Button";

function Navbar({ showLinks = true }) {
  return (
    <nav className="flex items-center justify-between p-6 border-b-2 border-gray-200 sticky top-0 bg-white z-30">
      {/* Left Section: Logo */}
      <div className="flex items-center gap-2">
        <div className="h-11 w-11 relative">
          <img
            src="/avatar-logo.svg"
            alt="Avatar-Logo"
            className="absolute w-full h-full object-contain inset-0 hover:opacity-0 transition-opacity duration-300 opacity-100"
          />
          <img
            src="/avatar-logo-2.svg"
            alt="Avatar-Logo"
            className="absolute w-full h-full object-contain inset-0 hover:opacity-100 transition-opacity duration-300 opacity-0"
          />
        </div>
        <div>
          <div className="flex flex-col">
            <span className="text-stone-900 text-base font-semibold leading-tight tracking-tight">
              Arjit kaur Arora
            </span>
            <span className="text-gray-600 text-base font-medium">
              Product Lead
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 items-center">
        {/* Right Section: Links (conditionally render) */}
        {showLinks && (
          <div className="flex gap-4 text-base font-normal leading-tight tracking-tight hover:text-black">
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
