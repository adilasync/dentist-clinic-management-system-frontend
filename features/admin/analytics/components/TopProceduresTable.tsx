import { topProcedures } from "../data/data";

export function TopProceduresTable() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-semibold text-slate-900">Top 5 Procedures</h2>
      <table className="mt-4 w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
            <th className="pb-3 font-medium">Procedure</th>
            <th className="pb-3 font-medium">Count</th>
            <th className="pb-3 font-medium">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {topProcedures.map((p) => (
            <tr key={p.procedure} className="border-b border-slate-50 last:border-0">
              <td className="py-4 font-medium text-slate-900">{p.procedure}</td>
              <td className="py-4 text-slate-600">{p.count}</td>
              <td className="py-4 text-slate-600">${p.revenue.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}