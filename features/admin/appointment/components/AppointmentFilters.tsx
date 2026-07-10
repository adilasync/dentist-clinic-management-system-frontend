export function AppointmentFilters() {
  return (
    <div className="flex gap-3">
      <select className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 focus:outline-none">
        <option>All</option>
        <option>Dr. Emily Smith</option>
        <option>Dr. Marcus Webb</option>
        <option>Priya Lee</option>
      </select>
      <select className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 focus:outline-none">
        <option>All</option>
        <option>Waiting</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
    </div>
  );
}