import { EBaseProps } from "../base/base";

export interface ECardProps extends EBaseProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}