import type { UserResponse } from "@/features/authentication/types";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";
import { Separator } from "@/components/ui/separator";

function StackedUser({
  onLogout,
  user,
  isLoggingOut,
}: {
  onLogout: () => void;
  user: UserResponse;
  isLoggingOut: boolean;
}) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className={cn(
          "flex w-full items-center text-sm  justify-between text-muted-foreground px-2 py-1.5  text-left font-bold",
        )}
        aria-expanded={open}
      >
        <span> hello {user?.username} </span>
        <ChevronDown className={open ? "rotate-180" : "rotate-0"} size={20} />
      </button>

      <div
        className={cn(
          "overflow-hidden overflow-y-scroll transition-[max-height] duration-200",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <ul className="flex flex-col w-full">
          <li>
            <Link
              to={`/profile`}
              className={cn(
                "block w-full px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary",
                pathname === `/profile` && "font-bold text-foreground bg-muted"
              )}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to={`/orders`}
              className={cn(
                "block w-full px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary",
                pathname === `/orders` && "font-bold text-foreground bg-muted"
              )}
            >
              Orders
            </Link>
          </li>
          <Separator />
          <li>
            <li
              onClick={onLogout}
              className={cn(
                "block w-full px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary",
                pathname === `/profile` && "font-bold text-foreground bg-muted"
              )}
            >
              {isLoggingOut && <Spinner />}
              Logout
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StackedUser;
