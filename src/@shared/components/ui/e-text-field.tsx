import React from "react";
export const ETextField: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className = "",
  placeholder = "Type here",
  ...props
}) => (
  <input
    className={[
      "h-11 w-full rounded-full border border-gray-200 px-4 text-sm placeholder:text-gray-400",
      "focus:outline-none focus:ring-2 focus:ring-brand",
      className,
    ].join(" ")}
    placeholder={placeholder}
    {...props}
  />
);