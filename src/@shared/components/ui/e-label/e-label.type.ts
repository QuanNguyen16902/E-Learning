import React from "react";
import { EBaseProps } from "../../types";

export interface ELabelProps 
  extends React.LabelHTMLAttributes<HTMLLabelElement>, EBaseProps {
  children: React.ReactNode;
}
