import type { Appointment } from "@/features/receptionist/shared/types";
import { badgeClass } from "@/features/receptionist/shared/utils/badges";

const nextAction: Record<string, { label: string; color: string; next: Appointment["status"] }> = {
  Confirmed: { label: "Check In", color: "bg-emerald-600 hover:bg-emerald-700", next: "Checked-In" },
  "Checked-In": { label: "Seat in Waiting", color: "bg-amber-500 hover:bg-amber-600", next: "Waiting" },
  Waiting: { label: "Send to Chair", color: "bg-blue-600 hover:bg-blue-700", next: "In Progress" },
  "In Progress": { label: "Mark Complete", color: "bg-slate-700 hover:bg-slate-800", next: "Completed" },
};

export function QueueItem({ appt, onAdvance }: { appt: Appointment; onAdvance: (id: number, next: Appointment["status"]) => void }) {
  const action = nextAction[appt.status];
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
          {appt.patient.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <p className="font-medium text-slate-900">{appt.patient}</p>
          <p className="text-xs text-slate-500">{appt.time} · {appt.dentist} · {appt.procedure}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className={badgeClass(appt.status)}>{appt.status}</span>
        {action && (
          <button onClick={() => onAdvance(appt.id, action.next)} className={`rounded-lg px-3 py-1.5 text-xs text-white ${action.color}`}>
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
}