import type { DoctorProfile } from "../data/data";

const fields: { k: keyof DoctorProfile; label: string; type?: string }[] = [
  { k: "fullName", label: "Full Name" },
  { k: "email", label: "Email" },
  { k: "phone", label: "Phone" },
  { k: "license", label: "License No." },
  { k: "years", label: "Years Experience", type: "number" },
  { k: "consultationFee", label: "Consultation Fee ($)", type: "number" },
];

export function DoctorProfileCard({ profile, onChange }: { profile: DoctorProfile; onChange: (k: keyof DoctorProfile, v: string) => void }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-semibold text-slate-900">Doctor Profile</h2>
      <p className="mt-0.5 text-sm text-slate-500">Public profile shown to patients</p>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {fields.map((f) => (
          <div key={f.k}>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">{f.label}</label>
            <input type={f.type || "text"} value={profile[f.k]}
              onChange={(e) => onChange(f.k, e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 focus:border-blue-500 focus:outline-none" />
          </div>
        ))}
        <div className="md:col-span-2">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">Education</label>
          <textarea rows={3} value={profile.education} onChange={(e) => onChange("education", e.target.value)}
            className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 focus:border-blue-500 focus:outline-none" />
        </div>
        <div className="md:col-span-2">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">Bio</label>
          <textarea rows={3} value={profile.bio} onChange={(e) => onChange("bio", e.target.value)}
            className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 focus:border-blue-500 focus:outline-none" />
        </div>
      </div>
    </div>
  );
}