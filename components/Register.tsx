"use client";

import React, { useState } from "react";
import { useAuthStore } from "@/store/auth-store";
import { 
  User, 
  Mail, 
  Lock, 
  Phone, 
  Calendar, 
  ArrowLeft, 
  Loader2, 
  CheckCircle,
  AlertCircle,
  Stethoscope
} from "lucide-react";

interface RegisterProps {
  onNavigate: (view: "home" | "login" | "register" | "forgot-password" | "verify-email") => void;
}

export function Register({ onNavigate }: RegisterProps) {
  const { register, loading } = useAuthStore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name || !email || !password) {
      setErrorMsg("Name, email, and password are required.");
      return;
    }

    try {
      // Patient is the default role for public registration
      await register(name, email, password);
      setIsSuccess(true);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to create account. Please try again.");
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(circle_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-30 pointer-events-none" />
        
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-xl border border-slate-100/80 text-center relative z-10 space-y-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm border border-emerald-100">
            <CheckCircle className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Account Created!</h2>
            <p className="text-sm text-slate-500">
              Welcome to ApexDental, <span className="font-semibold text-slate-700">{name}</span>. Your patient records have been successfully initialized.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-left text-xs text-slate-500 leading-relaxed">
            <span className="block font-bold text-slate-700 uppercase tracking-wider text-[10px] mb-1">
              Next Steps
            </span>
            Log in to access your Patient Dashboard, where you can view dentist schedules, upload medical files, and book direct appointments.
          </div>

          <button
            onClick={() => onNavigate("login")}
            className="w-full rounded-xl bg-primary py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-95 transition-all cursor-pointer"
          >
            Proceed to Sign In
          </button>
        </div>
      </div>
    );
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
          <div className="text-center mb-6">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md mb-3">
              <Stethoscope className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Create Account</h2>
            <p className="text-sm text-slate-500 mt-1">Register as a patient to schedule appointments</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Error Message */}
            {errorMsg && (
              <div className="flex items-start gap-2.5 rounded-xl bg-red-50 p-3.5 border border-red-100 text-xs font-medium text-red-600">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Name Field */}
            <div className="space-y-1">
              <label htmlFor="name" className="block text-xs font-semibold text-slate-500">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-xs font-semibold text-slate-500">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="space-y-1">
              <label htmlFor="phone" className="block text-xs font-semibold text-slate-500">
                Phone Number (Optional)
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* DOB Field */}
            <div className="space-y-1">
              <label htmlFor="dob" className="block text-xs font-semibold text-slate-500">
                Date of Birth (Optional)
              </label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  id="dob"
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label htmlFor="password" className="block text-xs font-semibold text-slate-500">
                Create Password
              </label>
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
              className="mt-2 w-full rounded-xl bg-primary py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-95 active:scale-95 disabled:opacity-70 disabled:scale-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Register"
              )}
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-xs text-slate-500 mt-6">
            Already have an account?{" "}
            <button 
              onClick={() => onNavigate("login")}
              className="text-primary font-semibold hover:underline bg-transparent border-none cursor-pointer"
            >
              Sign In
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}
