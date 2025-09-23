"use client";

import React from "react";

const TelegramIcon = ({ className = "w-8 h-8" }) => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient
        id="paint0_linear_telegram"
        x1="17"
        y1="33.4111"
        x2="17"
        y2="0.148438"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D93D2" />
        <stop offset="1" stopColor="#38B0E3" />
      </linearGradient>
    </defs>

    <circle cx="17" cy="16.78" r="16.63" fill="url(#paint0_linear_telegram)" />

    <path
      d="M11.6266 17.9949L13.5998 23.4563C13.5998 23.4563 13.8465 23.9673 14.1106 23.9673C14.3748 23.9673 18.3038 19.8799 18.3038 19.8799L22.673 11.4409L11.697 16.5851L11.6266 17.9949Z"
      fill="#C8DAEA"
    />

    <path
      d="M14.2428 19.396L13.864 23.4216C13.864 23.4216 13.7054 24.6551 14.9387 23.4216C16.1719 22.1881 17.3523 21.2369 17.3523 21.2369"
      fill="#A9C6D8"
    />

    <path
      d="M11.6622 18.1903L7.60328 16.8678C7.60328 16.8678 7.1182 16.671 7.2744 16.2247C7.30655 16.1327 7.37141 16.0544 7.56544 15.9198C8.46478 15.293 24.2115 9.6332 24.2115 9.6332C24.2115 9.6332 24.6561 9.48338 24.9183 9.58303C24.9832 9.60311 25.0415 9.64006 25.0874 9.6901C25.1333 9.74015 25.1651 9.80148 25.1795 9.86784C25.2079 9.98504 25.2197 10.1056 25.2147 10.2261C25.2135 10.3303 25.2009 10.4269 25.1913 10.5784C25.0954 12.1258 22.2254 23.6746 22.2254 23.6746C22.2254 23.6746 22.0537 24.3504 21.4385 24.3735C21.2873 24.3784 21.1366 24.3528 20.9956 24.2982C20.8545 24.2437 20.7258 24.1612 20.6173 24.0559C19.41 23.0174 15.2372 20.2131 14.3151 19.5963C14.2943 19.5822 14.2768 19.5637 14.2638 19.5422C14.2507 19.5207 14.2424 19.4966 14.2395 19.4716C14.2266 19.4066 14.2972 19.3261 14.2972 19.3261C14.2972 19.3261 21.5632 12.8676 21.7565 12.1896C21.7715 12.137 21.715 12.1111 21.639 12.1341C21.1564 12.3117 12.7906 17.5948 11.8673 18.1778C11.8008 18.1979 11.7306 18.2022 11.6622 18.1903Z"
      fill="white"
    />
  </svg>
);

export default function TelegramContactButton({
  text = "Chat",
  size = "md",
  className = "",
  textClassName = "",
  iconClassName = "",
  ...props
}) {
  const sizeClasses = {
    sm: {
      container: "w-25 h-10 px-2 py-3",
      icon: "w-6 h-6",
      text: "text-xs sm:text-base",
    },
    md: {
      container: "w-24 h-10 px-3 py-2 sm:w-30 sm:h-13 sm:px-5 sm:py-3.5",
      icon: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8",
      text: "text-sm sm:text-base md:text-base",
    },
    lg: {
      container: "w-25 sm:w-30 md:w-40 h-10 sm:h-12 md:h-14 px-6 py-4",
      icon: "w-8 h-8 sm:w-10 sm:h-10",
      text: "text-xl sm:text-2xl lg:text-3xl",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <button
      className={`
        ${currentSize.container}
        bg-gradient-to-b from-sky-500 to-sky-400 rounded-lg
        inline-flex flex-col justify-center items-center overflow-hidden
        transition-all duration-150 cursor-pointer
        hover:shadow-[0px_0px_0px_5px_rgba(46,165,220,0.35)]
        active:scale-95 active:shadow-[0px_0px_0px_3px_rgba(46,165,220,0.4)]
        ${className}
      `}
      {...props}
    >
      <div className="inline-flex justify-center items-center gap-2">
        <TelegramIcon className={`${currentSize.icon} ${iconClassName}`} />
        <div className="inline-flex flex-col justify-start items-start">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div
              className={`
              justify-center text-white font-semibold font-['Inter'] 
              leading-tight tracking-tight
              ${currentSize.text} ${textClassName}
            `}
            >
              {text}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
