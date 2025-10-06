import React from "react";
import { EToggleProps } from "./e-toggle.type";

export const EToggle: React.FC<EToggleProps> = ({
  checked = false,
  onChange,
  className = "",
  ...rest
}) => {
  return (
    <label className={`relative inline-flex items-center cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="sr-only peer"
        {...rest}
      />
      <div
        className={`w-11 h-6 rounded-full transition-all
          ${checked ? "bg-blue-500" : "bg-gray-200"}
        `}
      ></div>
      <div
        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all
          ${checked ? "translate-x-5" : "translate-x-0"}
        `}
      ></div>
    </label>
  );
};
