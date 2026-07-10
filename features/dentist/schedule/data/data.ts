import type { ScheduleItem } from "@/features/dentist/shared/types";

export const fullSchedule: ScheduleItem[] = [
  { id: 1, date: "2026-06-01", day: "Mon", time: "8:30 AM", duration: "30 min", patient: "James Carter", age: 42, procedure: "Root Canal — #19", room: "Op 2", status: "In Progress", alert: "Penicillin allergy" },
  { id: 2, date: "2026-06-01", day: "Mon", time: "9:00 AM", duration: "30 min", patient: "Sarah Johnson", age: 31, procedure: "Hygiene Cleaning", room: "Op 1", status: "Upcoming", alert: null },
  { id: 3, date: "2026-06-01", day: "Mon", time: "9:30 AM", duration: "45 min", patient: "Aisha Patel", age: 28, procedure: "Crown Prep — #14", room: "Op 2", status: "Upcoming", alert: "Pregnant — 2nd tri" },
  { id: 4, date: "2026-06-01", day: "Mon", time: "10:30 AM", duration: "30 min", patient: "Liam Brown", age: 19, procedure: "Composite Filling", room: "Op 3", status: "Upcoming", alert: null },
  { id: 5, date: "2026-06-01", day: "Mon", time: "11:00 AM", duration: "60 min", patient: "Carlos Rivera", age: 55, procedure: "Extraction — #32", room: "Op 2", status: "Upcoming", alert: "Hypertension" },
  { id: 6, date: "2026-06-02", day: "Tue", time: "9:00 AM", duration: "30 min", patient: "Noah Patel", age: 11, procedure: "Fluoride Treatment", room: "Op 1", status: "Confirmed", alert: null },
  { id: 7, date: "2026-06-02", day: "Tue", time: "10:00 AM", duration: "45 min", patient: "Emily Watson", age: 36, procedure: "Implant Consult", room: "Op 2", status: "Confirmed", alert: null },
  { id: 8, date: "2026-06-02", day: "Tue", time: "11:30 AM", duration: "30 min", patient: "Robert Kim", age: 47, procedure: "Crown Seat", room: "Op 2", status: "Confirmed", alert: null },
  { id: 9, date: "2026-06-02", day: "Tue", time: "2:00 PM", duration: "60 min", patient: "Maria Lopez", age: 38, procedure: "Veneers — #8,9", room: "Op 3", status: "Confirmed", alert: null },
  { id: 10, date: "2026-06-03", day: "Wed", time: "8:30 AM", duration: "30 min", patient: "Tina Chen", age: 24, procedure: "Whitening", room: "Op 1", status: "Confirmed", alert: null },
  { id: 11, date: "2026-06-03", day: "Wed", time: "10:00 AM", duration: "90 min", patient: "Henry Adams", age: 62, procedure: "Full Denture Fit", room: "Op 2", status: "Confirmed", alert: "Diabetes" },
  { id: 12, date: "2026-06-03", day: "Wed", time: "1:00 PM", duration: "45 min", patient: "Olivia Park", age: 29, procedure: "Deep Cleaning", room: "Op 1", status: "Confirmed", alert: null },
  { id: 13, date: "2026-06-04", day: "Thu", time: "9:00 AM", duration: "30 min", patient: "Daniel Wright", age: 40, procedure: "Filling — #30", room: "Op 2", status: "Confirmed", alert: null },
  { id: 14, date: "2026-06-04", day: "Thu", time: "10:30 AM", duration: "60 min", patient: "Sophia Nguyen", age: 33, procedure: "Root Canal — #14", room: "Op 2", status: "Confirmed", alert: null },
  { id: 15, date: "2026-06-04", day: "Thu", time: "2:00 PM", duration: "30 min", patient: "Ethan Reyes", age: 16, procedure: "Ortho Check", room: "Op 1", status: "Confirmed", alert: null },
  { id: 16, date: "2026-06-05", day: "Fri", time: "8:30 AM", duration: "45 min", patient: "Grace Martin", age: 51, procedure: "Bridge Prep", room: "Op 2", status: "Confirmed", alert: null },
  { id: 17, date: "2026-06-05", day: "Fri", time: "10:00 AM", duration: "30 min", patient: "Lucas Bennett", age: 22, procedure: "Wisdom Eval", room: "Op 3", status: "Confirmed", alert: null },
  { id: 18, date: "2026-06-05", day: "Fri", time: "11:00 AM", duration: "30 min", patient: "Mia Robinson", age: 9, procedure: "Sealants", room: "Op 1", status: "Confirmed", alert: null },
  { id: 19, date: "2026-06-05", day: "Fri", time: "1:30 PM", duration: "60 min", patient: "Jacob Hill", age: 44, procedure: "Implant Placement", room: "Op 2", status: "Confirmed", alert: "Anticoagulants" },
  { id: 20, date: "2026-06-05", day: "Fri", time: "3:00 PM", duration: "30 min", patient: "Ava Scott", age: 27, procedure: "Composite — #8", room: "Op 3", status: "Confirmed", alert: null },
];