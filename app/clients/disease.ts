import { DiseaseData } from "../types";

export default async function fetchDiseaseData(): Promise<DiseaseData | null> {
  const response = await fetch("/api/disease", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}
