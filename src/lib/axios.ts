// src/lib/axios.ts
import axios from "axios";
import {
  getAccessToken,
  setAccessToken,
  clearAuth,
} from "@/features/authentication/context/AuthContext";

const api = axios.create({
  baseURL: import.meta.env.API_URL || "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const authApi = axios.create({
  baseURL: import.meta.env.API_URL || "https://dummyjson.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
authApi.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

authApi.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (originalRequest?.skipAuth) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await authApi.post(
          "/auth/refresh",
          { expiresInMins: 30 },
          { skipAuth: true }
        );
        setAccessToken(res.data.accessToken);
        return authApi(originalRequest);
      } catch {
        clearAuth();
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);


export default api;
