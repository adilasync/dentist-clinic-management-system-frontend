import { AdminLayout } from "@/features/admin/shared/components/AdminLayout";
import { AnalyticsView } from "@/features/admin/analytics/views/AnalyticsView";
export default function AdminAnalyticsPage() {
  return <AdminLayout title="Analytics"><AnalyticsView /></AdminLayout>;
}