import { recentActivity } from "../data/data";

export function RecentActivityCard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-semibold text-slate-900">Recent Activity</h2>
      <ul className="mt-4 space-y-4">
        {recentActivity.map((item) => (
          <li key={item.id} className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <div>
              <p className="text-sm text-slate-800">{item.description}</p>
              <p className="text-xs text-slate-400">{item.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}