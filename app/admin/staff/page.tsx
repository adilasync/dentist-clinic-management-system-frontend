// app/admin/staff/page.tsx
import { AdminLayout } from "@/features/admin/shared/components/AdminLayout";
import { StaffView } from "@/features/admin/staff/views/StaffView";
export default function AdminStaffPage() {
  return <AdminLayout title="Staff"><StaffView /></AdminLayout>;
}