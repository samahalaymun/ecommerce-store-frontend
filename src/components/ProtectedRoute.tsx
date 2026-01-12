import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "@/features/authentication/context/AuthContext";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { accessToken } = useAuthContext();
  const location = useLocation();

  if (!accessToken) {
    return <Navigate to="/auth?tab=login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
