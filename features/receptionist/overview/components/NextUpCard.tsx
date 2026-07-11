"use client";
import { Phone } from "lucide-react";
import type { Appointment } from "@/features/receptionist/shared/types";

export function NextUpCard({ appts, onCheckIn }: { appts: Appointment[]; onCheckIn: (id: number) => void }) {
  const next = appts.find((a) => a.status === "Confirmed" || a.status === "Waiting");

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-4 text-base font-semibold text-slate-900">Next Up</h2>
      {next ? (
        <div>
          <p className="text-2xl font-semibold text-slate-900">{next.time}</p>
          <p className="mt-1 text-slate-700">{next.patient}</p>
          <p className="text-sm text-slate-500">{next.procedure} · {next.dentist}</p>
          <div className="mt-3 flex gap-2">
            <button onClick={() => onCheckIn(next.id)} className="flex-1 rounded-lg bg-blue-600 py-2 text-sm text-white hover:bg-blue-700">Check In</button>
            <button className="rounded-lg border border-slate-200 px-3 py-2 text-slate-700 hover:bg-slate-50"><Phone className="h-4 w-4" /></button>
          </div>
        </div>
      ) : <p className="text-sm text-slate-500">No upcoming appointments.</p>}
    </div>
  );
}