export interface ReceptionistUser { name: string; initials: string; role: string; }

export interface ApptStatus { status: "Confirmed" | "Checked-In" | "Waiting" | "In Progress" | "Completed" | "Cancelled"; }
export type PaymentStatus = "Paid" | "Pending" | "Overdue" | "Insurance";

export interface Appointment {
  id: number; time: string; patient: string; phone: string; dentist: string;
  procedure: string; status: ApptStatus["status"]; payment: PaymentStatus; amount: number;
}

export interface CallLog { time: string; name: string; type: "Missed" | "Inbound" | "Outbound"; reason: string; }
export interface Doctor { name: string; specialty: string; available: boolean; todaySlots: number; }
export interface HistoryEntry { when: string; by: string; action: string; }

export interface AppointmentRequest {
  id: number; patient: string; phone: string; reason: string;
  urgency: "High" | "Normal" | "Low"; preferredDate: string; preferredTime: string;
  treatmentId: string | null;
  status: "Requested" | "Assigned" | "Rejected" | "Confirmed" | "Needs Reschedule" | "Cancelled" | "Completed";
  assignedDoctor: string | null; rejectedDoctors: string[]; rejectionReason: string | null;
  scheduledDate: string | null; scheduledTime: string | null; cancellationReason: string | null;
  history: HistoryEntry[];
}