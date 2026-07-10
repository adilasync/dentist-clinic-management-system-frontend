import type { ChairStatusRow } from "@/features/admin/shared/data/types";

export const kpis = {
  todaysRevenue: { value: "$4,280", trend: "+12% vs yesterday" },
  patientsToday: { value: 18, remaining: 3 },
  chairUtilization: { value: "3/4 Active", percent: 75 },
  pendingInvoices: { value: 7, total: "$1,340 total" },
};

export const revenueLast7Days = [
  { day: "Mon", revenue: 3200 }, { day: "Tue", revenue: 3900 }, { day: "Wed", revenue: 3100 },
  { day: "Thu", revenue: 4700 }, { day: "Fri", revenue: 5100 }, { day: "Sat", revenue: 4000 }, { day: "Sun", revenue: 4600 },
];

export const appointmentStatusToday = [
  { name: "Completed", value: 45, color: "#10b981" },
  { name: "In Progress", value: 20, color: "#3b82f6" },
  { name: "Waiting", value: 25, color: "#f59e0b" },
  { name: "Cancelled", value: 10, color: "#ef4444" },
];

export const chairStatus: ChairStatusRow[] = [
  { chair: "Chair 1", assignedTo: "Dr. Emily Smith", patient: "James Carter", procedure: "Root Canal", status: "In Progress", time: "45 min left" },
  { chair: "Chair 2", assignedTo: "Hygienist Priya Lee", patient: "Sarah Johnson", procedure: "Teeth Cleaning", status: "Waiting", time: "Next up" },
  { chair: "Chair 3", assignedTo: "Dr. Marcus Webb", patient: "Robert Kim", procedure: "Crown Prep", status: "Completed", time: "Done at 2:30 PM" },
  { chair: "Chair 4", assignedTo: "—", patient: "—", procedure: "—", status: "Available", time: "—" },
];