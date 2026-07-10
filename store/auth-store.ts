import { create } from "zustand";
import api from "@/lib/axios";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "Patient" | "Dentist" | "Admin";
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  accessToken: string;
  refreshToken: string;
  // Auth
  login: (email: string, password: string, role: "Patient" | "Dentist" | "Admin") => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  // Email Verification
  sendVerifyEmailOtp: () => Promise<void>;
  verifyEmailOtp: (otp: string) => Promise<void>;
  // Password Reset
  sendResetPasswordOtp: (email: string) => Promise<void>;
  resetPassword: (email: string, otp: string, newPassword: string) => Promise<void>;
  googleRedirect: () => Promise<void>;
}

const roleMap: Record<string, "Patient" | "Dentist" | "Admin"> = {
  patient: "Patient",
  dentist: "Dentist",
  admin: "Admin",
  Patient: "Patient",
  Dentist: "Dentist",
  Admin: "Admin",
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  accessToken: "",
  refreshToken: "",

  login: async (email, password, role) => {
    set({ loading: true });
    try {
      if (process.env.NEXT_PUBLIC_BACKEND_URL) {
        const response = await api.post("/api/v1/auth/login", {
          email,
          password,
          role: role.toLowerCase(),
        });

        // response.data.data => { user: { id, name, email, role: role_type }, accessToken, refreshToken }
        const resData = response.data?.data;
        if (resData && resData.user) {
          const apiUser = resData.user;
          const mappedRole = roleMap[apiUser.role] || role;
          set({
            user: { id: apiUser.id, name: apiUser.name, email: apiUser.email, role: mappedRole },
            accessToken: resData.accessToken || "",
            refreshToken: resData.refreshToken || "",
            isAuthenticated: true,
            loading: false,
          });
          return;
        }
      }
      throw new Error("Backend not available or incorrect response structure");
    } catch (error: any) {
      console.warn("Backend auth failed, trying mock login:", error.message || error);

      // Auto-name generation based on email domain/patterns for developer quick-fills
      let demoName = email.split("@")[0];
      if (email === "fahadbhati3600@gmail.com") demoName = "Fahad Bhati";
      else if (email === "sarah.khan@example.com") demoName = "Sarah Khan";
      else if (email === "2024.mohd.bhati@ves.ac.in") demoName = "Mohd Bhati";
      else {
        demoName = demoName.charAt(0).toUpperCase() + demoName.slice(1);
      }

      set({
        user: {
          id: `mock-${role.toLowerCase()}-${Date.now()}`,
          name: demoName,
          email,
          role,
        },
        isAuthenticated: true,
        loading: false,
      });
    }
  },

  register: async (name, email, password) => {
    console.log(name, email, password);

    set({ loading: true });
    try {
      if (process.env.NEXT_PUBLIC_BACKEND_URL) {
        await api.post("/api/v1/auth/register", { name, email, password });
      } else {
        throw new Error("No backend URL configured");
      }
      set({ loading: false });

    } catch (error) {
      console.warn("Backend registration failed, simulating success:", error);
      await new Promise((resolve) => setTimeout(resolve, 800));
      set({ loading: false });
    }
  },

  logout: async () => {
    set({ loading: true });
    try {
      if (process.env.NEXT_PUBLIC_BACKEND_URL) {
        // Logout is a GET request: authRouter.get("/logout", logoutUser);
        await api.get("/api/v1/auth/logout");
      }
    } catch (error) {
      console.warn("Backend logout failed, clearing client state:", error);
    }
    set({ user: null, isAuthenticated: false, accessToken: "", refreshToken: "", loading: false });
  },

  checkAuth: async () => {
    set({ loading: true });
    try {
      if (process.env.NEXT_PUBLIC_BACKEND_URL) {
        // profile is a POST request: authRouter.post("/profile", authUser, getCurrentUser);
        const response = await api.post("/api/v1/auth/profile");
        const apiUser = response.data?.data;
        if (apiUser) {
          const mappedRole = roleMap[apiUser.role_type] || "Patient";
          set({
            user: {
              id: apiUser.id,
              name: apiUser.name,
              email: apiUser.email,
              role: mappedRole,
            },
            isAuthenticated: true,
            loading: false,
          });
          return;
        }
      }
      throw new Error("Backend not available or incorrect response structure");
    } catch (error) {
      set({ user: null, isAuthenticated: false, loading: false });
    }
  },

  sendVerifyEmailOtp: async () => {
    // set({ loading: true });
    try {
      await api.get("/api/v1/auth/send-verify-email-otp");
    } finally {
      set({ loading: false });
    }
  },

  // POST /api/v1/auth/verify-email-otp  body: { otp }  (requires authUser cookie)
  verifyEmailOtp: async (otp: string) => {
    set({ loading: true });
    try {
      await api.post("/api/v1/auth/verify-email-otp", { otp });
    } finally {
      set({ loading: false });
    }
  },

  // ─── PASSWORD RESET ──────────────────────────────────────────────────────────
  // POST /api/v1/auth/send-reset-password-otp  body: { email }
  sendResetPasswordOtp: async (email: string) => {
    // set({ loading: true });
    try {
      await api.post("/api/v1/auth/send-reset-password-otp", { email });
    } finally {
      set({ loading: false });
    }
  },

  // POST /api/v1/auth/reset-password  body: { email, otp, newPassword }
  resetPassword: async (email: string, otp: string, newPassword: string) => {
    set({ loading: true });
    try {
      await api.post("/api/v1/auth/reset-password", { email, otp, newPassword });

    } finally {
      set({ loading: false });
    }
  },

  googleRedirect: async () => {
    window.location.href = "http://localhost:5000/api/v1/auth/oauth/google";
  }


}));
