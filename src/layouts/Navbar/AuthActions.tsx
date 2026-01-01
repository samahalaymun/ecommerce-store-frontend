import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import type { AuthActionsProps } from "../types";

function AuthActions({ className }:AuthActionsProps) {
  return (
    <div className={cn("flex gap-1.25 text-primary items-center", className)}>
      <User size={16} />
      <Link to="#" className="hover:underline font-bold">
        Login
      </Link>
      <span>/</span>
      <Link to="#" className="hover:underline font-bold">
        Register
      </Link>
    </div>
  );
}

export default AuthActions;
