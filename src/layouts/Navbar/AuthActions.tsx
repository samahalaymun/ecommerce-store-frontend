import type { AuthActionsProps } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/features/authentication/services/auth.api";
import { useAuthContext } from "@/features/authentication/context/AuthContext";
import AuthUserActions from "./AuthUserActions";
import type { UserResponse } from "@/features/authentication/types";
import GuestAuthActions from "./GuestAuthActions";

function AuthActions({ className, stacked }: AuthActionsProps) {
  const { accessToken } = useAuthContext();
  const { data } = useQuery<UserResponse>({
    queryKey: ["me"],
    queryFn: getMe,
    enabled: !!accessToken,
    retry: false,
  });

  const isLoggedIn = !!accessToken && !!data;

  if (isLoggedIn) {
    return <AuthUserActions user={data} stacked={stacked} />;
  }
  return (
    <GuestAuthActions className={className} />
  );
}

export default AuthActions;
