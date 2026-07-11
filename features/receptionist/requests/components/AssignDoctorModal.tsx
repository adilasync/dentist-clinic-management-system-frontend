"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { doctors, getDoctorSlotsForDate } from "../data/data";
import { badgeClass } from "@/features/receptionist/shared/utils/badges";
import type { AppointmentRequest } from "@/features/receptionist/shared/types";

export function AssignDoctorModal({ req, onClose, onAssign }: { req: AppointmentRequest; onClose: () => void; onAssign: (doctor: string, date: string, time: string) => void }) {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState(req.preferredDate || "");
  const [time, setTime] = useState("");

  const selectDoctor = (name: string) => {
    setDoctor((prev) => (prev === name ? "" : name));
    setTime("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="w-full max-w-lg rounded-xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-slate-900">Assign doctor for {req.patient}</h3>
          <button onClick={onClose}><X className="h-4 w-4 text-slate-500" /></button>
        </div>
        <p className="mb-3 text-sm text-slate-600">{req.reason}</p>
        {req.rejectedDoctors.length > 0 && <p className="mb-3 text-xs text-red-600">Already rejected by: {req.rejectedDoctors.join(", ")}</p>}

        <div className="mb-4 flex max-h-80 flex-col gap-2 overflow-y-auto">
          {doctors.filter((d) => !req.rejectedDoctors.includes(d.name)).map((d) => {
            const isPicked = doctor === d.name;
            const slots = getDoctorSlotsForDate(d.name, date);
            return (
              <div key={d.name}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${isPicked ? "border-blue-500 bg-blue-50 shadow-sm" : "border-slate-200 hover:bg-slate-50"} ${!d.available ? "opacity-50" : ""}`}>
                <button type="button" disabled={!d.available} onClick={() => selectDoctor(d.name)}
                  className="flex w-full items-center justify-between gap-3 p-3 text-left">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${isPicked ? "border-blue-600" : "border-slate-300"}`}>
                      {isPicked && <span className="h-2 w-2 rounded-full bg-blue-600" />}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{d.name}</p>
                      <p className="text-xs text-slate-500">{d.specialty}</p>
                    </div>
                  </div>
                  <span className={badgeClass(d.available ? "Available" : "Off")}>{d.available ? `${d.todaySlots} slots` : "Unavailable"}</span>
                </button>

                <div className={`grid transition-all duration-300 ease-out ${isPicked ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="border-t border-blue-100 px-3 pb-3 pt-2">
                      {!date ? (
                        <p className="text-xs italic text-slate-500">Pick a date below to see available time slots.</p>
                      ) : slots.length === 0 ? (
                        <p className="text-xs text-red-600">
                          Not available on {new Date(date + "T00:00:00").toLocaleDateString(undefined, { weekday: "long" })}.
                        </p>
                      ) : (
                        <>
                          <p className="mb-2 text-[11px] uppercase tracking-wide text-slate-500">
                            Slots for {new Date(date + "T00:00:00").toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {slots.map((s) => (
                              <button key={s} type="button" onClick={() => setTime(s)}
                                className={`rounded-lg border px-2.5 py-1 text-xs transition ${time === s ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-blue-400"}`}>
                                {s}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-xs font-medium uppercase text-slate-600">Appointment Date</label>
          <input type="date" value={date} onChange={(e) => { setDate(e.target.value); setTime(""); }}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          {doctor && date && !time && (
            <p className="mt-1.5 text-xs text-slate-500">Now pick a time slot from {doctor}&apos;s card above.</p>
          )}
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-100">Cancel</button>
          <button onClick={() => doctor && date && time && onAssign(doctor, date, time)} disabled={!doctor || !date || !time}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 disabled:opacity-50">
            Send to Doctor
          </button>
        </div>
      </div>
    </div>
  );
}