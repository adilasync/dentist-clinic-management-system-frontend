import { messageThreads } from "../data/data";

export function MessagesList() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-4 text-base font-semibold text-slate-900">Messages</h2>
      <div className="flex flex-col divide-y divide-slate-100">
        {messageThreads.map((m) => (
          <button key={m.id} className="flex items-start gap-3 py-4 text-left first:pt-0 last:pb-0 hover:bg-slate-50">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-sm font-medium text-white">
              {m.patient.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-900">{m.patient}</p>
                <span className="text-xs text-slate-400">{m.time}</span>
              </div>
              <p className={`truncate text-sm ${m.unread ? "font-medium text-slate-800" : "text-slate-500"}`}>{m.lastMessage}</p>
            </div>
            {m.unread && <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />}
          </button>
        ))}
      </div>
    </div>
  );
}