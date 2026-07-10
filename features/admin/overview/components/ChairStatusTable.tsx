import { chairStatus } from "../data/data";

const statusStyles: Record<string, string> = {
  "In Progress": "bg-blue-100 text-blue-700",
  Waiting: "bg-amber-100 text-amber-700",
  Completed: "bg-emerald-100 text-emerald-700",
  Available: "bg-slate-100 text-slate-500",
};

export function ChairStatusTable() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-semibold text-slate-900">Chair Status</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
              <th className="pb-3 font-medium">Chair</th>
              <th className="pb-3 font-medium">Assigned To</th>
              <th className="pb-3 font-medium">Patient</th>
              <th className="pb-3 font-medium">Procedure</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            {chairStatus.map((row) => (
              <tr key={row.chair} className="border-b border-slate-50 last:border-0">
                <td className="py-4 font-medium text-slate-900">{row.chair}</td>
                <td className="py-4 text-slate-600">{row.assignedTo}</td>
                <td className="py-4 text-slate-600">{row.patient}</td>
                <td className="py-4 text-slate-600">{row.procedure}</td>
                <td className="py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[row.status]}`}>{row.status}</span></td>
                <td className="py-4 text-slate-500">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}