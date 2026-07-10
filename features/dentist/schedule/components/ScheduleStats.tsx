import { Calendar, CalendarDays, Clock, AlertTriangle } from "lucide-react";
import { StatCard } from "@/features/dentist/shared/components/StatCard";
import { fullSchedule } from "../data/data";

export function ScheduleStats() {
  const todayCount = fullSchedule.filter((s) => s.date === "2026-06-01").length;
  const weekCount = fullSchedule.filter((s) => s.date >= "2026-06-01" && s.date <= "2026-06-05").length;
  const inProgress = fullSchedule.filter((s) => s.status === "In Progress").length;
  const alerts = fullSchedule.filter((s) => s.alert).length;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <StatCard icon={Calendar} color="blue" label="Today" value={todayCount} sub="Jun 1, 2026" />
      <StatCard icon={CalendarDays} color="cyan" label="This Week" value={weekCount} />
      <StatCard icon={Clock} color="amber" label="In Progress" value={inProgress} />
      <StatCard icon={AlertTriangle} color="red" label="Medical Alerts" value={alerts} />
    </div>
  );
}