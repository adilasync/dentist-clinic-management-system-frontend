import { LucideIcon } from "lucide-react";

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  emerald: "bg-emerald-50 text-emerald-600",
  cyan: "bg-cyan-50 text-cyan-600",
  amber: "bg-amber-50 text-amber-600",
  red: "bg-red-50 text-red-500",
};

export function StatCard({ icon: Icon, label, value, sub, color = "blue" }: { icon: LucideIcon; label: string; value: string | number; sub?: string; color?: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="mt-2 text-xl font-semibold text-slate-900">{value}</p>
          {sub && <p className="mt-1 text-xs text-slate-400">{sub}</p>}
        </div>
        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${colorMap[color]}`}><Icon className="h-5 w-5" /></div>
      </div>
    </div>
  );
}