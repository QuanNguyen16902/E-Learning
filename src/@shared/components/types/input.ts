import React from "react";
import { EBaseProps } from "../base/base";


export interface EInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, EBaseProps {
  label?: string;
  error?: string;
}