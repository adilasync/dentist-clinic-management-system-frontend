"use client";

import { useState } from "react";
import { initialProfileInfo, initialMedicalHistory, ProfileInfo, MedicalHistory } from "../data/data";
import { ProfileStatCards } from "../components/ProfileStatCards";
import { PersonalInfoCard } from "../components/PersonalInfoCard";
import { EmergencyInsuranceCard } from "../components/EmergencyInsuranceCard";
import { MedicalHistoryCard } from "../components/MedicalHistoryCard";

export function ProfileView() {
  const [info, setInfo] = useState<ProfileInfo>(initialProfileInfo);
  const [history, setHistory] = useState<MedicalHistory>(initialMedicalHistory);
  const [saved, setSaved] = useState(false);

  const updateInfo = (k: keyof ProfileInfo, v: string) => setInfo((prev) => ({ ...prev, [k]: v }));
  const updateHistory = (k: keyof MedicalHistory, v: string) => setHistory((prev) => ({ ...prev, [k]: v }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      <ProfileStatCards info={info} history={history} />
      <PersonalInfoCard info={info} onChange={updateInfo} />
      <EmergencyInsuranceCard info={info} onChange={updateInfo} />
      <MedicalHistoryCard history={history} onChange={updateHistory} onSave={handleSave} saved={saved} />
    </div>
  );
}