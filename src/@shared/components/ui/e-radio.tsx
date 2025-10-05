import React from "react";
import { ERadioProps } from "../types/radio";

export const ERadio: React.FC<ERadioProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
  className = "",
  ...rest
}) => {
  return (
    <label className={`flex items-center gap-2 ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
        className="h-5 w-5"
        {...rest}
      />
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
};
