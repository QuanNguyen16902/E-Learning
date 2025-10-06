import React from "react";
import { EBaseProps } from "../../types";

export interface EButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, EBaseProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}