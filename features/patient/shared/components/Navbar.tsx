"use client";

import { Bell } from "lucide-react";
import { currentPatient } from "../data/current-patient";
import { useAuthStore } from "@/store/auth-store";
import { useRouter } from "next/navigation";

export function Navbar({ title }: { title: string }) {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const displayName = user ? user.name : currentPatient.name;
  const displayRole = user ? user.role : currentPatient.role;
  const displayInitials = user 
    ? user.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)
    : currentPatient.initials;

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-4">
      <h1 className="text-xl font-semibold text-slate-900">{title}</h1>

      <div className="flex items-center gap-4">
        <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
            3
          </span>
        </button>

        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white">
            {displayInitials}
          </div>
          <div className="leading-tight">
            <p className="text-sm font-medium text-slate-900">{displayName}</p>
            <span className="inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
              {displayRole}
            </span>
          </div>
        </div>

        <button 
          onClick={handleLogout}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}