import React from "react";
import { EButtonProps } from "../types";

const variantClasses = {
  primary: "bg-blue-400 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
  ghost: "text-gray-600 hover:bg-gray-100",
};

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const EButton: React.FC<EButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled={isLoading || rest.disabled}
      className={`cursor-pointer rounded-lg transition ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};