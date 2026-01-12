import type { UserResponse } from "@/features/authentication/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
function InlineUser({
  onLogout,
  user,
  isLoggingOut,
}: {
  onLogout: () => void;
  user: UserResponse;
  isLoggingOut: boolean;
}) {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span
          className={cn(
            "cursor-pointer text-sm  text-muted-foreground  hover:text-primary hover:bg-muted flex items-center gap-1.25 px-2 py-1.5 rounded-md font-bold transition-colors"
          )}
        >
          <User size={16} />
          <span className="font-bold">Hello {user.username}</span>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem
          onClick={() => {
            navigate("/profile");
          }}
        >
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            navigate("/orders");
          }}
        >
          Orders
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            onLogout();
          }}
        >
          {isLoggingOut && <Spinner />}
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default InlineUser;
