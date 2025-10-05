import { ECardProps } from "../types/card";

export const ECard: React.FC<ECardProps> = ({ children, className = "", ...rest }) => {
  return (
    <div
      {...rest}
      className={`bg-white shadow-md rounded-2xl p-4 transition hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};