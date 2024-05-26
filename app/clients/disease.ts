import { DiseaseData } from "../types";

export default async function fetchDiseaseData(): Promise<DiseaseData | null> {
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/disease";

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}
