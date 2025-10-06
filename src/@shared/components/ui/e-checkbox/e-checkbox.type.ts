import { EBaseProps } from "../../types";

export interface ECheckboxProps extends EBaseProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}
