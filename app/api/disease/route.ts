import { DiseaseEnum } from "@/app/types";

async function fetchDiseaseData(disease: DiseaseEnum) {
  const params = new URLSearchParams({
    geocode: "1501402",
    ey_start: "2024",
    ey_end: "2024",
    format: "json",
    disease: disease,
  });

  const url = new URL("https://info.dengue.mat.br/api/alertcity");
  url.search = params.toString();

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export async function GET() {
  try {
    const diseases: DiseaseEnum[] = [
      DiseaseEnum.zika,
      DiseaseEnum.dengue,
      DiseaseEnum.chikungunya,
    ];

    const promises = diseases.map((disease) => fetchDiseaseData(disease));

    const [zikaResult, dengueResult, chikungunyaResult] = await Promise.all(
      promises
    );

    const latestDataZika = zikaResult[0];
    const latestDataDengue = dengueResult[0];
    const latestDataChikungunya = chikungunyaResult[0];

    const res = {
      totalCases: {
        zika: latestDataZika.notif_accum_year,
        chikungunya: latestDataChikungunya.notif_accum_year,
        dengue: latestDataDengue.notif_accum_year,
        total:
          latestDataZika.notif_accum_year +
          latestDataChikungunya.notif_accum_year +
          latestDataDengue.notif_accum_year,
      },
      currentCases: {
        zika: latestDataZika.casos,
        chikungunya: latestDataChikungunya.casos,
        dengue: latestDataDengue.casos,
        total:
          latestDataZika.casos +
          latestDataChikungunya.casos +
          latestDataDengue.casos,
      },
      alert: {
        zika: latestDataZika.nivel,
        chikungunya: latestDataChikungunya.nivel,
        dengue: latestDataDengue.nivel,
        total:
          latestDataZika.nivel +
          latestDataChikungunya.nivel +
          latestDataDengue.nivel,
      },
      estimatedCasesPerWeek: {
        zika: latestDataZika.casos_est,
        chikungunya: latestDataChikungunya.casos_est,
        dengue: latestDataDengue.casos_est,
        total:
          latestDataZika.casos_est +
          latestDataChikungunya.casos_est +
          latestDataDengue.casos_est,
      },
    };

    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Internal server error", { status: 500 });
  }
}
