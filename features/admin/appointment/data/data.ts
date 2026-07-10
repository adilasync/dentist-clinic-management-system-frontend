import type { AppointmentRow } from "@/features/admin/shared/data/types";

export const todaysAppointments: AppointmentRow[] = [
  { time: "9:00 AM", patient: "James Carter", dentist: "Dr. Emily Smith", procedure: "Root Canal", status: "In Progress" },
  { time: "9:30 AM", patient: "Sarah Johnson", dentist: "Priya Lee", procedure: "Cleaning", status: "Waiting" },
  { time: "10:00 AM", patient: "Robert Kim", dentist: "Dr. Marcus Webb", procedure: "Crown Prep", status: "Completed" },
  { time: "10:45 AM", patient: "Aisha Patel", dentist: "Dr. Emily Smith", procedure: "Crown Prep", status: "Waiting" },
  { time: "11:30 AM", patient: "Liam Brown", dentist: "Dr. Marcus Webb", procedure: "Filling", status: "Waiting" },
  { time: "1:00 PM", patient: "Carlos Rivera", dentist: "Dr. Emily Smith", procedure: "Extraction", status: "Waiting" },
  { time: "2:00 PM", patient: "Emily Watson", dentist: "Dr. Emily Smith", procedure: "Composite Filling", status: "Waiting" },
  { time: "3:30 PM", patient: "Noah Patel", dentist: "Dr. Emily Smith", procedure: "Fluoride Treatment", status: "Waiting" },
];