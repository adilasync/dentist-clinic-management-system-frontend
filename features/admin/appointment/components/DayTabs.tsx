"use client";
import { useState } from "react";

export function DayTabs({ onChange }: { onChange?: (day: string) => void }) {
  const [active, setActive] = useState("Today");
  const days = ["Yesterday", "Today", "Tomorrow"];

  const select = (day: string) => { setActive(day); onChange?.(day); };

  return (
    <div className="flex gap-2">
      {days.map((day) => (
        <button key={day} onClick={() => select(day)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${active === day ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
          {day}
        </button>
      ))}
    </div>
  );
}