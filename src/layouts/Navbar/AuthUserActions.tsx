import type { UserResponse } from "@/features/authentication/types";
import StackedUser from "./StackedUser";
import InlineUser from "./InlineUser";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "@/features/authentication/services/auth.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "@/features/authentication/context/AuthContext";

type Props = {
  user: UserResponse;
  stacked?: boolean;
};
function AuthUserActions({ user, stacked }: Props) {
  const { logout } = useAuthContext();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      logout();
      queryClient.clear();
    },
    onError: () => {
      logout();
      queryClient.clear();
    },
  });

  const navigate = useNavigate();
  const handleLogout = () => {
    mutate();
    navigate("/");
    console.log("User logged out");
  };
  return stacked ? (
    <StackedUser isLoggingOut={isPending} user={user} onLogout={handleLogout} />
  ) : (
    <InlineUser isLoggingOut={isPending} user={user} onLogout={handleLogout} />
  );
}

export default AuthUserActions;
