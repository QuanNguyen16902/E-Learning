import { EBaseProps } from "../../types";

export interface EBackToTopProps extends EBaseProps {
  /** How many px scroll start show current node */
  offset?: number;
  /** Smooth or not */
  smooth?: boolean;
  size?: "sm" | "md" | "lg";
  colorClass?: string;
}
