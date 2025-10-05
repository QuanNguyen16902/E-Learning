import { EBaseProps } from "../base/base";

export interface ECheckboxProps extends EBaseProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}
