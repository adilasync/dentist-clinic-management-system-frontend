import { CalendarDays, CheckCircle2, CreditCard, PhoneCall } from "lucide-react";
import { StatCard } from "@/features/receptionist/shared/components/StatCard";
import type { Appointment } from "@/features/receptionist/shared/types";

export function OverviewStats({ appts }: { appts: Appointment[] }) {
  const total = appts.length;
  const checkedIn = appts.filter((a) => a.status === "Checked-In" || a.status === "In Progress").length;
  const waiting = appts.filter((a) => a.status === "Waiting").length;
  const completed = appts.filter((a) => a.status === "Completed").length;
  const overdue = appts.filter((a) => a.payment === "Overdue").length;
  const pendingRevenue = appts.filter((a) => a.payment !== "Paid").reduce((s, a) => s + a.amount, 0);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard icon={CalendarDays} color="blue" label="Today's Appointments" value={total} sub={`${checkedIn} in chair · ${waiting} waiting`} />
      <StatCard icon={CheckCircle2} color="emerald" label="Completed" value={completed} sub={`${Math.round((completed / total) * 100)}% of day`} />
      <StatCard icon={CreditCard} color="amber" label="Pending Collections" value={`$${pendingRevenue.toLocaleString()}`} sub={`${overdue} overdue accounts`} />
      <StatCard icon={PhoneCall} color="red" label="Calls to Return" value="3" sub="1 voicemail" />
    </div>
  );
}