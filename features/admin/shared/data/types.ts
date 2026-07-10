export interface AdminUser { name: string; initials: string; role: string; }
export interface ChairStatusRow { chair: string; assignedTo: string; patient: string; procedure: string; status: "In Progress" | "Waiting" | "Completed" | "Available"; time: string; }
export interface AppointmentRow { time: string; patient: string; dentist: string; procedure: string; status: "In Progress" | "Waiting" | "Completed"; }
export interface StaffMember { id: string; name: string; initials: string; role: string; patientsToday: number; status: "On Duty" | "Break" | "Off Duty"; }