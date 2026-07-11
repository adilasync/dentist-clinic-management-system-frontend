import { Edit3, XCircle } from "lucide-react";
import type { Appointment } from "@/features/receptionist/shared/types";
import { badgeClass, paymentBadgeClass } from "@/features/receptionist/shared/utils/badges";

interface Props {
  rows: Appointment[];
  onCheckIn: (id: number) => void;
  onEdit: (row: Appointment) => void;
  onCancel: (id: number) => void;
}

export function AppointmentsTable({ rows, onCheckIn, onEdit, onCancel }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[900px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
            <th className="pb-3 font-medium">Time</th>
            <th className="pb-3 font-medium">Patient</th>
            <th className="pb-3 font-medium">Phone</th>
            <th className="pb-3 font-medium">Dentist</th>
            <th className="pb-3 font-medium">Procedure</th>
            <th className="pb-3 font-medium">Status</th>
            <th className="pb-3 font-medium">Payment</th>
            <th className="pb-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const locked = r.status === "Cancelled" || r.status === "Completed";
            return (
              <tr key={r.id} className="border-b border-slate-50 last:border-0">
                <td className="py-4 font-medium text-slate-900">{r.time}</td>
                <td className="py-4 text-slate-700">{r.patient}</td>
                <td className="py-4 text-xs text-slate-500">{r.phone}</td>
                <td className="py-4 text-slate-700">{r.dentist}</td>
                <td className="py-4 text-slate-700">{r.procedure}</td>
                <td className="py-4"><span className={badgeClass(r.status)}>{r.status}</span></td>
                <td className="py-4"><span className={paymentBadgeClass(r.payment)}>{r.payment}</span></td>
                <td className="py-4">
                  <div className="flex gap-1">
                    <button onClick={() => onCheckIn(r.id)} disabled={locked} className="rounded-lg bg-emerald-50 px-2 py-1 text-xs text-emerald-700 hover:bg-emerald-100 disabled:opacity-40">Check In</button>
                    <button onClick={() => onEdit(r)} className="flex items-center gap-1 rounded-lg bg-blue-50 px-2 py-1 text-xs text-blue-700 hover:bg-blue-100"><Edit3 className="h-3 w-3" /> Edit</button>
                    <button onClick={() => onCancel(r.id)} disabled={locked} className="flex items-center gap-1 rounded-lg bg-red-50 px-2 py-1 text-xs text-red-700 hover:bg-red-100 disabled:opacity-40"><XCircle className="h-3 w-3" /> Cancel</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}