"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { patientVisits } from "../data/data";

export function PatientVisitsChart() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-semibold text-slate-900">Patient Visits</h2>
      <p className="mt-0.5 text-sm text-slate-500">Last 6 months</p>
      <div className="mt-4 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={patientVisits}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#94a3b8" }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#94a3b8" }} />
            <Tooltip />
            <Line type="monotone" dataKey="visits" stroke="#22d3ee" strokeWidth={2} dot={{ r: 4, fill: "#22d3ee" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}