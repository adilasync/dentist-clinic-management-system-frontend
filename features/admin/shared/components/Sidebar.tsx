"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Calendar, Users, Armchair, DollarSign, BarChart3, Settings, Bluetooth } from "lucide-react";
import { currentUser } from "../data/current-user";
import { useAuthStore } from "@/store/auth-store";

const navItems = [
  { label: "Overview", href: "/admin", icon: LayoutGrid },
  { label: "Appointments", href: "/admin/appointments", icon: Calendar },
  { label: "Staff", href: "/admin/staff", icon: Users },
  { label: "Chair Status", href: "/admin/chair-status", icon: Armchair },
  { label: "Billing", href: "/admin/billing", icon: DollarSign },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuthStore();

  const displayName = user ? user.name : currentUser.name;
  const displayRole = user ? user.role : currentUser.role;
  const displayInitials = user 
    ? user.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)
    : currentUser.initials;

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col justify-between bg-slate-950 text-slate-200">
      <div>
        <div className="flex items-center gap-2 px-6 py-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <Bluetooth className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-semibold text-white">DentaFlow</span>
        </div>
        <nav className="mt-2 flex flex-col gap-1 px-3">
          {navItems.map((item) => {
            const isActive = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${isActive ? "bg-blue-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"}`}>
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="border-t border-slate-800 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-medium text-white">{displayInitials}</div>
          <div className="flex-1 truncate">
            <p className="truncate text-sm font-medium text-white">{displayName}</p>
            <p className="text-xs text-slate-400">{displayRole}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}