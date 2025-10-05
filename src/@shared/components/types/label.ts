import React from "react";
import { EBaseProps } from "../base/base";

export interface ELabelProps 
  extends React.LabelHTMLAttributes<HTMLLabelElement>, EBaseProps {
  children: React.ReactNode;
}
