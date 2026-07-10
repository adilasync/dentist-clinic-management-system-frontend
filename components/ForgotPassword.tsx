"use client";

import React, { useState } from "react";
import { useAuthStore } from "@/store/auth-store";
import {
  ArrowLeft,
  Mail,
  Lock,
  KeyRound,
  Loader2,
  CheckCircle,
  AlertCircle,
  Stethoscope,
  RefreshCw,
} from "lucide-react";
import { useRouter } from "next/router";

interface ForgotPasswordProps {
  onNavigate: (view: "home" | "login" | "register" | "forgot-password") => void;
}

type Step = "email" | "reset" | "success";

export function ForgotPassword({ onNavigate }: ForgotPasswordProps) {
  const { sendResetPasswordOtp, resetPassword, loading } = useAuthStore();

  const naviagate = useRouter()

  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // ── Step 1: Send OTP ──────────────────────────────────────────────────────
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (!email) { setErrorMsg("Please enter your email address."); return; }
    setStep("reset");
    try {
      await sendResetPasswordOtp(email);
    } catch (err: any) {
      setErrorMsg(err?.response?.data?.message || err.message || "Failed to send OTP. Please try again.");
    }
  };

  // ── Step 2: Verify OTP + set new password ─────────────────────────────────
  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (!otp) { setErrorMsg("Please enter the OTP sent to your email."); return; }
    if (!newPassword) { setErrorMsg("Please enter a new password."); return; }
    if (newPassword !== confirmPassword) { setErrorMsg("Passwords do not match."); return; }
    try {
      await resetPassword(email, otp, newPassword);
      setStep("success");

    } catch (err: any) {
      setErrorMsg(err?.response?.data?.message || err.message || "Failed to reset password. The OTP may be expired.");
    }
  };

  const handleResendOtp = async () => {
    setErrorMsg("");
    try {
      await sendResetPasswordOtp(email);
      onNavigate("login")
    } catch (err: any) {
      setErrorMsg(err?.response?.data?.message || err.message || "Failed to resend OTP.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-primary selection:text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(circle_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Back Link */}
        <button
          onClick={() => onNavigate("login")}
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors mb-6 group cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Sign In
        </button>

        {/* ── Success Screen ─────────────────────────────────────────────── */}
        {step === "success" && (
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100/80 text-center space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
              <CheckCircle className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Password Reset!</h2>
              <p className="text-sm text-slate-500 mt-2">Your password has been updated successfully. You can now sign in with your new credentials.</p>
            </div>
            <button
              onClick={() => onNavigate("login")}
              className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition-all cursor-pointer"
            >
              Go to Sign In
            </button>
          </div>
        )}

        {/* ── Card ──────────────────────────────────────────────────────── */}
        {step !== "success" && (
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100/80">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md mb-3">
                <KeyRound className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                {step === "email" ? "Forgot Password?" : "Reset Password"}
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                {step === "email"
                  ? "Enter your email and we'll send you a 6-digit OTP."
                  : `Enter the OTP sent to ${email} and your new password.`}
              </p>
            </div>

            {/* Progress indicators */}
            <div className="flex items-center gap-2 mb-6">
              {/* Step 1 bar: primary while on email, emerald once past it */}
              <div className={`h-1.5 flex-1 rounded-full transition-colors ${step === "email" ? "bg-primary" : "bg-emerald-500"}`} />
              {/* Step 2 bar: primary while on reset, slate otherwise (success step hidden) */}
              <div className={`h-1.5 flex-1 rounded-full transition-colors ${step === "reset" ? "bg-primary" : "bg-slate-200"}`} />
            </div>

            {/* Error message */}
            {errorMsg && (
              <div className="mb-4 flex items-start gap-2.5 rounded-xl bg-red-50 p-3.5 border border-red-100 text-xs font-medium text-red-600">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* ── Step 1: Email ────────────────────────────────────────── */}
            {step === "email" && (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="fp-email" className="block text-xs font-semibold text-slate-500">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      id="fp-email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 active:scale-95 disabled:opacity-70 disabled:scale-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? <><Loader2 className="h-4 w-4 animate-spin" />Sending OTP...</> : "Send OTP"}
                </button>
              </form>
            )}

            {/* ── Step 2: OTP + New Password ──────────────────────────── */}
            {step === "reset" && (
              <form onSubmit={handleReset} className="space-y-4">
                {/* OTP Input */}
                <div className="space-y-1">
                  <label htmlFor="fp-otp" className="block text-xs font-semibold text-slate-500">6-Digit OTP</label>
                  <div className="relative">
                    <KeyRound className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      id="fp-otp"
                      type="text"
                      required
                      maxLength={6}
                      placeholder="123456"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                      className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary tracking-widest font-mono"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={loading}
                    className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline mt-1 disabled:opacity-50 cursor-pointer"
                  >
                    <RefreshCw className="h-3 w-3" />
                    Resend OTP
                  </button>
                </div>

                {/* New Password */}
                <div className="space-y-1">
                  <label htmlFor="fp-newpw" className="block text-xs font-semibold text-slate-500">New Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      id="fp-newpw"
                      type="password"
                      required
                      placeholder="••••••••"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-1">
                  <label htmlFor="fp-confirm" className="block text-xs font-semibold text-slate-500">Confirm New Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      id="fp-confirm"
                      type="password"
                      required
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`w-full rounded-xl border py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 transition-colors ${confirmPassword && newPassword !== confirmPassword
                          ? "border-red-300 focus:border-red-400 focus:ring-red-300"
                          : "border-slate-200 focus:border-primary focus:ring-primary"
                        }`}
                    />
                  </div>
                  {confirmPassword && newPassword !== confirmPassword && (
                    <p className="text-[11px] text-red-500 font-medium">Passwords do not match</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 active:scale-95 disabled:opacity-70 disabled:scale-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? <><Loader2 className="h-4 w-4 animate-spin" />Resetting...</> : "Reset Password"}
                </button>
              </form>
            )}

            <p className="text-center text-xs text-slate-500 mt-6">
              Remembered your password?{" "}
              <button
                onClick={() => onNavigate("login")}
                className="text-primary font-semibold hover:underline bg-transparent border-none cursor-pointer"
              >
                Sign In
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
