import { RequestBanner } from "../components/RequestBanner";
import { RequestFormCard } from "../components/RequestFormCard";
import { MyRequestsList } from "../components/MyRequestsList";

export function RequestAppointmentView() {
  return (
    <div className="flex flex-col gap-6">
      <RequestBanner />
      <RequestFormCard />
      <MyRequestsList />
    </div>
  );
}