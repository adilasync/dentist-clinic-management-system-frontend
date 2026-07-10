import { Clock, Plus, X, CheckCircle2 } from "lucide-react";
import { DAYS, SPECIALTIES, DayAvailability, DaySlot } from "../data/data";

interface Props {
  availability: Record<string, DayAvailability>;
  onUpdateDay: (day: string, patch: Partial<DayAvailability>) => void;
  onAddSlot: (day: string) => void;
  onRemoveSlot: (day: string, idx: number) => void;
  onUpdateSlot: (day: string, idx: number, key: keyof DaySlot, value: string) => void;
  onSave: () => void;
  saved: boolean;
}

export function AvailabilityCard({ availability, onUpdateDay, onAddSlot, onRemoveSlot, onUpdateSlot, onSave, saved }: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-semibold text-slate-900">Weekly Availability</h2>
      <p className="mt-0.5 text-sm text-slate-500">Set hours and specialty per day. Different days can have different focus.</p>

      <div className="mt-4 flex flex-col gap-3">
        {DAYS.map((day) => {
          const d = availability[day];
          return (
            <div key={day} className={`rounded-lg border p-4 ${d.active ? "border-slate-200 bg-white" : "border-slate-100 bg-slate-50"}`}>
              <div className="flex flex-wrap items-center gap-3">
                <label className="flex w-28 items-center gap-2">
                  <input type="checkbox" checked={d.active} onChange={(e) => onUpdateDay(day, { active: e.target.checked })}
                    className="h-4 w-4 rounded border-slate-300 text-blue-600" />
                  <span className={`text-sm font-semibold ${d.active ? "text-slate-800" : "text-slate-400"}`}>{day}</span>
                </label>
                <select value={d.specialty} disabled={!d.active} onChange={(e) => onUpdateDay(day, { specialty: e.target.value })}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm disabled:opacity-50">
                  {SPECIALTIES.map((s) => <option key={s}>{s}</option>)}
                </select>
                {d.active && (
                  <button onClick={() => onAddSlot(day)} className="ml-auto flex items-center gap-1 rounded-lg bg-blue-50 px-3 py-1.5 text-xs text-blue-700 hover:bg-blue-100">
                    <Plus className="h-3 w-3" /> Add Slot
                  </button>
                )}
              </div>
              {d.active && d.slots.length > 0 && (
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {d.slots.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      <input type="time" value={s.start} onChange={(e) => onUpdateSlot(day, i, "start", e.target.value)} className="w-24 bg-transparent text-sm focus:outline-none" />
                      <span className="text-xs text-slate-400">to</span>
                      <input type="time" value={s.end} onChange={(e) => onUpdateSlot(day, i, "end", e.target.value)} className="w-24 bg-transparent text-sm focus:outline-none" />
                      <button onClick={() => onRemoveSlot(day, i)} className="ml-auto text-red-500 hover:text-red-700"><X className="h-3.5 w-3.5" /></button>
                    </div>
                  ))}
                </div>
              )}
              {d.active && d.slots.length === 0 && <p className="mt-3 text-xs text-slate-400">No slots — click Add Slot to define working hours.</p>}
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-end gap-3">
        {saved && <span className="inline-flex items-center gap-1 text-sm text-emerald-600"><CheckCircle2 className="h-3.5 w-3.5" /> Saved</span>}
        <button onClick={onSave} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Save Profile & Schedule</button>
      </div>
    </div>
  );
}