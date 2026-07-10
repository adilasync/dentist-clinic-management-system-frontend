import { CheckCircle2 } from "lucide-react";
import type { MedicalHistory } from "../data/data";

const fields: { k: keyof MedicalHistory; label: string; placeholder?: string }[] = [
  { k: "allergies", label: "Allergies", placeholder: "e.g. Penicillin, Latex" },
  { k: "chronicConditions", label: "Chronic Conditions", placeholder: "e.g. Diabetes, Hypertension" },
  { k: "currentMedications", label: "Current Medications" },
  { k: "pastSurgeries", label: "Past Surgeries" },
  { k: "bloodPressure", label: "Recent Blood Pressure" },
];

interface Props {
  history: MedicalHistory;
  onChange: (k: keyof MedicalHistory, v: string) => void;
  onSave: () => void;
  saved: boolean;
}

export function MedicalHistoryCard({ history, onChange, onSave, saved }: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-semibold text-slate-900">Medical History</h2>
      <p className="mt-0.5 text-sm text-slate-500">This information helps your dentist provide safe care</p>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {fields.map((f) => (
          <div key={f.k}>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">{f.label}</label>
            <input
              value={history[f.k]}
              placeholder={f.placeholder}
              onChange={(e) => onChange(f.k, e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
            />
          </div>
        ))}

        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">Smoker?</label>
          <select
            value={history.smoker}
            onChange={(e) => onChange("smoker", e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
          >
            <option>No</option>
            <option>Occasionally</option>
            <option>Yes</option>
            <option>Former</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">Pregnant?</label>
          <select
            value={history.pregnant}
            onChange={(e) => onChange("pregnant", e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
          >
            <option>No</option>
            <option>Yes</option>
            <option>N/A</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">Additional Notes for Dentist</label>
          <textarea
            rows={3}
            value={history.notes}
            onChange={(e) => onChange("notes", e.target.value)}
            className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-end gap-3">
        {saved && (
          <span className="inline-flex items-center gap-1 text-sm text-emerald-600">
            <CheckCircle2 className="h-3.5 w-3.5" /> Saved
          </span>
        )}
        <button onClick={onSave} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Save Profile
        </button>
      </div>
    </div>
  );
}