const filters = ["All", "Confirmed", "Checked-In", "Waiting", "In Progress", "Completed", "Cancelled"];

export function AppointmentFilters({ filter, onChange }: { filter: string; onChange: (f: string) => void }) {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {filters.map((f) => (
        <button key={f} onClick={() => onChange(f)}
          className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${filter === f ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`}>
          {f}
        </button>
      ))}
    </div>
  );
}