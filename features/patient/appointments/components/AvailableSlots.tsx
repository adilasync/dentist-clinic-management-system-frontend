import { availableSlots } from "../data/data";

export function AvailableSlots() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-semibold text-slate-900">Available Slots This Week</h2>
      <p className="mt-0.5 text-sm text-slate-500">Self-schedule based on availability</p>

      <div className="mt-4 flex flex-wrap gap-3">
        {availableSlots.map((slot) => (
          <button
            key={slot}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600"
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
}