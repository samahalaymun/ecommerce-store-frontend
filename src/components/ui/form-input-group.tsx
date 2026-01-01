import type { ReactNode } from "react";

interface FormInputGroupProps {
  label: string;
  sublabel?: string;
  children: ReactNode;
}
function FormInputGroup({ label, sublabel, children }: FormInputGroupProps) {
  return (
    <div>
      <label className="text-foreground text-base">{label}</label>
      {children}
      {sublabel && <p className="text-second-text text-xs">{sublabel}</p>}
    </div>
  );
}

export default FormInputGroup;
