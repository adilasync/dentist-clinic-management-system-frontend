"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import {
  User,
  Stethoscope,
  Shield,
  ArrowLeft,
  Mail,
  Lock,
  Loader2,
  Sparkles,
  AlertCircle
} from "lucide-react";

interface LoginProps {
  onNavigate: (view: "home" | "login" | "register" | "forgot-password" | "verify-email") => void;
}

export function Login({ onNavigate }: LoginProps) {
  const router = useRouter();
  const { login, loading, googleRedirect } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"Patient" | "Dentist" | "Admin">("Patient");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email || !password) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    try {
      await login(email, password, role);
      // Route based on role
      if (role === "Patient") {
        router.push("/patient");
      } else if (role === "Dentist") {
        router.push("/dentist");
      } else if (role === "Admin") {
        router.push("/admin");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to sign in. Please try again.");
    }
  };

  // Quick fill logins for testing and ease-of-use
  const handleQuickFill = (presetRole: "Patient" | "Dentist" | "Admin") => {
    setRole(presetRole);
    if (presetRole === "Patient") {
      setEmail("fahadbhati3600@gmail.com");
      setPassword("123456");
    } else if (presetRole === "Dentist") {
      setEmail("sarah.khan@example.com");
      setPassword("123");
    } else if (presetRole === "Admin") {
      setEmail("2024.mohd.bhati@ves.ac.in");
      setPassword("123456");
    }
  };

  const handleGoogleLogin = async () => {
    console.log("google login ...");

    googleRedirect();
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-primary selection:text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(circle_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="w-full max-w-md relative z-10">

        {/* Back Link */}
        <button
          onClick={() => onNavigate("home")}
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors mb-6 group cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Homepage
        </button>

        {/* Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100/80">

          {/* Logo / Header */}
          <div className="text-center mb-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md mb-3">
              <Stethoscope className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Welcome Back</h2>
            <p className="text-sm text-slate-500 mt-1">Sign in to your ApexDental account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Role Tabs Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Select Your Role
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: "Patient", icon: User },
                  { name: "Dentist", icon: Stethoscope },
                  { name: "Admin", icon: Shield }
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = role === item.name;
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setRole(item.name as any)}
                      className={`flex flex-col items-center gap-1.5 py-3.5 rounded-xl border text-xs font-semibold tracking-wide transition-all ${isActive
                        ? "border-primary bg-primary/5 text-primary shadow-sm"
                        : "border-slate-200 text-slate-500 hover:bg-slate-50"
                        }`}
                    >
                      <Icon className={`h-4.5 w-4.5 ${isActive ? "text-primary animate-pulse" : "text-slate-400"}`} />
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="flex items-start gap-2.5 rounded-xl bg-red-50 p-3.5 border border-red-100 text-xs font-medium text-red-600">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-semibold text-slate-500">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-xs font-semibold text-slate-500">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => onNavigate("forgot-password")}
                  className="text-xs text-primary font-semibold hover:underline cursor-pointer bg-transparent border-none"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-primary py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-95 active:scale-95 disabled:opacity-70 disabled:scale-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full rounded-xl mt-3 border border-primary bg-white text-primary py-3 text-center text-sm font-semibold text-primary shadow-sm hover:opacity-95 active:scale-95 disabled:opacity-70 disabled:scale-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sign In With Google
              </>
            ) : (
              "Sign In With Google"
            )}
          </button>

          {/* Quick Fills */}
          <div className="mt-6 border-t border-slate-100 pt-6">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center mb-3">
              Developer Demo Shortcuts
            </span>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => handleQuickFill("Patient")}
                className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-[11px] font-medium text-blue-700 hover:bg-blue-100 transition-all cursor-pointer"
              >
                Patient Quick-Auth
              </button>
              <button
                onClick={() => handleQuickFill("Dentist")}
                className="rounded-lg bg-purple-50 px-2.5 py-1.5 text-[11px] font-medium text-purple-700 hover:bg-purple-100 transition-all cursor-pointer"
              >
                Dentist Quick-Auth
              </button>
              <button
                onClick={() => handleQuickFill("Admin")}
                className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] font-medium text-slate-700 hover:bg-slate-200 transition-all cursor-pointer"
              >
                Admin Quick-Auth
              </button>
            </div>
          </div>

          {/* Register Link */}
          <p className="text-center text-xs text-slate-500 mt-6">
            Don't have an account?{" "}
            <button
              onClick={() => onNavigate("register")}
              className="text-primary font-semibold hover:underline bg-transparent border-none cursor-pointer"
            >
              Sign up
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}
