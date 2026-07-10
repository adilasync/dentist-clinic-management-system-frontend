import { labWork } from "../data/data";
import { badgeClass } from "@/features/dentist/shared/utils/badges";

export function LabTable() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-4 text-base font-semibold text-slate-900">Lab Work</h2>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
            <th className="pb-3 font-medium">Lab</th>
            <th className="pb-3 font-medium">Patient</th>
            <th className="pb-3 font-medium">Item Ordered</th>
            <th className="pb-3 font-medium">Date Sent</th>
            <th className="pb-3 font-medium">Expected Return</th>
            <th className="pb-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {labWork.map((r, i) => (
            <tr key={i} className="border-b border-slate-50 last:border-0">
              <td className="py-4 font-medium text-slate-900">{r.lab}</td>
              <td className="py-4 text-slate-600">{r.patient}</td>
              <td className="py-4 text-slate-600">{r.item}</td>
              <td className="py-4 text-slate-600">{r.sent}</td>
              <td className="py-4 text-slate-600">{r.expected}</td>
              <td className="py-4"><span className={badgeClass(r.status)}>{r.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}