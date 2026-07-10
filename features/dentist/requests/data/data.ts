import type { AppointmentRequest } from "@/features/dentist/shared/types";

export const initialRequests: AppointmentRequest[] = [
  { id: 1002, patient: "James Carter", phone: "(415) 555-0142", reason: "Follow-up after root canal — crown fitting check.", urgency: "Normal", preferredDate: "2026-06-10", preferredTime: "Afternoon", treatmentId: "TRT-204", status: "Assigned", scheduledDate: "2026-06-10", scheduledTime: "2:30 PM" },
  { id: 1004, patient: "Emily Watson", phone: "(415) 555-0167", reason: "Consultation for a dental implant on lower right side.", urgency: "Normal", preferredDate: "2026-06-09", preferredTime: "Morning", treatmentId: null, status: "Assigned", scheduledDate: null, scheduledTime: null },
  { id: 1005, patient: "Robert Kim", phone: "(415) 555-0173", reason: "Crown seating for tooth #14 — lab work returned.", urgency: "Normal", preferredDate: "2026-06-08", preferredTime: "Afternoon", treatmentId: "TRT-198", status: "Confirmed", scheduledDate: "2026-06-08", scheduledTime: "11:00 AM" },
  { id: 1006, patient: "Aisha Patel", phone: "(415) 555-0119", reason: "Crown prep pain check-up, 3 days post-procedure.", urgency: "High", preferredDate: "2026-06-07", preferredTime: "Any", treatmentId: "TRT-210", status: "Confirmed", scheduledDate: "2026-06-07", scheduledTime: "9:30 AM" },
];