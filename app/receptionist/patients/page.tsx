// app/receptionist/patients/page.tsx
import { ReceptionistLayout } from "@/features/receptionist/shared/components/ReceptionistLayout";
import { PatientsView } from "@/features/receptionist/patients/views/PatientsView";
export default function ReceptionistPatientsPage() {
  return <ReceptionistLayout title="Patients"><PatientsView /></ReceptionistLayout>;
}