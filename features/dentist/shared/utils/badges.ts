export const statusBadge: Record<string, string> = {
  "In Progress": "bg-blue-100 text-blue-700",
  Waiting: "bg-amber-100 text-amber-700",
  Upcoming: "bg-slate-100 text-slate-700",
  Confirmed: "bg-emerald-100 text-emerald-700",
  Completed: "bg-emerald-100 text-emerald-700",
  Break: "bg-slate-100 text-slate-500",
  Pending: "bg-amber-100 text-amber-700",
  Received: "bg-emerald-100 text-emerald-700",
  Overdue: "bg-red-100 text-red-700",
  Assigned: "bg-indigo-100 text-indigo-700",
  "Needs Reschedule": "bg-amber-100 text-amber-700",
  High: "bg-red-100 text-red-700",
  Normal: "bg-blue-100 text-blue-700",
  Low: "bg-slate-100 text-slate-600",
};
export const badgeClass = (status: string) => `rounded-full px-2.5 py-1 text-xs font-medium ${statusBadge[status] || "bg-slate-100 text-slate-600"}`;