import { Send } from "lucide-react";

export function RequestBanner() {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-emerald-600 p-6 text-white">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
        <Send className="h-5 w-5" />
      </div>
      <div>
        <p className="text-base font-semibold">Request a new appointment</p>
        <p className="text-sm text-emerald-50">
          Tell us what&apos;s going on. Our receptionist will assign the right dentist and confirm shortly.
        </p>
      </div>
    </div>
  );
}