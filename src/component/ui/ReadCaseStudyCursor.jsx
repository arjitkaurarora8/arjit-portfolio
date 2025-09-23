"use client";
import { useState, useEffect } from "react";

const CustomCursor = ({ isVisible, children, offset = { x: 10, y: 10 } }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    if (isVisible) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "auto";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "auto";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed z-50 pointer-events-none transition-transform duration-100 ease-out"
      style={{
        left: mousePosition.x + offset.x,
        top: mousePosition.y + offset.y,
        transform: `translate(-50%, -50%) scale(${isClicking ? 0.9 : 1})`,
      }}
    >
      {children}
    </div>
  );
};

export const ReadCaseStudyCursor = ({ isVisible }) => (
  <CustomCursor isVisible={isVisible}>
    <div className="px-3 py-4 bg-white rounded-lg inline-flex justify-start items-end gap-1 shadow-lg">
      <div className="flex flex-row gap-2">
        <span className="justify-start text-stone-900 text-xs font-medium">
          Read Case Study
        </span>
        <span>
          <img src="./readcaseCursorArrow.svg" alt="Read case cursor arrow" />
        </span>
      </div>

      <div className="w-0 h-5 origin-top-left -rotate-90 bg-stone-900" />
    </div>
  </CustomCursor>
);

export default CustomCursor;
