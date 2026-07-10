"use client";
import { useState } from "react";
import { ThumbsUp, ThumbsDown, CheckCircle2, AlertTriangle } from "lucide-react";
import { initialRequests } from "../data/data";
import { RequestStats } from "../components/RequestStats";
import { RequestCard } from "../components/RequestCard";
import type { AppointmentRequest } from "@/features/dentist/shared/types";

export function RequestsView() {
  const [requests, setRequests] = useState<AppointmentRequest[]>(initialRequests);

  const awaiting = requests.filter((r) => r.status === "Assigned");
  const confirmed = requests.filter((r) => r.status === "Confirmed");

  const accept = (id: number) => setRequests((rs) => rs.map((r) => (r.id === id ? { ...r, status: "Confirmed" } : r)));
  const reject = (id: number) => setRequests((rs) => rs.filter((r) => r.id !== id));
  const complete = (id: number) => setRequests((rs) => rs.map((r) => (r.id === id ? { ...r, status: "Completed" } : r)));

  return (
    <div className="flex flex-col gap-6">
      <RequestStats requests={requests} />

      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-900">Awaiting Your Response</h2>
        <p className="mb-4 text-sm text-slate-500">Requests the receptionist routed to you</p>
        {awaiting.length === 0 ? (
          <p className="text-sm text-slate-500">All caught up — no pending requests.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {awaiting.map((r) => (
              <RequestCard key={r.id} req={r} accent="blue">
                <div className="flex gap-2">
                  <button onClick={() => accept(r.id)} className="flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs text-white hover:bg-emerald-700">
                    <ThumbsUp className="h-3 w-3" /> Accept
                  </button>
                  <button onClick={() => reject(r.id)} className="flex items-center gap-1 rounded-lg border border-red-200 px-3 py-1.5 text-xs text-red-600 hover:bg-red-50">
                    <ThumbsDown className="h-3 w-3" /> Reject
                  </button>
                </div>
              </RequestCard>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-semibold text-slate-900">Confirmed Appointments</h2>
        <p className="mb-4 text-sm text-slate-500">Mark completed to schedule the next visit in the treatment plan</p>
        {confirmed.length === 0 ? (
          <p className="text-sm text-slate-500">No confirmed appointments yet.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {confirmed.map((r) => (
              <RequestCard key={r.id} req={r} accent="emerald">
                <div className="flex flex-wrap justify-end gap-2">
                  <button onClick={() => complete(r.id)} className="flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-xs text-white hover:bg-blue-700">
                    <CheckCircle2 className="h-3 w-3" /> Complete{r.treatmentId ? " & Plan Next" : ""}
                  </button>
                  <button className="flex items-center gap-1 rounded-lg border border-amber-200 px-3 py-1.5 text-xs text-amber-700 hover:bg-amber-50">
                    <AlertTriangle className="h-3 w-3" /> Emergency Cancel
                  </button>
                </div>
              </RequestCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}