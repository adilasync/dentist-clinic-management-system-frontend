import { Phone } from "lucide-react";
import { myRequests } from "../data/data";

const urgencyStyles: Record<string, string> = {
  "High urgency": "bg-red-100 text-red-600",
  Low: "bg-slate-100 text-slate-600",
  Normal: "bg-blue-100 text-blue-600",
};

const statusStyles: Record<string, string> = {
  Requested: "bg-purple-100 text-purple-700",
  Scheduled: "bg-emerald-100 text-emerald-700",
  Declined: "bg-red-100 text-red-700",
};

export function MyRequestsList() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-semibold text-slate-900">My Requests</h2>
      <p className="mt-0.5 text-sm text-slate-500">Track every request you&apos;ve sent</p>

      <div className="mt-4 flex flex-col gap-3">
        {myRequests.map((req) => (
          <div key={req.id} className="rounded-lg border border-slate-100 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-slate-900">{req.patientName}</span>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[req.status]}`}>
                {req.status}
              </span>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${urgencyStyles[req.urgency]}`}>
                {req.urgency}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{req.reason}</p>
            <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
              <Phone className="h-3 w-3" />
              <span>{req.phone}</span>
              <span>
                · Prefers {req.preferredDate} ({req.preferredTime})
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}