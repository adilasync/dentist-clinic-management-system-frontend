import type { Appointment } from "@/features/receptionist/shared/types";
import { paymentBadgeClass } from "@/features/receptionist/shared/utils/badges";

export function PatientDirectoryTable({ rows }: { rows: Appointment[] }) {
  return (
    <table className="w-full text-left text-sm">
      <thead>
        <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
          <th className="pb-3 font-medium">Patient</th>
          <th className="pb-3 font-medium">Phone</th>
          <th className="pb-3 font-medium">Assigned Dentist</th>
          <th className="pb-3 font-medium">Last Procedure</th>
          <th className="pb-3 font-medium">Payment</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.id} className="border-b border-slate-50 last:border-0">
            <td className="py-4 font-medium text-slate-900">{r.patient}</td>
            <td className="py-4 text-slate-600">{r.phone}</td>
            <td className="py-4 text-slate-600">{r.dentist}</td>
            <td className="py-4 text-slate-600">{r.procedure}</td>
            <td className="py-4"><span className={paymentBadgeClass(r.payment)}>{r.payment}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}