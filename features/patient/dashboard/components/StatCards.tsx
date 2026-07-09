import { Calendar, CreditCard, Gift } from "lucide-react";
import { overviewStats } from "../data/data";

export function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5">
        <div>
          <p className="text-sm text-slate-500">Next Appointment</p>
          <p className="mt-2 text-xl font-semibold text-slate-900">{overviewStats.nextAppointment.date}</p>
          <p className="text-sm text-slate-500">{overviewStats.nextAppointment.time}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
          <Calendar className="h-5 w-5 text-blue-600" />
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5">
        <div>
          <p className="text-sm text-slate-500">Outstanding Balance</p>
          <p className="mt-2 text-xl font-semibold text-slate-900">
            ${overviewStats.outstandingBalance.toFixed(2)}
          </p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
          <CreditCard className="h-5 w-5 text-red-500" />
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5">
        <div>
          <p className="text-sm text-slate-500">Loyalty Points</p>
          <p className="mt-2 text-xl font-semibold text-slate-900">
            {overviewStats.loyaltyPoints.toLocaleString()} pts
          </p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50">
          <Gift className="h-5 w-5 text-amber-500" />
        </div>
      </div>
    </div>
  );
}