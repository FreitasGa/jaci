// hooks/useDiseaseData.ts

import { useEffect, useState } from "react";
import { DiseaseData } from "../types";

export const useDiseaseData = () => {
  const [data, setData] = useState<DiseaseData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/disease"
        );

        setData(await response.json());
        setIsLoading(false);
      } catch (error) {
        console.error("Error in diseases API", { error });
        setError("Failed to fetch data");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, isLoading };
};
