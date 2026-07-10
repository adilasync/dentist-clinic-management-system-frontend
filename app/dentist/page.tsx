// app/dentist/page.tsx
import { DentistLayout } from "../../features/dentist/shared/components/DentistLayout";
import { DashboardView } from "../../features/dentist/dashboard/views/DashboardView";
export default function DentistDashboardPage() {
  return <DentistLayout title="My Dashboard"><DashboardView /></DentistLayout>;
}