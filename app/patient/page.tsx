import { PatientLayout } from "@/features/patient/shared/components/PatientLayout";
import { DashboardView } from "@/features/patient/dashboard/views/DashboardView";

export default function PatientDashboardPage() {
  return (
    <PatientLayout title="My Overview">
      <DashboardView />
    </PatientLayout>
  );
}