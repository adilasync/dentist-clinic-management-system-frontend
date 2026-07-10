import type { ScheduleItem } from "@/features/dentist/shared/types";

export const dashboardStats = {
  todaysAppointments: 8,
  pendingLabWork: 3,
  unsignedNotes: 2,
  avgTreatmentTime: "42 min",
};

export const todaySchedule: ScheduleItem[] = [
  { id: 1, date: "2026-06-01", day: "Mon", time: "9:00 AM", duration: "90 min", patient: "James Carter", age: 34, procedure: "Root Canal (Tooth #14)", status: "In Progress", alert: "Penicillin Allergy" },
  { id: 2, date: "2026-06-01", day: "Mon", time: "10:45 AM", duration: "60 min", patient: "Aisha Patel", age: 28, procedure: "Crown Prep", status: "Upcoming", alert: null },
  { id: 3, date: "2026-06-01", day: "Mon", time: "12:00 PM", duration: "—", patient: "—", age: null, procedure: "Lunch Break", status: "Break", alert: null },
  { id: 4, date: "2026-06-01", day: "Mon", time: "1:00 PM", duration: "45 min", patient: "Carlos Rivera", age: 55, procedure: "Extraction (Tooth #28)", status: "Upcoming", alert: "Blood Thinner" },
  { id: 5, date: "2026-06-01", day: "Mon", time: "2:00 PM", duration: "30 min", patient: "Emily Watson", age: 42, procedure: "Composite Filling", status: "Upcoming", alert: null },
  { id: 6, date: "2026-06-01", day: "Mon", time: "3:30 PM", duration: "20 min", patient: "Noah Patel", age: 9, procedure: "Fluoride Treatment", status: "Upcoming", alert: "Latex Allergy" },
];

export const quickActions = [
  { label: "New Note" },
  { label: "View Lab Results" },
  { label: "Message Patient" },
  { label: "Request X-Ray" },
];