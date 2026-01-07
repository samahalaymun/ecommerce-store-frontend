import { Heart, Search, ShoppingCart } from "lucide-react";
import type { MobileDrawerProps } from "../types";
import ActionNavItem from "./ActionNavItem";
import AuthActions from "./AuthActions";
import NavItems from "./NavItems";
import { cn } from "@/lib/utils";

function MobileDrawer({ open }: MobileDrawerProps) {
  if (!open) return null;

  return (
    <div
      className={cn(
        "overflow-hidden transition-[max-height] duration-300 ease-in-out border-b bg-background",
        open ? "h-auto" : "max-h-0"
      )}
    >
      {/* Drawer */}
      <aside className="flex flex-col items-center px-6 py-8">

        {/* Nav links */}
        <NavItems className="flex-col items-center mb-4" />
        <AuthActions />
      </aside>
    </div>
  );
}

export default MobileDrawer;
