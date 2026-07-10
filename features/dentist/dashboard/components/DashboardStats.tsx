import { Calendar, FlaskConical, ClipboardList, Clock } from "lucide-react";
import { StatCard } from "@/features/dentist/shared/components/StatCard";
import { dashboardStats } from "../data/data";

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard icon={Calendar} color="blue" label="Today's Appointments" value={dashboardStats.todaysAppointments} />
      <StatCard icon={FlaskConical} color="amber" label="Pending Lab Work" value={dashboardStats.pendingLabWork} />
      <StatCard icon={ClipboardList} color="red" label="Unsigned Notes" value={dashboardStats.unsignedNotes} />
      <StatCard icon={Clock} color="cyan" label="Avg Treatment Time" value={dashboardStats.avgTreatmentTime} />
    </div>
  );
}