"use client";

import { useState } from "react";
import { appointments } from "../data/data";

const statusStyles: Record<string, string> = {
  Confirmed: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Cancelled: "bg-red-100 text-red-700",
  Completed: "bg-slate-100 text-slate-600",
};

export function AppointmentsTable() {
  const [tab, setTab] = useState<"Upcoming" | "Past">("Upcoming");

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
          {(["Upcoming", "Past"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                tab === t ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          + Book New
        </button>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Time</th>
              <th className="pb-3 font-medium">Doctor</th>
              <th className="pb-3 font-medium">Procedure</th>
              <th className="pb-3 font-medium">Duration</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tab === "Upcoming" ? (
              appointments.map((apt) => (
                <tr key={apt.id} className="border-b border-slate-50 last:border-0">
                  <td className="py-4 font-medium text-slate-900">{apt.date}</td>
                  <td className="py-4 text-slate-600">{apt.time}</td>
                  <td className="py-4 text-slate-600">{apt.doctor}</td>
                  <td className="py-4 text-slate-600">{apt.procedure}</td>
                  <td className="py-4 text-slate-600">{apt.duration}</td>
                  <td className="py-4">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[apt.status]}`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="py-4 whitespace-nowrap">
                    <button className="mr-3 text-blue-600 hover:underline">Reschedule</button>
                    <button className="text-red-500 hover:underline">Cancel</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-8 text-center text-slate-400">
                  No past appointments to show.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}