import type { Appointment } from "../types";

export const initialAppointments: Appointment[] = [
  { id: 1, time: "9:00 AM", patient: "James Carter", phone: "(415) 555-0142", dentist: "Dr. Emily Smith", procedure: "Root Canal", status: "In Progress", payment: "Pending", amount: 320 },
  { id: 2, time: "9:30 AM", patient: "Sarah Johnson", phone: "(415) 555-0188", dentist: "Priya Lee", procedure: "Cleaning", status: "Checked-In", payment: "Paid", amount: 180 },
  { id: 3, time: "10:00 AM", patient: "Robert Kim", phone: "(415) 555-0173", dentist: "Dr. Marcus Webb", procedure: "Crown Prep", status: "Completed", payment: "Paid", amount: 1400 },
  { id: 4, time: "10:45 AM", patient: "Aisha Patel", phone: "(415) 555-0119", dentist: "Dr. Emily Smith", procedure: "Crown Prep", status: "Waiting", payment: "Insurance", amount: 1400 },
  { id: 5, time: "11:30 AM", patient: "Liam Brown", phone: "(415) 555-0156", dentist: "Dr. Marcus Webb", procedure: "Filling", status: "Confirmed", payment: "Pending", amount: 300 },
  { id: 6, time: "1:00 PM", patient: "Carlos Rivera", phone: "(415) 555-0101", dentist: "Dr. Emily Smith", procedure: "Extraction", status: "Confirmed", payment: "Overdue", amount: 500 },
  { id: 7, time: "2:00 PM", patient: "Emily Watson", phone: "(415) 555-0167", dentist: "Dr. Emily Smith", procedure: "Composite Filling", status: "Confirmed", payment: "Paid", amount: 300 },
  { id: 8, time: "3:30 PM", patient: "Noah Patel", phone: "(415) 555-0134", dentist: "Dr. Emily Smith", procedure: "Fluoride Treatment", status: "Confirmed", payment: "Pending", amount: 80 },
];