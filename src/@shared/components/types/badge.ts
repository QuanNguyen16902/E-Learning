export interface EBadgeProps {
  label: string;
  variant?: "primary" | "success" | "warning" | "error" | "gray";
  size?: "sm" | "md";
  className?: string;
}