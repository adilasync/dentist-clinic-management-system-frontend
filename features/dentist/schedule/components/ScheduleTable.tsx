"use client";
import { useMemo, useState } from "react";
import { Search, Calendar, AlertTriangle } from "lucide-react";
import { fullSchedule } from "../data/data";
import { badgeClass } from "@/features/dentist/shared/utils/badges";

const filters = ["All", "In Progress", "Upcoming", "Confirmed"];
const PER_PAGE = 8;

export function ScheduleTable() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => fullSchedule.filter((s) => {
    const matchesFilter = filter === "All" || s.status === filter;
    const q = query.toLowerCase();
    const matchesQuery = !q || s.patient.toLowerCase().includes(q) || s.procedure.toLowerCase().includes(q);
    return matchesFilter && matchesQuery;
  }), [filter, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const pageRows = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const grouped = useMemo(() => {
    const g: Record<string, typeof fullSchedule> = {};
    pageRows.forEach((r) => { (g[r.date] = g[r.date] || []).push(r); });
    return g;
  }, [pageRows]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-slate-900">All Schedules</h2>
          <p className="text-sm text-slate-500">{filtered.length} appointments</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }}
              placeholder="Search patient or procedure"
              className="w-64 rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
            {filters.map((f) => (
              <button key={f} onClick={() => { setFilter(f); setPage(1); }}
                className={`rounded-md px-3 py-1.5 text-xs transition-colors ${filter === f ? "bg-white text-slate-800 shadow-sm" : "text-slate-600"}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {Object.entries(grouped).map(([date, rows]) => (
        <div key={date} className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-blue-600" />
            <h4 className="text-sm font-semibold text-slate-700">
              {new Date(date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
            </h4>
            <span className="text-xs text-slate-500">· {rows.length} appts</span>
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  {["Time", "Patient", "Procedure", "Duration", "Room", "Status", "Alerts", "Actions"].map((c) => (
                    <th key={c} className="px-3 py-2 text-left font-medium">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-t border-slate-100 hover:bg-slate-50">
                    <td className="px-3 py-2 font-medium text-slate-800">{r.time}</td>
                    <td className="px-3 py-2 text-slate-700">{r.patient} <span className="text-xs text-slate-400">· {r.age}y</span></td>
                    <td className="px-3 py-2 text-slate-700">{r.procedure}</td>
                    <td className="px-3 py-2 text-slate-500">{r.duration}</td>
                    <td className="px-3 py-2 text-slate-500">{r.room}</td>
                    <td className="px-3 py-2"><span className={badgeClass(r.status)}>{r.status}</span></td>
                    <td className="px-3 py-2">
                      {r.alert ? (
                        <span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-xs text-red-700">
                          <AlertTriangle className="h-3 w-3" />{r.alert}
                        </span>
                      ) : <span className="text-xs text-slate-400">—</span>}
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex gap-1">
                        <button className="rounded-lg bg-blue-600 px-2 py-1 text-xs text-white hover:bg-blue-700">Start</button>
                        <button className="rounded-lg border border-slate-200 px-2 py-1 text-xs text-slate-700 hover:bg-white">Chart</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {filtered.length === 0 && <p className="py-8 text-center text-sm text-slate-500">No appointments match your filters.</p>}

      <div className="mt-4 flex items-center justify-between text-sm">
        <p className="text-slate-500">Page {page} of {totalPages}</p>
        <div className="flex gap-1">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50 disabled:opacity-40">Prev</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button key={p} onClick={() => setPage(p)}
              className={`rounded-lg border px-3 py-1.5 ${p === page ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}>
              {p}
            </button>
          ))}
          <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50 disabled:opacity-40">Next</button>
        </div>
      </div>
    </div>
  );
}