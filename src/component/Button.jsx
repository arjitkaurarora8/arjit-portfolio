import React from "react";

export default function Button({
  text,
  size = "md",
  className = "",
  textClassName = "", // new prop to style inner text
  ...props
}) {
  const sizeClasses = {
    sm: "h-8 px-5 text-base", // Navbar
    md: "h-13 px-5 w-40 text-base", // Footer
    lg: "px-18 py-6 text-3xl", // Hero
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
