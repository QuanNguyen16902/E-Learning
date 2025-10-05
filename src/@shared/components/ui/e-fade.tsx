// export const Fade = ({ show, children }: 
//     { 
//         show: boolean; 
//         children: React.ReactNode 
//     }) => {
//   return (
//     <div
//       className={[
//         "row-start-1 col-start-1 transition-all duration-300",
//         show
//           ? "opacity-100 translate-y-0 pointer-events-auto"
//           : "opacity-0 translate-y-1 pointer-events-none",
//       ].join(" ")}
//     >
//       {children}
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";

export function EFadeSwitch<T>({
  value,                          // giá trị điều khiển (vd: "signin" | "signup")
  render,                         // render theo value
  duration = 200,
  className = "",
}: {
  value: T;
  render: (v: T) => React.ReactNode;
  duration?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(value);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (value === display) return;
    setFading(true);                           // fade-out
    const t = setTimeout(() => {
      setDisplay(value);                       // swap content
      setFading(false);                        // fade-in
    }, duration);
    return () => clearTimeout(t);
  }, [value, display, duration]);

  return (
    <div
      className={[
        "transition-opacity",
        className,
        fading ? "opacity-0" : "opacity-100",
      ].join(" ")}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {render(display)}
    </div>
  );
}
