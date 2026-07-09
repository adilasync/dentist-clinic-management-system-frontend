import { NextVisitBanner } from "../components/NextVisitBanner";
import { AppointmentsTable } from "../components/AppointmentsTable";
import { AvailableSlots } from "../components/AvailableSlots";

export function AppointmentsView() {
  return (
    <div className="flex flex-col gap-6">
      <NextVisitBanner />
      <AppointmentsTable />
      <AvailableSlots />
    </div>
  );
}