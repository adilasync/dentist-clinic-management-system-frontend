"use client";
import { useState } from "react";
import { UserPlus, RefreshCw as RefreshIcon } from "lucide-react";
import { initialRequests } from "../data/data";
import { RequestStats } from "../components/RequestStats";
import { RequestTabs, RequestTab } from "../components/RequestTabs";
import { RequestCard } from "../components/RequestCard";
import { AssignDoctorModal } from "../components/AssignDoctorModal";
import { RescheduleModal } from "../components/RescheduleModal";
import type { AppointmentRequest, HistoryEntry } from "@/features/receptionist/shared/types";

const nowStamp = () => new Date().toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
const pushHistory = (r: AppointmentRequest, entry: HistoryEntry): AppointmentRequest => ({ ...r, history: [...r.history, entry] });

export function RequestsView() {
  const [requests, setRequests] = useState<AppointmentRequest[]>(initialRequests);
  const [tab, setTab] = useState<RequestTab>("inbox");
  const [assignFor, setAssignFor] = useState<AppointmentRequest | null>(null);
  const [rescheduleFor, setRescheduleFor] = useState<AppointmentRequest | null>(null);

  const counts: Record<RequestTab, number> = {
    inbox: requests.filter((r) => r.status === "Requested" || r.status === "Rejected").length,
    pending: requests.filter((r) => r.status === "Assigned").length,
    reschedule: requests.filter((r) => r.status === "Needs Reschedule").length,
    confirmed: requests.filter((r) => r.status === "Confirmed").length,
  };

  const visible = requests.filter((r) => {
    if (tab === "inbox") return r.status === "Requested" || r.status === "Rejected";
    if (tab === "pending") return r.status === "Assigned";
    if (tab === "reschedule") return r.status === "Needs Reschedule";
    return r.status === "Confirmed";
  });

  const assign = (doctor: string, date: string, time: string) => {
    if (!assignFor) return;
    setRequests((rs) => rs.map((r) => r.id === assignFor.id
      ? pushHistory({ ...r, status: "Assigned", assignedDoctor: doctor, scheduledDate: date, scheduledTime: time }, { when: nowStamp(), by: "Receptionist", action: `Assigned to ${doctor} · ${date} ${time}` })
      : r));
    setAssignFor(null);
  };

  const reschedule = (date: string, time: string) => {
    if (!rescheduleFor) return;
    setRequests((rs) => rs.map((r) => r.id === rescheduleFor.id
      ? pushHistory({ ...r, status: "Confirmed", scheduledDate: date, scheduledTime: time, cancellationReason: null }, { when: nowStamp(), by: "Receptionist", action: `Rescheduled to ${date} ${time}` })
      : r));
    setRescheduleFor(null);
  };

  const cancelRequest = (id: number) =>
    setRequests((rs) => rs.map((r) => r.id === id ? pushHistory({ ...r, status: "Cancelled" }, { when: nowStamp(), by: "Receptionist", action: "Cancelled request" }) : r));

  return (
    <div className="flex flex-col gap-6">
      <RequestStats requests={requests} />

      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <RequestTabs tab={tab} counts={counts} onChange={setTab} />

        {visible.length === 0 ? (
          <p className="py-8 text-center text-sm text-slate-500">Nothing here right now.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {visible.map((r) => (
              <RequestCard key={r.id} req={r} accent={
                tab === "inbox" ? (r.status === "Rejected" ? "red" : "violet") :
                tab === "reschedule" ? "amber" :
                tab === "confirmed" ? "emerald" : "blue"
              }>
                {tab === "inbox" && r.status === "Requested" && (
                  <button onClick={() => setAssignFor(r)} className="flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-xs text-white hover:bg-blue-700">
                    <UserPlus className="h-3 w-3" /> Assign Doctor
                  </button>
                )}
                {tab === "inbox" && r.status === "Rejected" && (
                  <button onClick={() => setAssignFor(r)} className="flex items-center gap-1 rounded-lg bg-violet-600 px-3 py-1.5 text-xs text-white hover:bg-violet-700">
                    <RefreshIcon className="h-3 w-3" /> Assign Another
                  </button>
                )}
                {tab === "reschedule" && (
                  <button onClick={() => setRescheduleFor(r)} className="flex items-center gap-1 rounded-lg bg-amber-600 px-3 py-1.5 text-xs text-white hover:bg-amber-700">
                    <RefreshIcon className="h-3 w-3" /> Reschedule
                  </button>
                )}
                {(tab === "inbox" || tab === "pending") && (
                  <button onClick={() => cancelRequest(r.id)} className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50">Cancel</button>
                )}
                <details className="text-xs text-slate-500">
                  <summary className="cursor-pointer hover:text-slate-700">History ({r.history.length})</summary>
                  <div className="mt-2 w-72 rounded-lg bg-slate-50 p-3">
                    {r.history.map((h, i) => (
                      <div key={i} className="border-l-2 border-slate-200 py-1 pl-3 text-xs">
                        <p className="font-medium text-slate-700">{h.action}</p>
                        <p className="text-slate-400">{h.by} · {h.when}</p>
                      </div>
                    ))}
                  </div>
                </details>
              </RequestCard>
            ))}
          </div>
        )}
      </div>

      {assignFor && <AssignDoctorModal req={assignFor} onClose={() => setAssignFor(null)} onAssign={assign} />}
      {rescheduleFor && <RescheduleModal req={rescheduleFor} onClose={() => setRescheduleFor(null)} onConfirm={reschedule} />}
    </div>
  );
}