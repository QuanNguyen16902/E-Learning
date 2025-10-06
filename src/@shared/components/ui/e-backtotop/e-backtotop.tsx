"use client";
import { useEffect, useState } from "react";
import { EBackToTopProps } from "./e-backtotop.type";

export const EBackToTop: React.FC<EBackToTopProps> = ({
  offset = 200,
  smooth = true,
  size = "md",
  className = "",
  colorClass = "bg-brand-400 text-white", 
  style,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > offset);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  const sizeMap: Record<typeof size, string> = {
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg",
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={style}
      className={[
        "fixed bottom-6 right-6 z-50 rounded-full shadow-md transition-all duration-300",
        "flex items-center justify-center",
        colorClass,
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none",
        sizeMap[size],
        className,
      ].join(" ")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="h-5 w-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};
