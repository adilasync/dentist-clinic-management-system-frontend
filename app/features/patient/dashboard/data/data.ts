import type { TreatmentPhase, ActivityItem } from "../../shared/data/types";

export const overviewStats = {
  nextAppointment: { date: "Jun 18, 2026", time: "10:30 AM" },
  outstandingBalance: 320.0,
  loyaltyPoints: 1240,
};

export const treatmentPhases: TreatmentPhase[] = [
  { id: "phase-1", phase: 1, title: "Phase 1: Initial Exam & X-Rays", status: "completed", detail: "Completed March 2026" },
  { id: "phase-2", phase: 2, title: "Phase 2: Deep Cleaning — Upper Arch", status: "in-progress", detail: "Scheduled June 18" },
  { id: "phase-3", phase: 3, title: "Phase 3: Deep Cleaning — Lower Arch", status: "upcoming", detail: "TBD after Phase 2" },
  { id: "phase-4", phase: 4, title: "Phase 4: Crown on Tooth #14", status: "upcoming", detail: "Est. August 2026" },
];

export const treatmentProgress = {
  currentPhaseLabel: "Phase 2 of 4 underway",
  percentComplete: 25,
};

export const upcomingAppointment = {
  doctor: "Dr. Emily Smith",
  date: "June 18, 2026",
  time: "10:30 AM",
  procedure: "Deep Cleaning",
  location: "DentaFlow Dental Center, Suite 204",
};

export const recentActivity: ActivityItem[] = [
  { id: "act-1", description: "Invoice #1042 generated — $320.00", date: "June 1" },
  { id: "act-2", description: "X-Ray taken (Full Mouth Series)", date: "May 15" },
  { id: "act-3", description: "Initial Exam completed", date: "Mar 22" },
  { id: "act-4", description: "Account created", date: "Mar 10" },
];