"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { appointmentStatusToday } from "../data/data";

export function AppointmentStatusChart() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-semibold text-slate-900">Appointment Status</h2>
      <p className="mt-0.5 text-sm text-slate-500">Today</p>
      <div className="mt-4 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={appointmentStatusToday} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={2}>
              {appointmentStatusToday.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 flex flex-wrap justify-center gap-4">
        {appointmentStatusToday.map((s) => (
          <div key={s.name} className="flex items-center gap-1.5 text-xs text-slate-600">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
            {s.name}
          </div>
        ))}
      </div>
    </div>
  );
}