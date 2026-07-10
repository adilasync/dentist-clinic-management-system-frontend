"use client";
import { useState } from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { initialNotes } from "../data/data";
import type { ClinicalNote } from "@/features/dentist/shared/types";

export function NotesTable() {
  const [notes, setNotes] = useState<ClinicalNote[]>(initialNotes);
  const sign = (id: number) => setNotes((ns) => ns.map((n) => (n.id === id ? { ...n, signed: true } : n)));

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="mb-4 text-base font-semibold text-slate-900">Recent Clinical Notes</h2>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
            <th className="pb-3 font-medium">Patient</th>
            <th className="pb-3 font-medium">Date</th>
            <th className="pb-3 font-medium">Procedure</th>
            <th className="pb-3 font-medium">Status</th>
            <th className="pb-3 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((n) => (
            <tr key={n.id} className="border-b border-slate-50 last:border-0">
              <td className="py-4 font-medium text-slate-900">{n.patient}</td>
              <td className="py-4 text-slate-600">{n.date}</td>
              <td className="py-4 text-slate-600">{n.procedure}</td>
              <td className="py-4">
                {n.signed ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700"><CheckCircle2 className="h-3 w-3" /> Signed</span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700"><AlertTriangle className="h-3 w-3" /> Unsigned</span>
                )}
              </td>
              <td className="py-4">
                {!n.signed && <button onClick={() => sign(n.id)} className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs text-white hover:bg-blue-700">Sign Note</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}