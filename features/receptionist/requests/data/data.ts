import type { AppointmentRequest, Doctor } from "@/features/receptionist/shared/types";

export const doctors: Doctor[] = [
  { name: "Dr. Emily Smith", specialty: "General / Endodontics", available: true, todaySlots: 3 },
  { name: "Dr. Marcus Webb", specialty: "Oral Surgery", available: true, todaySlots: 2 },
  { name: "Dr. Priya Lee", specialty: "Periodontics", available: true, todaySlots: 4 },
  { name: "Dr. Raj Patel", specialty: "Orthodontics", available: false, todaySlots: 0 },
  { name: "Dr. Nora Chen", specialty: "Pediatric Dentistry", available: true, todaySlots: 2 },
];

export const initialRequests: AppointmentRequest[] = [
  {
    id: 1001, patient: "Sarah Johnson", phone: "(415) 555-0188",
    reason: "Sudden tooth pain on lower left molar — worse when chewing.",
    urgency: "High", preferredDate: "2026-06-09", preferredTime: "Morning",
    treatmentId: null, status: "Requested",
    assignedDoctor: null, rejectedDoctors: [], rejectionReason: null,
    scheduledDate: null, scheduledTime: null, cancellationReason: null,
    history: [{ when: "Jun 7, 9:12 AM", by: "Patient", action: "Submitted request" }],
  },
  {
    id: 1002, patient: "James Carter", phone: "(415) 555-0142",
    reason: "Follow-up after root canal — crown fitting check.",
    urgency: "Normal", preferredDate: "2026-06-10", preferredTime: "Afternoon",
    treatmentId: "TRT-204", status: "Assigned",
    assignedDoctor: "Dr. Emily Smith", rejectedDoctors: [], rejectionReason: null,
    scheduledDate: "2026-06-10", scheduledTime: "2:30 PM", cancellationReason: null,
    history: [
      { when: "Jun 6, 4:02 PM", by: "Patient", action: "Submitted request" },
      { when: "Jun 6, 4:30 PM", by: "Receptionist", action: "Assigned to Dr. Emily Smith" },
    ],
  },
  {
    id: 1003, patient: "Liam Brown", phone: "(415) 555-0156",
    reason: "Chipped front tooth from cycling accident.",
    urgency: "High", preferredDate: "2026-06-08", preferredTime: "Any",
    treatmentId: null, status: "Rejected",
    assignedDoctor: null, rejectedDoctors: ["Dr. Marcus Webb"],
    rejectionReason: "Surgery schedule full — refer to cosmetic specialist.",
    scheduledDate: null, scheduledTime: null, cancellationReason: null,
    history: [
      { when: "Jun 5, 11:20 AM", by: "Patient", action: "Submitted request" },
      { when: "Jun 5, 1:00 PM", by: "Receptionist", action: "Assigned to Dr. Marcus Webb" },
      { when: "Jun 5, 3:15 PM", by: "Dr. Marcus Webb", action: "Rejected — Surgery schedule full — refer to cosmetic specialist." },
    ],
  },
  {
    id: 1004, patient: "Maria Lopez", phone: "(415) 555-0175",
    reason: "Emergency reschedule needed after doctor overran surgery.",
    urgency: "Normal", preferredDate: "2026-06-04", preferredTime: "Any",
    treatmentId: "TRT-190", status: "Needs Reschedule",
    assignedDoctor: "Dr. Emily Smith", rejectedDoctors: [], rejectionReason: null,
    scheduledDate: null, scheduledTime: null, cancellationReason: "Doctor's prior surgery overran — emergency cancellation.",
    history: [
      { when: "Jun 4", by: "Patient", action: "Submitted request" },
      { when: "Jun 4", by: "Receptionist", action: "Assigned to Dr. Emily Smith" },
      { when: "Jun 4", by: "Dr. Emily Smith", action: "Accepted & confirmed" },
      { when: "Jun 7, 8:00 AM", by: "Dr. Emily Smith", action: "Cancelled — emergency overrun" },
    ],
  },
];
// features/receptionist/requests/data/data.ts  (append to existing file)

// Weekly time slots per doctor (weekday -> array of "HH:MM" strings). Empty = day off.
export const doctorAvailability: Record<string, Record<string, string[]>> = {
  "Dr. Emily Smith": {
    Monday: ["09:00", "09:30", "10:00", "11:00", "14:00", "15:30"],
    Tuesday: ["09:30", "10:30", "13:00", "14:30"],
    Wednesday: ["09:00", "10:00", "11:30", "14:00", "16:00"],
    Thursday: ["10:00", "11:00", "14:30", "16:00"],
    Friday: ["09:00", "10:30", "13:30"],
    Saturday: [],
    Sunday: [],
  },
  "Dr. Marcus Webb": {
    Monday: ["10:00", "11:30", "15:00"],
    Tuesday: ["09:00", "10:00", "14:00", "15:30"],
    Wednesday: [],
    Thursday: ["09:30", "11:00", "13:30", "16:00"],
    Friday: ["10:00", "14:00"],
    Saturday: ["09:00", "10:30"],
    Sunday: [],
  },
  "Dr. Priya Lee": {
    Monday: ["09:00", "10:00", "11:00", "14:00"],
    Tuesday: ["09:00", "10:30", "13:00", "14:30", "16:00"],
    Wednesday: ["10:00", "11:30", "14:00", "15:30"],
    Thursday: ["09:30", "11:00", "14:30"],
    Friday: ["09:00", "10:00", "11:00", "13:30", "15:00"],
    Saturday: [],
    Sunday: [],
  },
  "Dr. Raj Patel": {
    Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [], Sunday: [],
  },
  "Dr. Nora Chen": {
    Monday: ["09:30", "11:00"],
    Tuesday: ["10:00", "14:00", "15:30"],
    Wednesday: ["09:00", "10:30", "14:00"],
    Thursday: ["11:00", "15:00"],
    Friday: ["09:30", "13:30", "16:00"],
    Saturday: ["10:00"],
    Sunday: [],
  },
};

const WEEKDAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function getDoctorSlotsForDate(doctorName: string | null, dateStr: string | null): string[] {
  if (!doctorName || !dateStr) return [];
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d.getTime())) return [];
  const weekday = WEEKDAY_NAMES[d.getDay()];
  return doctorAvailability[doctorName]?.[weekday] ?? [];
}