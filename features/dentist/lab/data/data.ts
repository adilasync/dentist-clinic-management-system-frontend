import type { LabItem } from "@/features/dentist/shared/types";

export const labWork: LabItem[] = [
  { lab: "Apex Dental Lab", patient: "Robert Kim", item: "Porcelain Crown #14", sent: "May 24", expected: "Jun 7", status: "Pending" },
  { lab: "Crown Masters", patient: "Lisa Wong", item: "Bridge 22-24", sent: "May 18", expected: "Jun 1", status: "Received" },
  { lab: "Apex Dental Lab", patient: "Mark Davis", item: "Night Guard", sent: "May 10", expected: "May 28", status: "Overdue" },
];