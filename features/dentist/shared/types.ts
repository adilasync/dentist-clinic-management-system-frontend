export interface DentistUser { name: string; initials: string; role: string; }

export interface ScheduleItem {
  id: number; date: string; day: string; time: string; duration: string;
  patient: string; age: number | null; procedure: string; room?: string;
  status: "In Progress" | "Upcoming" | "Confirmed" | "Break";
  alert: string | null;
}

export interface ClinicalNote { id: number; patient: string; date: string; procedure: string; signed: boolean; }
export interface LabItem { lab: string; patient: string; item: string; sent: string; expected: string; status: "Pending" | "Received" | "Overdue"; }
export interface XrayItem { date: string; type: string; tooth: string; }
export interface MessageThread { id: number; patient: string; lastMessage: string; time: string; unread: boolean; }

export interface AppointmentRequest {
  id: number; patient: string; phone: string; reason: string;
  urgency: "High" | "Normal" | "Low";
  preferredDate: string; preferredTime: string;
  treatmentId: string | null;
  status: "Assigned" | "Confirmed" | "Completed" | "Needs Reschedule";
  scheduledDate: string | null; scheduledTime: string | null;
}