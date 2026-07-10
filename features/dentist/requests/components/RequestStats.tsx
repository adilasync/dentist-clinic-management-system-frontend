import { Inbox, CheckCircle2, RefreshCw } from "lucide-react";
import { StatCard } from "@/features/dentist/shared/components/StatCard";
import type { AppointmentRequest } from "@/features/dentist/shared/types";

export function RequestStats({ requests }: { requests: AppointmentRequest[] }) {
  const awaiting = requests.filter((r) => r.status === "Assigned").length;
  const confirmed = requests.filter((r) => r.status === "Confirmed").length;
  const treatments = new Set(requests.filter((r) => r.treatmentId).map((r) => r.treatmentId)).size;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <StatCard icon={Inbox} color="amber" label="Awaiting My Response" value={awaiting} sub="Accept or reject" />
      <StatCard icon={CheckCircle2} color="emerald" label="Confirmed With Me" value={confirmed} sub="On your books" />
      <StatCard icon={RefreshCw} color="red" label="Treatments In Progress" value={treatments} sub="Multi-visit plans" />
    </div>
  );
}