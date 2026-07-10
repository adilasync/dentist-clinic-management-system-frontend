import { Plus, FlaskConical, MessageSquare, ImageIcon } from "lucide-react";

const actions = [
  { icon: Plus, label: "New Note" },
  { icon: FlaskConical, label: "View Lab Results" },
  { icon: MessageSquare, label: "Message Patient" },
  { icon: ImageIcon, label: "Request X-Ray" },
];

export function QuickActionsCard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-4 text-base font-semibold text-slate-900">Quick Actions</h2>
      <div className="flex flex-col gap-2">
        {actions.map((a) => (
          <button key={a.label} className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-2.5 text-sm text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700">
            <a.icon className="h-4 w-4" /> {a.label}
          </button>
        ))}
      </div>
    </div>
  );
}