"use client";
import { useState } from "react";
import { initialAppointments } from "@/features/receptionist/shared/data/shared-appointments";
import { OverviewStats } from "../components/OverviewStats";
import { TodayGlanceTable } from "../components/TodayGlanceTable";
import { NextUpCard } from "../components/NextUpCard";
import { QuickActionsCard } from "../components/QuickActionsCard";

export function OverviewView() {
  const [appts, setAppts] = useState(initialAppointments);
  const checkIn = (id: number) => setAppts((a) => a.map((x) => (x.id === id ? { ...x, status: "Checked-In" } : x)));

  return (
    <div className="flex flex-col gap-6">
      <OverviewStats appts={appts} />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <TodayGlanceTable appts={appts} />
        <div className="flex flex-col gap-6">
          <NextUpCard appts={appts} onCheckIn={checkIn} />
          <QuickActionsCard />
        </div>
      </div>
    </div>
  );
}