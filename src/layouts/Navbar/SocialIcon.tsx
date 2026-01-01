import { type ReactNode } from "react";
import type { SocialIconProps } from "../types";
import { Link } from "react-router-dom";

function SocialIcon({ icon, to, label }: SocialIconProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      href={to}
      className="p-1.25"
    >
      {icon}
    </a>
  );
}

export default SocialIcon;
