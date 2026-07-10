import { MonthlyRevenueChart } from "../components/MonthlyRevenueChart";
import { PatientVisitsChart } from "../components/PatientVisitsChart";
import { TopProceduresTable } from "../components/TopProceduresTable";
import { NewVsReturningChart } from "../components/NewVsReturningChart";

export function AnalyticsView() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <MonthlyRevenueChart />
        <PatientVisitsChart />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <TopProceduresTable />
        <NewVsReturningChart />
      </div>
    </div>
  );
}