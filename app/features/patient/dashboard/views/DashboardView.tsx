import { StatCards } from "../components/StatCards";
import { TreatmentPlanCard } from "../components/TreatmentPlanCard";
import { UpcomingAppointmentCard } from "../components/UpcomingAppointmentCard";
import { RecentActivityCard } from "../components/RecentActivityCard";

export function DashboardView() {
  return (
    <div className="flex flex-col gap-6">
      <StatCards />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TreatmentPlanCard />
        </div>
        <UpcomingAppointmentCard />
      </div>
      <RecentActivityCard />
    </div>
  );
}