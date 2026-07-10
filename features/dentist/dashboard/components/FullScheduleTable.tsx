import { AlertTriangle } from "lucide-react";
import { todaySchedule } from "../data/data";
import { badgeClass } from "@/features/dentist/shared/utils/badges";

export function FullScheduleTable() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-4 text-base font-semibold text-slate-900">Today&apos;s Full Schedule</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
              <th className="pb-3 font-medium">Time</th>
              <th className="pb-3 font-medium">Patient</th>
              <th className="pb-3 font-medium">Age</th>
              <th className="pb-3 font-medium">Procedure</th>
              <th className="pb-3 font-medium">Duration</th>
              <th className="pb-3 font-medium">Medical Alert</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {todaySchedule.map((r) => (
              <tr key={r.id} className="border-b border-slate-50 last:border-0">
                <td className="py-4 font-medium text-slate-900">{r.time}</td>
                <td className="py-4 text-slate-700">{r.patient}</td>
                <td className="py-4 text-slate-500">{r.age ?? "—"}</td>
                <td className="py-4 text-slate-700">{r.procedure}</td>
                <td className="py-4 text-slate-500">{r.duration}</td>
                <td className="py-4">
                  {r.alert ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-700">
                      <AlertTriangle className="h-3 w-3" /> {r.alert}
                    </span>
                  ) : <span className="text-xs text-slate-400">None</span>}
                </td>
                <td className="py-4"><span className={badgeClass(r.status)}>{r.status}</span></td>
                <td className="py-4">{r.patient !== "—" && <button className="text-sm text-blue-600 hover:underline">View Chart</button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}