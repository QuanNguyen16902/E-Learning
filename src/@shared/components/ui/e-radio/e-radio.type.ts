import { EBaseProps } from "../../types";

export interface ERadioProps extends EBaseProps {
  label?: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}
