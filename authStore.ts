import { create } from "zustand";

interface User {
  id: string;
  email: string;
  name?: string;
  plan: "FREE" | "PREMIUM" | "TEAM";
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoggedIn: false,
  setAuth: (user, token) => {
    if (typeof window !== "undefined") localStorage.setItem("token", token);
    set({ user, token, isLoggedIn: true });
  },
  logout: () => {
    if (typeof window !== "undefined") localStorage.removeItem("token");
    set({ user: null, token: null, isLoggedIn: false });
  },
}));