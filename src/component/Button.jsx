import React from "react";

export default function Button({
  text,
  size = "md",
  className = "",
  ...props
}) {
  const sizeClasses = {
    sm: "h-8 px-4 text-sm", // Navbar
    md: "h-10 px-5 text-base", // Hero
    lg: "h-12 px-6 text-lg", // Footer
  };

  return (
    <button
      className={`
        rounded-lg bg-gradient-to-b from-gray-700 to-gray-900 text-stone-200 font-normal tracking-tight
        shadow-md transition-all duration-150 flex items-center justify-center cursor-pointer
        hover:ring-2 hover:ring-gray-400 hover:scale-105 active:scale-95
        ${sizeClasses[size]} ${className}
      `}
      {...props}
    >
      {text}
    </button>
  );
}
