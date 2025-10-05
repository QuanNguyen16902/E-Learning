import { EOptionProps } from "../types/option";

export const EOption: React.FC<EOptionProps> = ({
  value,
  label,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect?.(value)}
      className={`px-3 py-2 cursor-pointer transition-colors
        ${isSelected ? "bg-blue-50 text-blue-600 font-medium" : "hover:bg-gray-100"}`}
    >
      {label}
    </div>
  );
};