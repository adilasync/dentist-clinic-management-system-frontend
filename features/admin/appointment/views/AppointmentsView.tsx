import { DayTabs } from "../components/DayTabs";
import { AppointmentFilters } from "../components/AppointmentFilters";
import { AppointmentsTable } from "../components/AppointmentsTable";

export function AppointmentsView() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <DayTabs />
        <AppointmentFilters />
      </div>
      <div className="mt-5">
        <AppointmentsTable />
      </div>
    </div>
  );
}