import { EBaseProps } from "../../types";

export interface ECardProps extends EBaseProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}