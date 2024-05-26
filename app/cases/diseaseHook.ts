// hooks/useDiseaseData.ts

import { useEffect, useState } from "react";
import axios from "axios";
import { RequestDiseaseData } from "./types";

export const useDiseaseData = () => {
  const [data, setData] = useState<RequestDiseaseData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/diseaseData"
        );
        setData(response.data);
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
