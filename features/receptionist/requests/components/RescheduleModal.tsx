"use client";
import { useState } from "react";
import { X, AlertCircle } from "lucide-react";
import type { AppointmentRequest } from "@/features/receptionist/shared/types";

export function RescheduleModal({ req, onClose, onConfirm }: { req: AppointmentRequest; onClose: () => void; onConfirm: (date: string, time: string) => void }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-slate-900">Reschedule {req.patient}</h3>
          <button onClick={onClose}><X className="h-4 w-4 text-slate-500" /></button>
        </div>
        <p className="mb-4 flex items-center gap-1 rounded-lg bg-amber-50 p-2 text-xs text-amber-700">
          <AlertCircle className="h-3 w-3" /> {req.cancellationReason}
        </p>
        <p className="mb-4 text-sm text-slate-600">Doctor: <b>{req.assignedDoctor}</b></p>
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-xs font-medium uppercase text-slate-600">New date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium uppercase text-slate-600">New time</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-100">Cancel</button>
          <button onClick={() => date && time && onConfirm(date, time)} disabled={!date || !time}
            className="rounded-lg bg-amber-600 px-4 py-2 text-sm text-white hover:bg-amber-700 disabled:opacity-50">
            Confirm New Slot
          </button>
        </div>
      </div>
    </div>
  );
}