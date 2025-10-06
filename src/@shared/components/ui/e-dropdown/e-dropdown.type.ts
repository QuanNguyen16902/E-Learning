import { EBaseProps } from "../../types";

export interface EDropdownProps extends EBaseProps {
  id?: string;
  name?: string;
  label?: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
}
