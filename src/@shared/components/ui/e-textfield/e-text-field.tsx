import React from "react";
import { ETextFieldProps } from "./e-text-field.type";

export const ETextField: React.FC<ETextFieldProps> = ({
  className = "",
  label,
  error,
  helperText,
  placeholder = "Type here",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}

      <input
        {...props}
        placeholder={placeholder}
        className={[
          "h-11 w-full rounded-full border px-4 text-sm placeholder:text-gray-400 transition",
          error
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-200 focus:ring-brand focus:ring-2",
          "focus:outline-none",
          className,
        ].join(" ")}
      />

      {error ? (
        <span className="text-xs text-red-500">{error}</span>
      ) : helperText ? (
        <span className="text-xs text-gray-500">{helperText}</span>
      ) : null}
    </div>
  );
};
