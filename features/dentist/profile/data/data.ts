export interface DoctorProfile {
  fullName: string; email: string; phone: string; license: string;
  years: number; consultationFee: number; education: string; bio: string;
}

export interface DaySlot { start: string; end: string; }
export interface DayAvailability { active: boolean; specialty: string; slots: DaySlot[]; }

export const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;
export const SPECIALTIES = ["General Dentistry", "Endodontics", "Orthodontics", "Periodontics", "Pediatric", "Oral Surgery", "Cosmetic", "Implantology"];

export const initialDoctorProfile: DoctorProfile = {
  fullName: "Dr. Emily Smith",
  email: "emily.smith@dentaflow.io",
  phone: "(415) 555-0142",
  license: "DDS-CA-48291",
  years: 12,
  consultationFee: 150,
  education: "DDS, UCSF School of Dentistry (2014)\nResidency, NYU Langone (2015)",
  bio: "Board-certified dentist focused on restorative and cosmetic dentistry. Passionate about gentle, evidence-based care.",
};

export const initialAvailability: Record<string, DayAvailability> = {
  Monday: { active: true, specialty: "General Dentistry", slots: [{ start: "09:00", end: "12:00" }, { start: "14:00", end: "17:00" }] },
  Tuesday: { active: true, specialty: "Endodontics", slots: [{ start: "08:30", end: "13:00" }] },
  Wednesday: { active: true, specialty: "Cosmetic", slots: [{ start: "10:00", end: "16:00" }] },
  Thursday: { active: true, specialty: "Implantology", slots: [{ start: "09:00", end: "12:00" }, { start: "13:30", end: "18:00" }] },
  Friday: { active: true, specialty: "Periodontics", slots: [{ start: "09:00", end: "14:00" }] },
  Saturday: { active: false, specialty: "General Dentistry", slots: [] },
  Sunday: { active: false, specialty: "General Dentistry", slots: [] },
};