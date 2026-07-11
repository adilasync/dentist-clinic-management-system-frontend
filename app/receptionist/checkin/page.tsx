// app/receptionist/checkin/page.tsx
import { ReceptionistLayout } from "@/features/receptionist/shared/components/ReceptionistLayout";
import { CheckInView } from "@/features/receptionist/checkin/views/CheckInView";
export default function ReceptionistCheckInPage() {
  return <ReceptionistLayout title="Check-In Queue"><CheckInView /></ReceptionistLayout>;
}