import { ReactNode } from "react";
import { Phone, Stethoscope, ThumbsDown, AlertCircle } from "lucide-react";
import { badgeClass } from "@/features/receptionist/shared/utils/badges";
import type { AppointmentRequest } from "@/features/receptionist/shared/types";

const accentRing: Record<string, string> = {
  blue: "border-blue-200 bg-blue-50/30",
  violet: "border-violet-200 bg-violet-50/30",
  red: "border-red-200 bg-red-50/30",
  amber: "border-amber-200 bg-amber-50/30",
  emerald: "border-emerald-200 bg-emerald-50/30",
};

export function RequestCard({ req, accent, children }: { req: AppointmentRequest; accent: keyof typeof accentRing; children: ReactNode }) {
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
          {req.assignedDoctor && (
            <p className="mt-1 flex items-center gap-1 text-xs text-slate-600">
              <Stethoscope className="h-3 w-3" /> Assigned to <b>{req.assignedDoctor}</b>
              {req.scheduledDate && ` · ${req.scheduledDate} ${req.scheduledTime}`}
            </p>
          )}
          {req.rejectionReason && (
            <p className="mt-1 flex items-center gap-1 text-xs text-red-600"><ThumbsDown className="h-3 w-3" /> Rejected: {req.rejectionReason}</p>
          )}
          {req.cancellationReason && req.status === "Needs Reschedule" && (
            <p className="mt-1 flex items-center gap-1 text-xs text-amber-700"><AlertCircle className="h-3 w-3" /> {req.cancellationReason}</p>
          )}
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2">{children}</div>
      </div>
    </div>
  );
}