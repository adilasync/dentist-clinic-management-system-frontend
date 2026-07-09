export interface Patient {
  id: string;
  name: string;
  initials: string;
  role: string;
}

export interface TreatmentPhase {
  id: string;
  phase: number;
  title: string;
  status: "completed" | "in-progress" | "upcoming";
  detail: string;
}

export interface Appointment {
  id: string;
  date: string;
  time: string;
  doctor: string;
  procedure: string;
  duration: string;
  status: "Confirmed" | "Pending" | "Cancelled" | "Completed";
}

export interface ActivityItem {
  id: string;
  description: string;
  date: string;
}

export interface AppointmentRequest {
  id: string;
  patientName: string;
  status: "Requested" | "Scheduled" | "Declined";
  urgency: "Low" | "Normal" | "High urgency";
  reason: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
}