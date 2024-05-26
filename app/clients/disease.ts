import { DiseaseData } from "../types";

export default async function fetchDiseaseData(): Promise<DiseaseData> {
  const response = await fetch("http://localhost:3000/api/disease", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
