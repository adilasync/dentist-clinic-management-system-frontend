import { nextVisit } from "../data/data";

export function NextVisitBanner() {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-blue-100">Your next visit</p>
        <p className="mt-1 text-2xl font-semibold">
          {nextVisit.date} · {nextVisit.time}
        </p>
        <p className="mt-1 text-sm text-blue-100">
          {nextVisit.procedure} with {nextVisit.doctor}
        </p>
        <p className="text-sm text-blue-100">{nextVisit.location}</p>
      </div>

      <div className="flex gap-3">
        <button className="rounded-lg bg-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/25">
          Reschedule
        </button>
        <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">
          Confirm
        </button>
      </div>
    </div>
  );
}