import { EBadgeProps } from "./e-badge.type";

export const EBadge: React.FC<EBadgeProps> = ({
  label,
  variant = "primary",
  size = "sm",
  className = "",
}) => {
  const base =
    "inline-flex items-center rounded-md leading-none select-none";

  const color = {
    primary: "bg-brand-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-400 text-gray-900",
    error: "bg-red-500 text-white",
    gray: "bg-gray-200 text-gray-800",
  }[variant];

  const sizing = size === "sm" ? "text-[11px] px-2 py-1" : "text-sm px-3 py-1.5";

  return (
    <span className={`${base} ${color} ${sizing} ${className}`}>{label}</span>
  );
};