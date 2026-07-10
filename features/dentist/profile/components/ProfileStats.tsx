import { Clock, Calendar, Stethoscope, DollarSign } from "lucide-react";
import { StatCard } from "@/features/dentist/shared/components/StatCard";
import type { DayAvailability, DoctorProfile } from "../data/data";

export function ProfileStats({ availability, profile }: { availability: Record<string, DayAvailability>; profile: DoctorProfile }) {
  const values = Object.values(availability);
  let mins = 0;
  values.forEach((d) => { if (d.active) d.slots.forEach((s) => {
    const [sh, sm] = s.start.split(":").map(Number);
    const [eh, em] = s.end.split(":").map(Number);
    mins += (eh * 60 + em) - (sh * 60 + sm);
  }); });
  const totalHours = (mins / 60).toFixed(1);
  const workingDays = values.filter((d) => d.active).length;
  const specialties = new Set(values.filter((d) => d.active).map((d) => d.specialty)).size;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <StatCard icon={Clock} color="blue" label="Weekly Hours" value={`${totalHours}h`} />
      <StatCard icon={Calendar} color="cyan" label="Working Days" value={workingDays} />
      <StatCard icon={Stethoscope} color="emerald" label="Specialties" value={specialties} />
      <StatCard icon={DollarSign} color="amber" label="Consultation" value={`$${profile.consultationFee}`} />
    </div>
  );
}