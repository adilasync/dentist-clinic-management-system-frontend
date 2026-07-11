import Link from "next/link";
import type { Appointment } from "@/features/receptionist/shared/types";
import { badgeClass, paymentBadgeClass } from "@/features/receptionist/shared/utils/badges";

export function TodayGlanceTable({ appts }: { appts: Appointment[] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 lg:col-span-2">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">Today at a Glance</h2>
          <p className="text-sm text-slate-500">Quick view of today&apos;s full schedule</p>
        </div>
        <Link href="/receptionist/appointments" className="text-sm text-blue-600 hover:underline">View all →</Link>
      </div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
            <th className="pb-3 font-medium">Time</th>
            <th className="pb-3 font-medium">Patient</th>
            <th className="pb-3 font-medium">Dentist</th>
            <th className="pb-3 font-medium">Status</th>
            <th className="pb-3 font-medium">Payment</th>
          </tr>
        </thead>
        <tbody>
          {appts.slice(0, 6).map((r) => (
            <tr key={r.id} className="border-b border-slate-50 last:border-0">
              <td className="py-4 font-medium text-slate-900">{r.time}</td>
              <td className="py-4 text-slate-700">{r.patient}</td>
              <td className="py-4 text-slate-700">{r.dentist}</td>
              <td className="py-4"><span className={badgeClass(r.status)}>{r.status}</span></td>
              <td className="py-4"><span className={paymentBadgeClass(r.payment)}>{r.payment}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}