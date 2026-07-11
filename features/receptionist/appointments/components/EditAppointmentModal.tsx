"use client";
import { useState } from "react";
import { X } from "lucide-react";
import type { Appointment } from "@/features/receptionist/shared/types";

const dentists = ["Dr. Emily Smith", "Dr. Marcus Webb", "Priya Lee"];
const statuses: Appointment["status"][] = ["Confirmed", "Checked-In", "Waiting", "In Progress", "Completed", "Cancelled"];

export function EditAppointmentModal({ appt, onClose, onSave }: { appt: Appointment; onClose: () => void; onSave: (a: Appointment) => void }) {
  const [draft, setDraft] = useState(appt);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-slate-900">Edit Appointment</h3>
            <p className="text-sm text-slate-500">{draft.patient}</p>
          </div>
          <button onClick={onClose}><X className="h-4 w-4 text-slate-400" /></button>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <label className="mb-1 block text-xs text-slate-600">Time</label>
            <input value={draft.time} onChange={(e) => setDraft({ ...draft, time: e.target.value })}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-600">Dentist</label>
            <select value={draft.dentist} onChange={(e) => setDraft({ ...draft, dentist: e.target.value })}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">
              {dentists.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs text-slate-600">Status</label>
            <select value={draft.status} onChange={(e) => setDraft({ ...draft, status: e.target.value as Appointment["status"] })}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">
              {statuses.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="flex gap-2 pt-2">
            <button onClick={() => onSave(draft)} className="flex-1 rounded-lg bg-blue-600 py-2 text-sm text-white hover:bg-blue-700">Save Changes</button>
            <button onClick={onClose} className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}