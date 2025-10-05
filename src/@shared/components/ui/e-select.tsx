import React from "react";
import { ESelectProps } from "../types";

export const ESelect: React.FC<ESelectProps> = ({ options, ...props }) => {
  return (
    <select
      {...props}
      className={`w-full px-4 py-2 rounded-xl border border-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-blue-400
                  focus:border-transparent transition-all
                  ${props.className || ""}`}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
