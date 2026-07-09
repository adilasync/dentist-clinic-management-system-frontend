import type { AppointmentRequest } from "../../shared/data/types";

export const treatmentOptions = [
  "— New issue —",
  "Phase 2: Deep Cleaning — Upper Arch",
  "Phase 3: Deep Cleaning — Lower Arch",
  "Phase 4: Crown on Tooth #14",
];

export const timeOptions = ["Any", "Morning", "Afternoon", "Evening"];

export const myRequests: AppointmentRequest[] = [
  {
    id: "req-1",
    patientName: "Sarah Johnson",
    status: "Requested",
    urgency: "High urgency",
    reason: "Sudden tooth pain on lower left molar — worse when chewing.",
    phone: "(415) 555-0188",
    preferredDate: "2026-06-09",
    preferredTime: "Morning",
  },
];