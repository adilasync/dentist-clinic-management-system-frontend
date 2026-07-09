import { PatientLayout } from "@/features/patient/shared/components/PatientLayout";
import { AppointmentsView } from "@/features/patient/appointments/views/AppointmentsView";

export default function PatientAppointmentsPage() {
  return (
    <PatientLayout title="Appointments">
      <AppointmentsView />
    </PatientLayout>
  );
}