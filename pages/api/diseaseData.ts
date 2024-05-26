// pages/api/diseaseData.ts

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const getDisaeseInfo = async (disease: "dengue" | "chikungunya" | "zika") => {
  const { data } = await axios.get("https://info.dengue.mat.br/api/alertcity", {
    params: {
      format: "json",
      geocode: 1501402, // Belém
      ey_start: 2024,
      ey_end: 2024,
      disease,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const zikaPromise = getDisaeseInfo("zika");
    const denguePromise = getDisaeseInfo("dengue");
    const chikungunyaPromise = getDisaeseInfo("chikungunya");

    const [zikaResult, dengueResult, chikungunyaResult] = await Promise.all([
      zikaPromise,
      chikungunyaPromise,
      denguePromise,
    ]);

    const latestDataZika = zikaResult[0];
    const latestDataChikungunya = chikungunyaResult[0];
    const latestDataDengue = dengueResult[0];

    res.status(200).json({
      totalCases: {
        zika: latestDataZika.notif_accum_year,
        chikungunya: latestDataChikungunya.notif_accum_year,
        dengue: latestDataDengue.notif_accum_year,
        total: latestDataZika.notif_accum_year + latestDataChikungunya.notif_accum_year + latestDataDengue.notif_accum_year,
      },
      currentCases: {
        zika: latestDataZika.casos,
        chikungunya: latestDataChikungunya.casos,
        dengue: latestDataDengue.casos,
        total: latestDataZika.casos + latestDataChikungunya.casos + latestDataDengue.casos,
      },
      alert: {
        zika: latestDataZika.nivel,
        chikungunya: latestDataChikungunya.nivel,
        dengue: latestDataDengue.nivel,
        total: latestDataZika.nivel + latestDataChikungunya.nivel + latestDataDengue.nivel,
      },
      estimatedCasesPerWeek: {
        zika: latestDataZika.casos_est,
        chikungunya: latestDataChikungunya.casos_est,
        dengue: latestDataDengue.casos_est,
        total: latestDataZika.casos_est + latestDataChikungunya.casos_est + latestDataDengue.casos_est,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from API" });
  }
}
