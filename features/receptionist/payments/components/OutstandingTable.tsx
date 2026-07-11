import type { Appointment } from "@/features/receptionist/shared/types";
import { paymentBadgeClass } from "@/features/receptionist/shared/utils/badges";

export function OutstandingTable({ rows, onMarkPaid }: { rows: Appointment[]; onMarkPaid: (id: number) => void }) {
  return (
    <table className="w-full text-left text-sm">
      <thead>
        <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
          <th className="pb-3 font-medium">Patient</th>
          <th className="pb-3 font-medium">Procedure</th>
          <th className="pb-3 font-medium">Amount</th>
          <th className="pb-3 font-medium">Status</th>
          <th className="pb-3 font-medium">Action</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.id} className="border-b border-slate-50 last:border-0">
            <td className="py-4 font-medium text-slate-900">{r.patient}</td>
            <td className="py-4 text-slate-600">{r.procedure}</td>
            <td className="py-4 font-semibold text-slate-900">${r.amount}</td>
            <td className="py-4"><span className={paymentBadgeClass(r.payment)}>{r.payment}</span></td>
            <td className="py-4">
              <div className="flex gap-1">
                <button onClick={() => onMarkPaid(r.id)} className="rounded-lg bg-emerald-600 px-2 py-1 text-xs text-white hover:bg-emerald-700">Mark Paid</button>
                <button className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-700 hover:bg-slate-200">Send Reminder</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}