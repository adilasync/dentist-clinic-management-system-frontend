import type { Appointment } from "../../shared/data/types";

export const nextVisit = {
  date: "June 18, 2026",
  time: "10:30 AM",
  procedure: "Deep Cleaning",
  doctor: "Dr. Emily Smith",
  location: "Suite 204, DentaFlow Dental Center",
};

export const appointments: Appointment[] = [
  { id: "apt-1", date: "Jun 18, 2026", time: "10:30 AM", doctor: "Dr. Emily Smith", procedure: "Deep Cleaning — Upper Arch", duration: "45 min", status: "Confirmed" },
  { id: "apt-2", date: "Jul 09, 2026", time: "2:00 PM", doctor: "Dr. Emily Smith", procedure: "Deep Cleaning — Lower Arch", duration: "45 min", status: "Pending" },
  { id: "apt-3", date: "Aug 14, 2026", time: "9:00 AM", doctor: "Dr. Marcus Webb", procedure: "Crown Prep — Tooth #14", duration: "90 min", status: "Pending" },
];

export const availableSlots = ["Tue 9:00", "Tue 1:30", "Wed 10:15", "Wed 3:00", "Thu 11:00", "Fri 2:45"];