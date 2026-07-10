"use client";

import React, { useState, useEffect } from "react";
import { useAuthStore } from "@/store/auth-store";
import {
  Mail,
  KeyRound,
  Loader2,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

interface VerifyEmailProps {
  /** Called when verification succeeds so parent can navigate to the dashboard */
  onSuccess: () => void;
  /** Called if the user wants to skip for now */
  onSkip?: () => void;
}

export function VerifyEmail({ onSuccess, onSkip }: VerifyEmailProps) {
  const { sendVerifyEmailOtp, verifyEmailOtp, loading, user } = useAuthStore();

  const [otp, setOtp] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // Countdown timer for resend button
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleSendOtp = async () => {
    setErrorMsg("");
    try {
      await sendVerifyEmailOtp();
      setOtpSent(true);
      setCountdown(60);
    } catch (err: any) {
      setErrorMsg(err?.response?.data?.message || err.message || "Failed to send OTP.");
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (!otp || otp.length < 6) { setErrorMsg("Please enter the 6-digit OTP."); return; }
    try {
      await verifyEmailOtp(otp);
      setIsSuccess(true);
      setTimeout(onSuccess, 1800);
    } catch (err: any) {
      setErrorMsg(err?.response?.data?.message || err.message || "Invalid or expired OTP.");
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-xl border border-slate-100/80 text-center space-y-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 animate-pulse">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Email Verified!</h2>
            <p className="text-sm text-slate-500 mt-2">Your email has been successfully verified. Redirecting you to your dashboard...</p>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full animate-[progress_1.8s_linear_forwards]" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-primary selection:text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(circle_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100/80">

          {/* Header */}
          <div className="text-center mb-6">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-md mb-3">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Verify Your Email</h2>
            {user && (
              <p className="text-sm text-slate-500 mt-1">
                We'll send a verification code to{" "}
                <span className="font-semibold text-slate-700">{user.email}</span>
              </p>
            )}
          </div>

          {/* Error */}
          {errorMsg && (
            <div className="mb-4 flex items-start gap-2.5 rounded-xl bg-red-50 p-3.5 border border-red-100 text-xs font-medium text-red-600">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Step: Get OTP */}
          {!otpSent && (
            <div className="space-y-4">
              <div className="rounded-2xl bg-blue-50 border border-blue-100 p-4 text-sm text-blue-700 leading-relaxed">
                <span className="font-semibold block mb-1">Why verify?</span>
                Verified email addresses let us send you appointment reminders, lab results, and account security alerts.
              </div>
              <button
                onClick={handleSendOtp}
                disabled={loading}
                className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 active:scale-95 disabled:opacity-70 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? <><Loader2 className="h-4 w-4 animate-spin" />Sending...</> : "Send Verification OTP"}
              </button>
            </div>
          )}

          {/* Step: Enter OTP */}
          {otpSent && (
            <form onSubmit={handleVerify} className="space-y-4">
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-3 text-xs text-emerald-700 font-medium text-center">
                OTP sent! Check your inbox and enter the code below.
              </div>

              <div className="space-y-1">
                <label htmlFor="ve-otp" className="block text-xs font-semibold text-slate-500">
                  6-Digit Verification Code
                </label>
                <div className="relative">
                  <KeyRound className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    id="ve-otp"
                    type="text"
                    required
                    maxLength={6}
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-center text-lg font-mono font-semibold tracking-widest text-slate-900 placeholder:text-slate-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    autoFocus
                  />
                </div>
              </div>

              {/* Resend */}
              <div className="text-center">
                {countdown > 0 ? (
                  <span className="text-xs text-slate-400">Resend OTP in <span className="font-semibold text-slate-600">{countdown}s</span></span>
                ) : (
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={loading}
                    className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline disabled:opacity-50 cursor-pointer"
                  >
                    <RefreshCw className="h-3 w-3" />
                    Resend OTP
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || otp.length < 6}
                className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 active:scale-95 disabled:opacity-60 disabled:scale-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? <><Loader2 className="h-4 w-4 animate-spin" />Verifying...</> : "Verify Email"}
              </button>
            </form>
          )}

          {/* Skip */}
          {onSkip && (
            <p className="text-center text-xs text-slate-400 mt-6">
              <button
                onClick={onSkip}
                className="hover:text-slate-600 hover:underline transition-colors cursor-pointer"
              >
                Skip for now →
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
