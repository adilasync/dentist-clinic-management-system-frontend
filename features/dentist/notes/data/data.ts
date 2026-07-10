import type { ClinicalNote } from "@/features/dentist/shared/types";

export const initialNotes: ClinicalNote[] = [
  { id: 1, patient: "James Carter", date: "Jun 1, 2026", procedure: "Root Canal", signed: false },
  { id: 2, patient: "Aisha Patel", date: "May 30, 2026", procedure: "Consultation", signed: true },
  { id: 3, patient: "Carlos Rivera", date: "May 28, 2026", procedure: "Extraction Plan", signed: false },
  { id: 4, patient: "Emily Watson", date: "May 25, 2026", procedure: "Composite Filling", signed: true },
];