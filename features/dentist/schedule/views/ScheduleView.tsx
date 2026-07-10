import { ScheduleStats } from "../components/ScheduleStats";
import { ScheduleTable } from "../components/ScheduleTable";

export function ScheduleView() {
  return (
    <div className="flex flex-col gap-6">
      <ScheduleStats />
      <ScheduleTable />
    </div>
  );
}