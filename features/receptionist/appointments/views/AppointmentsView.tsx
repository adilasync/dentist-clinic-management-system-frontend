"use client";
import { useState } from "react";
import { Search, Plus } from "lucide-react";
import { initialAppointments } from "@/features/receptionist/shared/data/shared-appointments";
import { AppointmentFilters } from "../components/AppointmentFilters";
import { AppointmentsTable } from "../components/AppointmentsTable";
import { EditAppointmentModal } from "../components/EditAppointmentModal";
import type { Appointment } from "@/features/receptionist/shared/types";

export function AppointmentsView() {
  const [appts, setAppts] = useState<Appointment[]>(initialAppointments);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<Appointment | null>(null);

  const filtered = appts.filter((a) => {
    const matchFilter = filter === "All" || a.status === filter;
    const q = query.toLowerCase();
    const matchQuery = !q || a.patient.toLowerCase().includes(q) || a.dentist.toLowerCase().includes(q);
    return matchFilter && matchQuery;
  });

  const checkIn = (id: number) => setAppts((a) => a.map((x) => (x.id === id ? { ...x, status: "Checked-In" } : x)));
  const cancel = (id: number) => setAppts((a) => a.map((x) => (x.id === id ? { ...x, status: "Cancelled" } : x)));
  const saveEdit = (updated: Appointment) => { setAppts((a) => a.map((x) => (x.id === updated.id ? updated : x))); setEditing(null); };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">Today&apos;s Appointments</h2>
          <p className="text-sm text-slate-500">Update, reschedule, or cancel appointments</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search patient or dentist"
              className="rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm focus:border-blue-500 focus:outline-none" />
          </div>
          <button className="flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"><Plus className="h-4 w-4" /> New</button>
        </div>
      </div>

      <AppointmentFilters filter={filter} onChange={setFilter} />
      <AppointmentsTable rows={filtered} onCheckIn={checkIn} onEdit={setEditing} onCancel={cancel} />

      {editing && <EditAppointmentModal appt={editing} onClose={() => setEditing(null)} onSave={saveEdit} />}
    </div>
  );
}