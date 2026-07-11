// app/receptionist/payments/page.tsx
import { ReceptionistLayout } from "@/features/receptionist/shared/components/ReceptionistLayout";
import { PaymentsView } from "@/features/receptionist/payments/views/PaymentsView";
export default function ReceptionistPaymentsPage() {
  return <ReceptionistLayout title="Payments"><PaymentsView /></ReceptionistLayout>;
}