"use client";
import { useState } from "react";
import { initialAppointments } from "@/features/receptionist/shared/data/shared-appointments";
import { QueueItem } from "../components/QueueItem";
import type { Appointment } from "@/features/receptionist/shared/types";

const activeStatuses: Appointment["status"][] = ["Confirmed", "Checked-In", "Waiting", "In Progress"];

export function CheckInView() {
  const [appts, setAppts] = useState<Appointment[]>(initialAppointments);
  const queue = appts.filter((a) => activeStatuses.includes(a.status));

  const advance = (id: number, next: Appointment["status"]) =>
    setAppts((a) => a.map((x) => (x.id === id ? { ...x, status: next } : x)));

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-semibold text-slate-900">Check-In Queue</h2>
      <p className="mb-4 text-sm text-slate-500">Live status of patients in the waiting area and chairs</p>
      <div className="flex flex-col gap-3">
        {queue.map((p) => <QueueItem key={p.id} appt={p} onAdvance={advance} />)}
        {queue.length === 0 && <p className="text-sm text-slate-500">Queue is clear.</p>}
      </div>
    </div>
  );
}