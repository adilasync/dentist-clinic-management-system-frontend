import { DollarSign, Users, Armchair, FileText } from "lucide-react";
import { kpis } from "../data/data";

export function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5">
        <div>
          <p className="text-sm text-slate-500">Today&apos;s Revenue</p>
          <p className="mt-2 text-xl font-semibold text-slate-900">{kpis.todaysRevenue.value}</p>
          <p className="text-xs text-emerald-600">↑ {kpis.todaysRevenue.trend}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50"><DollarSign className="h-5 w-5 text-emerald-600" /></div>
      </div>
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5">
        <div>
          <p className="text-sm text-slate-500">Patients Today</p>
          <p className="mt-2 text-xl font-semibold text-slate-900">{kpis.patientsToday.value}</p>
          <p className="text-xs text-slate-400">{kpis.patientsToday.remaining} remaining</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50"><Users className="h-5 w-5 text-blue-600" /></div>
      </div>
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5">
        <div>
          <p className="text-sm text-slate-500">Chair Utilization</p>
          <p className="mt-2 text-xl font-semibold text-slate-900">{kpis.chairUtilization.value}</p>
          <p className="text-xs text-slate-400">{kpis.chairUtilization.percent}%</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50"><Armchair className="h-5 w-5 text-cyan-600" /></div>
      </div>
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5">
        <div>
          <p className="text-sm text-slate-500">Pending Invoices</p>
          <p className="mt-2 text-xl font-semibold text-slate-900">{kpis.pendingInvoices.value}</p>
          <p className="text-xs text-slate-400">{kpis.pendingInvoices.total}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50"><FileText className="h-5 w-5 text-amber-500" /></div>
      </div>
    </div>
  );
}