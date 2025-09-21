import React from "react";

const TelegramIcon = ({ className = "w-8 h-8" }) => (
  <img src="/telegram.svg" alt="Telegram" className={className} />
);

// Generic icon wrapper for other icons
const IconWrapper = ({ children, className = "w-8 h-8" }) => (
  <div className={`relative ${className}`}>
    <div className="w-full h-full rounded-full bg-gradient-to-r from-sky-600 to-sky-400 flex items-center justify-center">
      {children}
    </div>
  </div>
);

export default function ContactButton({
  text = "Chat",
  icon = "telegram", // "telegram", "custom", or null
  customIcon = null,
  size = "md",
  className = "",
  textClassName = "",
  iconClassName = "",
  ...props
}) {
  const sizeClasses = {
    sm: {
      container: "w-25 h-10 px-2 py-3 text-sm sm:text-base",
      icon: "w-6 h-6",
      text: "text-xs sm:text-base",
    },

    md: {
      container:
        "w-24 h-10 px-3 py-2 text-sm sm:w-30 sm:h-13 sm:px-5 sm:py-3.5 sm:text-base",
      icon: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8",
      text: "text-sm sm:text-base md:text-base",
    },

    lg: {
      container: "w-25 sm:w-30 md:w-40 h-10 sm:h-12 md::h-14 px-6 py-4",
      icon: "w-8 w-8 sm:w-10 sm:h-10",
      text: "text-xl sm:text-2xl lg:text-3xl",
    },
  };

  const currentSize = sizeClasses[size];

  const renderIcon = () => {
    if (!icon) return null;

    if (icon === "telegram") {
      return (
        <TelegramIcon className={`${currentSize.icon} ${iconClassName}`} />
      );
    }

    if (icon === "custom" && customIcon) {
      return (
        <IconWrapper className={`${currentSize.icon} ${iconClassName}`}>
          {customIcon}
        </IconWrapper>
      );
    }

    return null;
  };

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
        {renderIcon()}
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
