import { staffMembers } from "../data/data";
import { StaffCard } from "./StaffCard";

export function StaffGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {staffMembers.map((member) => <StaffCard key={member.id} member={member} />)}
    </div>
  );
}