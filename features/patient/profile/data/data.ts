export interface ProfileInfo {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  address: string;
  emergencyName: string;
  emergencyPhone: string;
  insuranceProvider: string;
  insurancePolicy: string;
}

export interface MedicalHistory {
  allergies: string;
  chronicConditions: string;
  currentMedications: string;
  pastSurgeries: string;
  smoker: string;
  pregnant: string;
  bloodPressure: string;
  notes: string;
}

export const initialProfileInfo: ProfileInfo = {
  fullName: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  phone: "(415) 555-0188",
  dob: "1992-04-18",
  gender: "Female",
  address: "742 Mission St, San Francisco, CA 94103",
  emergencyName: "Jordan Johnson",
  emergencyPhone: "(415) 555-0102",
  insuranceProvider: "Delta Dental PPO",
  insurancePolicy: "DD-8842-119",
};

export const initialMedicalHistory: MedicalHistory = {
  allergies: "Penicillin, Latex",
  chronicConditions: "Mild asthma",
  currentMedications: "Albuterol inhaler (as needed)",
  pastSurgeries: "Wisdom teeth extraction (2018)",
  smoker: "No",
  pregnant: "No",
  bloodPressure: "118/76",
  notes: "Sensitivity to cold beverages. Prefers morning appointments.",
};