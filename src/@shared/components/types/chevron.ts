import { EBaseProps } from "../base/base";

export interface EChevronProps extends EBaseProps {
  direction?: "down" | "up" | "left" | "right";
  size?: number;
  color?: string;
}
