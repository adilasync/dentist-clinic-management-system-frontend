import { Inbox, Clock, RefreshCw, CheckCircle2 } from "lucide-react";
import { StatCard } from "@/features/receptionist/shared/components/StatCard";
import type { AppointmentRequest } from "@/features/receptionist/shared/types";

export function RequestStats({ requests }: { requests: AppointmentRequest[] }) {
  const inbox = requests.filter((r) => r.status === "Requested" || r.status === "Rejected").length;
  const pending = requests.filter((r) => r.status === "Assigned").length;
  const reschedule = requests.filter((r) => r.status === "Needs Reschedule").length;
  const confirmed = requests.filter((r) => r.status === "Confirmed").length;

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <StatCard icon={Inbox} color="blue" label="New / Rejected" value={inbox} sub="Awaiting assignment" />
      <StatCard icon={Clock} color="amber" label="Awaiting Doctor" value={pending} sub="Assigned, not yet accepted" />
      <StatCard icon={RefreshCw} color="red" label="Needs Reschedule" value={reschedule} sub="Emergency cancellations" />
      <StatCard icon={CheckCircle2} color="emerald" label="Confirmed" value={confirmed} sub="Ready for the chair" />
    </div>
  );
}