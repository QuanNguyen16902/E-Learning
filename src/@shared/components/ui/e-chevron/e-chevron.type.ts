import { EBaseProps } from "../../types";

export interface EChevronProps extends EBaseProps {
  direction?: "down" | "up" | "left" | "right";
  size?: number;
  color?: string;
}
