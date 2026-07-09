import { PatientLayout } from "@/features/patient/shared/components/PatientLayout";
import { RequestAppointmentView } from "@/features/patient/request-appointment/views/RequestAppointmentView";

export default function RequestAppointmentPage() {
  return (
    <PatientLayout title="Request Appointment">
      <RequestAppointmentView />
    </PatientLayout>
  );
}