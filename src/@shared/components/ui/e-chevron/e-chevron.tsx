import { EChevronProps } from "./e-chevron.type";

export const EChevron: React.FC<EChevronProps> = ({
  direction = "down",
  size = 20,
  color = "currentColor",
  className = "",
}) => {
  const rotateClass = {
    down: "rotate-0",
    up: "rotate-180",
    left: "rotate-90",
    right: "-rotate-90",
  };

  return (
    <svg
      className={`${className} transform ${rotateClass[direction]}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};