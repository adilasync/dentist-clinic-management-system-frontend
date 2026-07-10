import { User, AlertTriangle, ClipboardList, CheckCircle2, LucideIcon } from "lucide-react";
import type { ProfileInfo, MedicalHistory } from "../data/data";

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  red: "bg-red-50 text-red-500",
  amber: "bg-amber-50 text-amber-500",
  emerald: "bg-emerald-50 text-emerald-600",
};

function StatCard({ icon: Icon, color, label, value }: { icon: LucideIcon; color: string; label: string; value: string | number }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5">
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="mt-2 text-xl font-semibold text-slate-900">{value}</p>
      </div>
      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${colorMap[color]}`}>
        <Icon className="h-5 w-5" />
      </div>
    </div>
  );
}

export function ProfileStatCards({ info, history }: { info: ProfileInfo; history: MedicalHistory }) {
  const fields = [...Object.values(info), ...Object.values(history)];
  const filled = fields.filter((v) => v && String(v).trim().length > 0).length;
  const completion = Math.round((filled / fields.length) * 100);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <StatCard icon={User} color="blue" label="Profile Complete" value={`${completion}%`} />
      <StatCard icon={AlertTriangle} color="red" label="Allergies" value={history.allergies.split(",").filter(Boolean).length} />
      <StatCard icon={ClipboardList} color="amber" label="Medications" value={history.currentMedications.split(",").filter(Boolean).length} />
      <StatCard icon={CheckCircle2} color="emerald" label="Insurance" value={info.insuranceProvider ? "Active" : "None"} />
    </div>
  );
}