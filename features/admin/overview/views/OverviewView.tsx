import { KpiCards } from "../components/KpiCards";
import { RevenueChart } from "../components/RevenueChart";
import { AppointmentStatusChart } from "../components/AppointmentStatusChart";
import { ChairStatusTable } from "../components/ChairStatusTable";

export function OverviewView() {
  return (
    <div className="flex flex-col gap-6">
      <KpiCards />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2"><RevenueChart /></div>
        <AppointmentStatusChart />
      </div>
      <ChairStatusTable />
    </div>
  );
}