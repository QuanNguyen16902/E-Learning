import React from "react";
import { EButtonProps } from "./e-button.type";

const variantClasses = {
  primary: "bg-brand-500 text-white hover:bg-blue-700",
  secondary: "bg-neutral-400 text-neutral-800 hover:bg-neutral-300",
  outline: "border border-neutral-400 text-neutral-800 hover:bg-neutral-100",
  ghost: "text-neutral-600 hover:bg-neutral-100",
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