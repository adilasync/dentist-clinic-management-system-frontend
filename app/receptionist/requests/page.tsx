// app/receptionist/requests/page.tsx
import { ReceptionistLayout } from "@/features/receptionist/shared/components/ReceptionistLayout";
import { RequestsView } from "@/features/receptionist/requests/views/RequestsView";
export default function ReceptionistRequestsPage() {
  return <ReceptionistLayout title="Requests"><RequestsView /></ReceptionistLayout>;
}