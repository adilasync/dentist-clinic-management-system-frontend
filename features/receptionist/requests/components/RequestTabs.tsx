import { Inbox, Clock, RefreshCw, CheckCircle2 } from "lucide-react";

export type RequestTab = "inbox" | "pending" | "reschedule" | "confirmed";

const tabDefs = [
  { id: "inbox" as const, label: "New / Rejected", icon: Inbox },
  { id: "pending" as const, label: "Awaiting Doctor", icon: Clock },
  { id: "reschedule" as const, label: "Needs Reschedule", icon: RefreshCw },
  { id: "confirmed" as const, label: "Confirmed", icon: CheckCircle2 },
];

export function RequestTabs({ tab, counts, onChange }: { tab: RequestTab; counts: Record<RequestTab, number>; onChange: (t: RequestTab) => void }) {
  return (
    <div className="mb-5 flex w-fit flex-wrap gap-1 rounded-lg bg-slate-100 p-1">
      {tabDefs.map((t) => (
        <button key={t.id} onClick={() => onChange(t.id)}
          className={`flex items-center gap-1.5 rounded-md px-4 py-1.5 text-sm ${tab === t.id ? "bg-white text-slate-800 shadow-sm" : "text-slate-600"}`}>
          <t.icon className="h-3.5 w-3.5" /> {t.label}
          <span className="ml-1 rounded-full bg-slate-200 px-1.5 text-xs text-slate-700">{counts[t.id]}</span>
        </button>
      ))}
    </div>
  );
}