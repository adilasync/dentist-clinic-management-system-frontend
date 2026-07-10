import { AlertTriangle } from "lucide-react";
import { todaySchedule } from "../data/data";

export function UpcomingAppointments() {
  const upcoming = todaySchedule.filter((a) => a.status === "Upcoming").slice(0, 3);
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 lg:col-span-2">
      <h2 className="mb-4 text-base font-semibold text-slate-900">Upcoming Appointments</h2>
      <ul className="space-y-3">
        {upcoming.map((a) => (
          <li key={a.id} className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
            <div className="w-16 text-sm font-medium text-slate-700">{a.time}</div>
            <div className="flex-1">
              <p className="font-medium text-slate-800">{a.patient}</p>
              <p className="text-sm text-slate-500">{a.procedure}</p>
            </div>
            {a.alert && (
              <span className="flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-700">
                <AlertTriangle className="h-3 w-3" /> {a.alert}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}