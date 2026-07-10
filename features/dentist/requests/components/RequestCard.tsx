import { ReactNode } from "react";
import { Phone, Stethoscope } from "lucide-react";
import { badgeClass } from "@/features/dentist/shared/utils/badges";
import type { AppointmentRequest } from "@/features/dentist/shared/types";

const accentRing: Record<string, string> = {
  blue: "border-blue-200 bg-blue-50/30",
  emerald: "border-emerald-200 bg-emerald-50/30",
};

export function RequestCard({ req, accent, children }: { req: AppointmentRequest; accent: "blue" | "emerald"; children: ReactNode }) {
  return (
    <div className={`rounded-xl border p-4 ${accentRing[accent]}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-semibold text-slate-800">{req.patient}</p>
            <span className={badgeClass(req.status)}>{req.status}</span>
            <span className={badgeClass(req.urgency)}>{req.urgency} urgency</span>
            {req.treatmentId && <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">Treatment {req.treatmentId}</span>}
          </div>
          <p className="mt-1 text-sm text-slate-600">{req.reason}</p>
          <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
            <Phone className="h-3 w-3" /> {req.phone} · Prefers {req.preferredDate} ({req.preferredTime})
          </p>
          {req.scheduledDate && (
            <p className="mt-1 flex items-center gap-1 text-xs text-slate-600">
              <Stethoscope className="h-3 w-3" /> Scheduled · {req.scheduledDate} {req.scheduledTime}
            </p>
          )}
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2">{children}</div>
      </div>
    </div>
  );
}