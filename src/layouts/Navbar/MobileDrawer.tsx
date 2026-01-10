import type { MobileDrawerProps } from "../types";
import AuthActions from "./AuthActions";
import Logo from "./Logo";
import NavItems from "./NavItems";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!open}
        onClick={onClose}
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      />

      {/* Slide panel */}
      <aside
        aria-hidden={!open}
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-full max-w-full bg-background shadow-lg transition-transform",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <Logo/>
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="p-2 rounded-md hover:bg-muted"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-4 py-6">
          <NavItems onClick={onClose} className="mb-6" stacked />
          <AuthActions />
        </div>
      </aside>
    </>
  );
}

export default MobileDrawer;
