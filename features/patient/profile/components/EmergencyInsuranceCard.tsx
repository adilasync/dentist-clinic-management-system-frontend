import type { ProfileInfo } from "../data/data";

const fields: { k: keyof ProfileInfo; label: string }[] = [
  { k: "emergencyName", label: "Emergency Contact Name" },
  { k: "emergencyPhone", label: "Emergency Contact Phone" },
  { k: "insuranceProvider", label: "Insurance Provider" },
  { k: "insurancePolicy", label: "Policy Number" },
];

export function EmergencyInsuranceCard({ info, onChange }: { info: ProfileInfo; onChange: (k: keyof ProfileInfo, v: string) => void }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-semibold text-slate-900">Emergency Contact & Insurance</h2>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {fields.map((f) => (
          <div key={f.k}>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">{f.label}</label>
            <input
              value={info[f.k]}
              onChange={(e) => onChange(f.k, e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}