import React, { useEffect } from "react";
import { ECheckboxProps } from "./e-checkbox.type";

export const ECheckbox: React.FC<ECheckboxProps> = ({
  label,
  checked,
  onChange,
  className = "",
  ...rest
}) => {
    useEffect(() => {
    console.log("Checkbox checked state:", checked);
    }, [checked]);
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
  <input type="checkbox" className="peer hidden" />
  <span className="flex h-4 w-4 items-center justify-center rounded-sm border border-gray-400 bg-white peer-checked:bg-blue-500 transition">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100 transition"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l3 3 7-7" />
    </svg>
  </span>
  <span className="text-sm">Label demo</span>
</label>

  );
};
