import { EBaseProps } from "../../types";

export interface ETextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    EBaseProps {
  label?: string;
  error?: string;
  helperText?: string;
}
