import { DollarSign, CreditCard, AlertTriangle } from "lucide-react";
import { StatCard } from "@/features/receptionist/shared/components/StatCard";
import type { Appointment } from "@/features/receptionist/shared/types";

export function PaymentsStats({ appts }: { appts: Appointment[] }) {
  const outstanding = appts.filter((a) => a.payment !== "Paid");
  const totalOutstanding = outstanding.reduce((s, a) => s + a.amount, 0);
  const collectedToday = appts.filter((a) => a.payment === "Paid").reduce((s, a) => s + a.amount, 0);
  const overdueCount = outstanding.filter((o) => o.payment === "Overdue").length;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <StatCard icon={DollarSign} color="emerald" label="Collected Today" value={`$${collectedToday.toLocaleString()}`} />
      <StatCard icon={CreditCard} color="amber" label="Outstanding" value={`$${totalOutstanding.toLocaleString()}`} sub={`${outstanding.length} accounts`} />
      <StatCard icon={AlertTriangle} color="red" label="Overdue" value={overdueCount} />
    </div>
  );
}