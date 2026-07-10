"use client";
import { Bell } from "lucide-react";
import { currentUser } from "../data/current-user";

export function Navbar({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-4">
      <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
      <div className="flex items-center gap-4">
        <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">3</span>
        </button>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white">{currentUser.initials}</div>
          <div className="leading-tight">
            <p className="text-sm font-medium text-slate-900">{currentUser.name}</p>
            <span className="text-[11px] font-medium text-blue-600">{currentUser.role}</span>
          </div>
        </div>
        <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">Switch Role</button>
      </div>
    </header>
  );
}