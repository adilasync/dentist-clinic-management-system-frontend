"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import { Home } from "@/components/Home";
import { Login } from "@/components/Login";
import { Register } from "@/components/Register";
import { ForgotPassword } from "@/components/ForgotPassword";
import { VerifyEmail } from "@/components/VerifyEmail";
import { Loader2 } from "lucide-react";
import { GoogleOneTapLogin } from "@/lib/googleOneTapLogin";

type View = "home" | "login" | "register" | "forgot-password" | "verify-email";

export default function RootPage() {
  const [view, setView] = useState<View>("home");
  const { checkAuth, isAuthenticated, user, loading } = useAuthStore();
  const router = useRouter();

  const redirectByRole = (role: string) => {
    if (role === "Patient") router.push("/patient");
    else if (role === "Dentist") router.push("/dentist");
    else if (role === "Admin") router.push("/admin");
  };

  useEffect(() => {
    checkAuth().then(() => {
      const activeUser = useAuthStore.getState().user;
      const isAuth = useAuthStore.getState().isAuthenticated;
      if (isAuth && activeUser) {
        redirectByRole(activeUser.role);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="text-sm font-semibold text-slate-500">Checking session...</span>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <GoogleOneTapLogin />
      {view === "home" && <Home onNavigate={setView} />}
      {view === "login" && <Login onNavigate={setView} />}
      {view === "register" && <Register onNavigate={setView} />}
      {view === "forgot-password" && <ForgotPassword onNavigate={setView} />}
      {view === "verify-email" && (
        <VerifyEmail
          onSuccess={() => {
            const activeUser = useAuthStore.getState().user;
            if (activeUser) redirectByRole(activeUser.role);
          }}
          onSkip={() => {
            const activeUser = useAuthStore.getState().user;
            if (activeUser) redirectByRole(activeUser.role);
          }}
        />
      )}
    </main>
  );
}
