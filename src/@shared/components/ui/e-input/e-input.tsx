import React from "react";
import { EInputProps } from "./e-input.type";

export const EInput: React.FC<EInputProps> = ({ label, error, className = "", ...rest }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        {...rest}
        className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 
          ${error ? "border-red-500" : "border-gray-300"} ${className}`}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};