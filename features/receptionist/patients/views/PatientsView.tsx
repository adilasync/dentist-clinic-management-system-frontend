"use client";
import { useState } from "react";
import { Search, UserPlus } from "lucide-react";
import { initialAppointments } from "@/features/receptionist/shared/data/shared-appointments";
import { PatientDirectoryTable } from "../components/PatientDirectoryTable";

export function PatientsView() {
  const [query, setQuery] = useState("");
  const unique = [...new Map(initialAppointments.map((a) => [a.patient, a])).values()];
  const filtered = unique.filter((p) => !query || p.patient.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-900">Patient Directory</h2>
        <button className="flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"><UserPlus className="h-4 w-4" /> Register</button>
      </div>
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search patients..."
          className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm focus:border-blue-500 focus:outline-none" />
      </div>
      <PatientDirectoryTable rows={filtered} />
    </div>
  );
}