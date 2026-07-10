import type { StaffMember } from "@/features/admin/shared/data/types";

export const staffMembers: StaffMember[] = [
  { id: "s1", name: "Dr. Emily Smith", initials: "DE", role: "Dentist", patientsToday: 8, status: "On Duty" },
  { id: "s2", name: "Dr. Marcus Webb", initials: "DM", role: "Dentist", patientsToday: 6, status: "On Duty" },
  { id: "s3", name: "Priya Lee", initials: "PL", role: "Hygienist", patientsToday: 10, status: "Break" },
  { id: "s4", name: "Tom Harris", initials: "TH", role: "Receptionist", patientsToday: 0, status: "On Duty" },
];