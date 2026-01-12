import AuthTabs from "@/features/authentication/components/AuthTabs";
import { useAuthContext } from "@/features/authentication/context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Auth() {
  const { accessToken } = useAuthContext();
  if (accessToken) return <Navigate to="/" />;
  return (
    <div>
      <AuthTabs />
    </div>
  );
}
