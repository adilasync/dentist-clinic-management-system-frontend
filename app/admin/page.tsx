import { AdminLayout } from "@/features/admin/shared/components/AdminLayout";
import { OverviewView } from "@/features/admin/overview/views/OverviewView";
export default function AdminOverviewPage() {
  return <AdminLayout title="Overview"><OverviewView /></AdminLayout>;
}