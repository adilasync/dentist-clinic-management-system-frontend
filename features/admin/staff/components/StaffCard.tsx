import type { StaffMember } from "@/features/admin/shared/data/types";

const statusStyles: Record<string, string> = {
  "On Duty": "bg-emerald-100 text-emerald-700",
  Break: "bg-slate-100 text-slate-500",
  "Off Duty": "bg-red-100 text-red-600",
};

export function StaffCard({ member }: { member: StaffMember }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-medium text-white">{member.initials}</div>
      <p className="mt-3 text-sm font-semibold text-slate-900">{member.name}</p>
      <p className="text-sm text-blue-600">{member.role}</p>
      <p className="mt-3 text-sm text-slate-500">{member.patientsToday} patients today</p>
      <span className={`mt-3 rounded-full px-3 py-1 text-xs font-medium ${statusStyles[member.status]}`}>{member.status}</span>
    </div>
  );
}