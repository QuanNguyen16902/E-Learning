import React from "react";

interface ELabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const ELabel: React.FC<ELabelProps> = ({ children, ...props }) => {
  return (
    <label
      {...props}
      className={`block mb-1 text-sm font-bold text-gray-700 ${props.className || ""}`}
    >
      {children}
    </label>
  );
};
