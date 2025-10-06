import React from "react";
import { EBaseProps } from "../../types";


export interface EInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, EBaseProps {
  label?: string;
  error?: string;
}