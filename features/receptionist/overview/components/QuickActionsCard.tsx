import Link from "next/link";
import { Plus, UserPlus, CreditCard } from "lucide-react";

const actions = [
  { href: "/receptionist/appointments", icon: Plus, iconColor: "text-blue-600", label: "Book new appointment" },
  { href: "/receptionist/patients", icon: UserPlus, iconColor: "text-emerald-600", label: "Register new patient" },
  { href: "/receptionist/payments", icon: CreditCard, iconColor: "text-amber-600", label: "Collect payment" },
];

export function QuickActionsCard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-4 text-base font-semibold text-slate-900">Quick Actions</h2>
      <div className="flex flex-col gap-2">
        {actions.map((a) => (
          <Link key={a.label} href={a.href} className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
            <a.icon className={`h-4 w-4 ${a.iconColor}`} /> {a.label}
          </Link>
        ))}
      </div>
    </div>
  );
}