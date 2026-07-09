import { MapPin } from "lucide-react";
import { upcomingAppointment } from "../data/data";

export function UpcomingAppointmentCard() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-semibold text-slate-900">Upcoming Appointment</h2>

      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="text-slate-400">Doctor</dt>
          <dd className="font-medium text-slate-900">{upcomingAppointment.doctor}</dd>
        </div>
        <div>
          <dt className="text-slate-400">Date & Time</dt>
          <dd className="font-medium text-slate-900">
            {upcomingAppointment.date} · {upcomingAppointment.time}
          </dd>
        </div>
        <div>
          <dt className="text-slate-400">Procedure</dt>
          <dd className="font-medium text-slate-900">{upcomingAppointment.procedure}</dd>
        </div>
        <div>
          <dt className="flex items-center gap-1 text-slate-400">
            <MapPin className="h-3.5 w-3.5" /> Location
          </dt>
          <dd className="font-medium text-slate-900">{upcomingAppointment.location}</dd>
        </div>
      </dl>

      <div className="mt-auto flex gap-3 pt-6">
        <button className="flex-1 rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
          Reschedule
        </button>
        <button className="flex-1 rounded-lg bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Get Directions
        </button>
      </div>
    </div>
  );
}