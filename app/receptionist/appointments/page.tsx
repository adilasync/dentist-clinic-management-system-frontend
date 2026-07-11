// app/receptionist/appointments/page.tsx
import { ReceptionistLayout } from "@/features/receptionist/shared/components/ReceptionistLayout";
import { AppointmentsView } from "@/features/receptionist/appointments/views/AppointmentsView";
export default function ReceptionistAppointmentsPage() {
  return <ReceptionistLayout title="Appointments"><AppointmentsView /></ReceptionistLayout>;
}