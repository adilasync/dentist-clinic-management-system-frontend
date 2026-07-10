import type { ProfileInfo } from "../data/data";

const textFields: { k: keyof ProfileInfo; label: string; type?: string }[] = [
  { k: "fullName", label: "Full Name" },
  { k: "email", label: "Email", type: "email" },
  { k: "phone", label: "Phone" },
  { k: "dob", label: "Date of Birth", type: "date" },
];

export function PersonalInfoCard({ info, onChange }: { info: ProfileInfo; onChange: (k: keyof ProfileInfo, v: string) => void }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-semibold text-slate-900">Personal Information</h2>
      <p className="mt-0.5 text-sm text-slate-500">Keep your contact details up to date</p>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {textFields.map((f) => (
          <div key={f.k}>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">{f.label}</label>
            <input
              type={f.type || "text"}
              value={info[f.k]}
              onChange={(e) => onChange(f.k, e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
            />
          </div>
        ))}

        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">Gender</label>
          <select
            value={info.gender}
            onChange={(e) => onChange("gender", e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
          >
            <option>Female</option>
            <option>Male</option>
            <option>Non-binary</option>
            <option>Prefer not to say</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">Address</label>
          <input
            value={info.address}
            onChange={(e) => onChange("address", e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}