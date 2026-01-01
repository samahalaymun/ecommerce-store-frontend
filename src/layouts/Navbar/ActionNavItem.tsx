import { Button } from "@/components/ui/button";
import type { ActionNavItemProps } from "../types";
import { cn } from "@/lib/utils";

function ActionNavItem({ icon, value,onClick,className }: ActionNavItemProps) {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      size="icon-sm"
      className={cn(
        "transition-colors",
        "hover:bg-muted hover:text-primary",
        className
      )}
    >
      {icon}
      {value && <small className="ml-1.25">{value}</small>}
    </Button>
  );
}

export default ActionNavItem
