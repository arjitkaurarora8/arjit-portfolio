import React from "react";

export default function Button({
  text,
  size = "md",
  className = "",
  textClassName = "",
  ...props
}) {
  const sizeClasses = {
    // Small: Navbar button - responsive padding and text
    sm: "h-8 px-3 sm:px-5 text-sm sm:text-base",

    // Medium: Footer button - responsive width and padding
    md: "h-10 sm:h-13 px-4 sm:px-5 w-32 sm:w-40 text-xs sm:text-base",

    // Large: Hero button - responsive padding and text
    lg: "px-8 sm:px-12 lg:px-18 py-4 sm:py-5 lg:py-6 text-xl sm:text-2xl lg:text-3xl",
  };

  return (
    <button
      className={`
        rounded-lg bg-gradient-to-b from-gray-800 to-gray-950 text-stone-200 font-normal tracking-tight
        shadow-md transition-all duration-150 flex items-center justify-center cursor-pointer
        hover:ring-4 hover:ring-gray-300 hover:scale-105 active:scale-95
        ${sizeClasses[size]} ${className}
      `}
      {...props}
    >
      <span className={textClassName}>{text}</span>
    </button>
  );
}
