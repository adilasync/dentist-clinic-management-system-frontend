import { CheckCircle2, Clock } from "lucide-react";
import { treatmentPhases, treatmentProgress } from "../data/data";

export function TreatmentPlanCard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-semibold text-slate-900">Your Active Treatment Plan</h2>
      <p className="mt-0.5 text-sm text-slate-500">{treatmentProgress.currentPhaseLabel}</p>

      <div className="mt-4 flex flex-col gap-3">
        {treatmentPhases.map((phase) => (
          <div
            key={phase.id}
            className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/50 px-4 py-3"
          >
            {phase.status === "completed" ? (
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
            ) : (
              <Clock
                className={`h-5 w-5 shrink-0 ${
                  phase.status === "in-progress" ? "text-blue-500" : "text-slate-400"
                }`}
              />
            )}
            <div>
              <p className="text-sm font-medium text-slate-900">{phase.title}</p>
              <p className="text-xs text-slate-500">{phase.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <div className="mb-1.5 flex items-center justify-between text-xs text-slate-500">
          <span>Progress</span>
          <span>{treatmentProgress.percentComplete}% complete</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-blue-600"
            style={{ width: `${treatmentProgress.percentComplete}%` }}
          />
        </div>
      </div>
    </div>
  );
}