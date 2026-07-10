"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Calendar, Inbox, ClipboardList, FlaskConical, ImageIcon, MessageSquare, User, Settings, Bluetooth } from "lucide-react";
import { currentUser } from "../data/current-user";

const navItems = [
  { label: "My Dashboard", href: "/dentist", icon: LayoutGrid },
  { label: "Schedules", href: "/dentist/schedule", icon: Calendar },
  { label: "Pending Requests", href: "/dentist/requests", icon: Inbox },
  { label: "Patient Notes", href: "/dentist/notes", icon: ClipboardList },
  { label: "Lab Work", href: "/dentist/lab", icon: FlaskConical },
  { label: "X-Rays", href: "/dentist/xrays", icon: ImageIcon },
  { label: "Messages", href: "/dentist/messages", icon: MessageSquare },
  { label: "My Profile", href: "/dentist/profile", icon: User },
  { label: "Settings", href: "/dentist/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col justify-between bg-slate-950 text-slate-200">
      <div>
        <div className="flex items-center gap-2 px-6 py-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-600">
            <Bluetooth className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-semibold text-white">DentaFlow</span>
        </div>
        <nav className="mt-2 flex flex-col gap-1 px-3">
          {navItems.map((item) => {
            const isActive = item.href === "/dentist" ? pathname === "/dentist" : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${isActive ? "bg-cyan-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"}`}>
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="border-t border-slate-800 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600 text-sm font-medium text-white">{currentUser.initials}</div>
          <div className="flex-1 truncate">
            <p className="truncate text-sm font-medium text-white">{currentUser.name}</p>
            <p className="text-xs text-slate-400">{currentUser.role}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}