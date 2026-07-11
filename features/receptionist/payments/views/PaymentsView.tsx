"use client";
import { useState } from "react";
import { initialAppointments } from "@/features/receptionist/shared/data/shared-appointments";
import { PaymentsStats } from "../components/PaymentsStats";
import { OutstandingTable } from "../components/OutstandingTable";
import type { Appointment } from "@/features/receptionist/shared/types";

export function PaymentsView() {
  const [appts, setAppts] = useState<Appointment[]>(initialAppointments);
  const outstanding = appts.filter((a) => a.payment !== "Paid");
  const markPaid = (id: number) => setAppts((a) => a.map((x) => (x.id === id ? { ...x, payment: "Paid" } : x)));

  return (
    <div className="flex flex-col gap-6">
      <PaymentsStats appts={appts} />
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 text-base font-semibold text-slate-900">Outstanding Balances</h2>
        <OutstandingTable rows={outstanding} onMarkPaid={markPaid} />
      </div>
    </div>
  );
}