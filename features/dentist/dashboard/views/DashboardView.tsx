import { DashboardStats } from "../components/DashboardStats";
import { UpcomingAppointments } from "../components/UpcomingAppointments";
import { QuickActionsCard } from "../components/QuickActionsCard";
import { FullScheduleTable } from "../components/FullScheduleTable";

export function DashboardView() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardStats />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <UpcomingAppointments />
        <QuickActionsCard />
      </div>
      <FullScheduleTable />
    </div>
  );
}