// app/admin/appointments/page.tsx
import { AdminLayout } from "@/features/admin/shared/components/AdminLayout";
import { AppointmentsView } from "@/features/admin/appointment/views/AppointmentsView";
export default function AdminAppointmentsPage() {
  return <AdminLayout title="Appointments"><AppointmentsView /></AdminLayout>;
}