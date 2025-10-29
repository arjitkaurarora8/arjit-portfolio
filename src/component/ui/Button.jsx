import React from "react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Button({
  text,
  size = "md",
  className = "",
  textClassName = "",
  ...props
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "introductioncall" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const sizeClasses = {
    // Small: Navbar button - responsive padding and text
    sm: "h-8 sm:h-9.5 lg:h-11 px-2.5 sm:px-3 md:px-4 text-sm md:text-base",

    // Medium: Footer button - responsive width and padding
    md: "h-10 sm:h-13 px-3 sm:px-5 w-48 sm:w-62 text-xs sm:text-base",

    // Large: Hero button - responsive padding and text
    // lg: "px-8 sm:px-12 lg:px-10 py-4 sm:py-5 lg:py-6 text-xl sm:text-2xl lg:text-3xl",
    // lg: "px-10 py-6 text-3xl",
    // lg: "h-10 sm:h-20 px-4 sm:px-5 w-48 sm:w-[410] text-xs sm:text-3xl",
    lg: "h-10 sm:h-16 md:h-20 lg:h-22 px-3 sm:px-6 md:px-9 text-xs sm:text-xl md:text-2xl lg:text-3xl",
  };

  return (
    <>
      <button
        data-cal-namespace="introductioncall"
        data-cal-link="arjit-kaur-arora-nk3ufj/introductioncall"
        data-cal-config='{"layout":"month_view"}'
        className={`
        ${
          size === "lg"
            ? "rounded-lg sm:rounded-xl md:rounded-2xl lg::rounded-3xl"
            : "rounded-lg"
        } bg-gradient-to-b from-gray-800 to-gray-950 text-stone-200 font-normal tracking-tight
        shadow-md transition-all duration-150 flex items-center justify-center cursor-pointer
        hover:ring-5 hover:ring-gray-300 active:scale-95 active:shadow-sm active:bg-gradient-to-b active:from-gray-900 active:to-black
        ${sizeClasses[size]} ${className}
      `}
        {...props}
      >
        {/* <div className="flex group gap-1 items-center justify-center">
          <span
            className={`${textClassName} group-hover:text-stone-300 border`}
          >
            {text}
          </span>
          <span className="flex items-center h-5 border group-hover:scale-120  transition-transform ease-out duration-200">
            <img src="./arrow.svg" alt="Arrow icon" />
          </span>
        </div> */}

        <div className="flex group gap-2 items-center">
          <span className={`${textClassName} group-hover:text-stone-300`}>
            {text}
          </span>
          <span className="flex items-center group-hover:scale-120 transition-transform ease-out duration-200">
            <img
              src="./arrow.svg"
              alt="Arrow icon"
              className={
                size === "lg" ? "h-2.5 w-2.5 sm:h-4 sm:w-4 md:h-5 md:w-5" : ""
              }
            />
          </span>
        </div>
      </button>
    </>
  );
}
