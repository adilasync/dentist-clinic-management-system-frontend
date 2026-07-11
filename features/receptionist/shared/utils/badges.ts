export const statusBadge: Record<string, string> = {
  Confirmed: "bg-emerald-100 text-emerald-700",
  "Checked-In": "bg-blue-100 text-blue-700",
  Waiting: "bg-amber-100 text-amber-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Completed: "bg-slate-100 text-slate-600",
  Cancelled: "bg-red-100 text-red-700",
  Requested: "bg-violet-100 text-violet-700",
  Assigned: "bg-indigo-100 text-indigo-700",
  Rejected: "bg-red-100 text-red-700",
  "Needs Reschedule": "bg-amber-100 text-amber-700",
  Available: "bg-emerald-100 text-emerald-700",
  Off: "bg-slate-100 text-slate-600",
  High: "bg-red-100 text-red-700",
  Normal: "bg-blue-100 text-blue-700",
  Low: "bg-slate-100 text-slate-600",
};
export const paymentBadge: Record<string, string> = {
  Paid: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Overdue: "bg-red-100 text-red-700",
  Insurance: "bg-blue-100 text-blue-700",
};
export const badgeClass = (status: string) => `rounded-full px-2.5 py-1 text-xs font-medium ${statusBadge[status] || "bg-slate-100 text-slate-600"}`;
export const paymentBadgeClass = (status: string) => `rounded-full px-2.5 py-1 text-xs font-medium ${paymentBadge[status] || "bg-slate-100 text-slate-600"}`;