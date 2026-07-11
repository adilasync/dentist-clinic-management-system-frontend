// app/receptionist/page.tsx
import { ReceptionistLayout } from "@/features/receptionist/shared/components/ReceptionistLayout";
import {OverviewView} from "@/features/receptionist/overview/views/OverviewView";
export default function ReceptionistOverviewPage() {
  return <ReceptionistLayout title="Front Desk"><OverviewView /></ReceptionistLayout>;
}