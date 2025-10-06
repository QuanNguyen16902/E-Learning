import React from "react";
import { ELabelProps } from "./e-label.type";

export const ELabel: React.FC<ELabelProps> = ({ children, ...props }) => {
  return (
    <label
      {...props}
      className={`block mb-1 text-sm font-bold text-gray-700 ${props.className || ""}`}
    >
      {children}
    </label>
  );
};
