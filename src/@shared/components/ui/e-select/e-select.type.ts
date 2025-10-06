import React from "react";
import { EBaseProps } from "../../types";

export interface ESelectProps 
  extends React.SelectHTMLAttributes<HTMLSelectElement>, EBaseProps {
  options: { value: string; label: string }[];
}
