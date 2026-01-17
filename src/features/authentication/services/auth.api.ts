import api, { authApi } from "@/lib/axios";
import type { UserResponse } from "../types";

export const login = (data: { username: string; password: string }) =>
  api.post("/auth/login", {
    ...data,
    expiresInMins: 30,
  });
  
export const getMe = async (): Promise<UserResponse> => {
  const res = await authApi.get<UserResponse>("/auth/me");
  return res.data;
};
export const logoutApi = () => authApi.post("/auth/logout");