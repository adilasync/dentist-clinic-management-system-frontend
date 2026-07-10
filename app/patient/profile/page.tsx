import { PatientLayout } from "@/features/patient/shared/components/PatientLayout";
import { ProfileView } from "@/features/patient/profile/views/ProfileView";

export default function ProfilePage() {
  return (
    <PatientLayout title="My Profile">
      <ProfileView />
    </PatientLayout>
  );
}