import { EBaseProps } from "../../types";

export interface EFadeSwitchProps<T> extends EBaseProps {
  /** Value to managed state for showing (ex: "signin" | "signup") */
  value: T;

  /** func to render content tương ứng với value */
  render: (v: T) => React.ReactNode;

  /** Time fade (ms)*/
  duration?: number;
}
