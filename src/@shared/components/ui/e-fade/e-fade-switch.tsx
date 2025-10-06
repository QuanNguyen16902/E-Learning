"use client";
import React, { useEffect, useState } from "react";
import { EFadeSwitchProps } from "./e-fade-switch.type";

export function EFadeSwitch<T>({
  value,
  render,
  duration = 200,
  className = "",
  style,
}: EFadeSwitchProps<T>) {
  const [display, setDisplay] = useState(value);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (value === display) return;

    setFading(true); // fade out
    const t = setTimeout(() => {
      setDisplay(value); // swap
      setFading(false);  // fade in
    }, duration);

    return () => clearTimeout(t);
  }, [value, display, duration]);

  return (
    <div
      className={[
        "transition-opacity duration-300",
        className,
        fading ? "opacity-0" : "opacity-100",
      ].join(" ")}
      style={{
        transitionDuration: `${duration}ms`,
        ...style,
      }}
    >
      {render(display)}
    </div>
  );
}
