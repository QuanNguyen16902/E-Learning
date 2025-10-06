import { EBaseProps } from "../../types";

export interface EBadgeProps extends EBaseProps{
  label: string;
  variant?: "primary" | "success" | "warning" | "error" | "gray";
  size?: "sm" | "md";
}