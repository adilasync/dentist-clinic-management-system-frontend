import { todaysAppointments } from "../data/data";

const statusStyles: Record<string, string> = {
  "In Progress": "bg-blue-100 text-blue-700",
  Waiting: "bg-amber-100 text-amber-700",
  Completed: "bg-emerald-100 text-emerald-700",
};

export function AppointmentsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
            <th className="pb-3 font-medium">Time</th>
            <th className="pb-3 font-medium">Patient</th>
            <th className="pb-3 font-medium">Dentist</th>
            <th className="pb-3 font-medium">Procedure</th>
            <th className="pb-3 font-medium">Status</th>
            <th className="pb-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todaysAppointments.map((apt, i) => (
            <tr key={i} className="border-b border-slate-50 last:border-0">
              <td className="py-4 font-medium text-slate-900">{apt.time}</td>
              <td className="py-4 text-blue-600">{apt.patient}</td>
              <td className="py-4 text-slate-600">{apt.dentist}</td>
              <td className="py-4 text-slate-600">{apt.procedure}</td>
              <td className="py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[apt.status]}`}>{apt.status}</span></td>
              <td className="py-4 whitespace-nowrap">
                <button className="mr-3 text-blue-600 hover:underline">View</button>
                <button className="text-slate-500 hover:underline">Reschedule</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}