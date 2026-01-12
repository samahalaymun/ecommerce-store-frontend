import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { authApi } from "@/lib/axios";

export const useAuthBootstrap = () => {
  const { setAccessToken, logout } = useAuthContext();
  useEffect(() => {
    const bootstrap = async () => {
      try {
        const res = await authApi.post(
          "/auth/refresh",
          { expiresInMins: 30 },
          { skipAuth: true }
        );
        console.log(res.data.accessToken);
        setAccessToken(res.data.accessToken);
      } catch {
        logout();
      }
    };
    bootstrap();
  }, []);
};
