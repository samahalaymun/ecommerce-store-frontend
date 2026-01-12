import { createContext, useContext, useState } from "react";

type AuthContextType = {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  logout: () => void;
};
const AuthContext = createContext<AuthContextType | null>(null);

let accessTokenRef: string | null = null;
export const getAccessToken = () => accessTokenRef;
export const setAccessToken = (token: string) => {
  accessTokenRef = token;
};
export const clearAuth = () => {
  accessTokenRef = null;
};
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [accessToken, _setAccessToken] = useState<string | null>(null)

  const syncToken = (token: string) => {
    setAccessToken(token);
    _setAccessToken(token);
  };

  const logout = () => {
    clearAuth();
    _setAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken: syncToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("AuthContext must be used inside AuthProvider");
  return ctx;
};
export default AuthProvider