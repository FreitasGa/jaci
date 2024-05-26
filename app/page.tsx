"use client";

import { useEffect, useState } from "react";
import { Color, DiseaseData, News } from "./types";
import fetchDiseaseData from "./clients/disease";
import IndicatorBox from "./components/indicator-box";
import { fetchNews } from "./clients/news";
import NewsBox from "./components/news-box";
import { ResponsiveBar } from "@nivo/bar";

const alertToColor: Record<number, Color> = {
  1: Color.Green,
  2: Color.Yellow,
  3: Color.Orange,
  4: Color.Red,
};

interface AlertInfo {
  value: string;
  description: string;
}

const alertToText: Record<number, AlertInfo> = {
  1: {
    value: "Baixo",
    description:
      "Condições desfavoráveis para transmissão / risco baixo de transmissão",
  },
  2: {
    value: "Moderado",
    description:
      "Condições favoráveis à transmissão viral com presença de circulação viral",
  },
  3: {
    value: "Alto",
    description: "Atividade elevada, porém dentro dos padrões históricos",
  },
  4: {
    value: "Muito Alto",
    description:
      "Incidência extremamente alta em comparação com os padrões históricos",
  },
};

export default function Home() {
  const [diseaseData, setDiseaseData] = useState<DiseaseData>();
  const [news, setNews] = useState<News[]>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      localStorage.setItem("position", JSON.stringify(position));
    });

    fetchDiseaseData().then((data) => {
      if (data !== null) {
        console.log(data);
        setDiseaseData(data);
      }
    });

    fetchNews().then((data) => {
      if (data !== null) {
        setNews(data);
      }
    });
  }, []);

  return (
    <main className="container flex flex-col min-h-[100dvh] mx-auto px-4 py-8 md:px-6 md:py-12">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">
            Jaci
          </h1>
          <div className="space-y-2 text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <p>
              Aqui, você encontrará uma vasta gama de informações sobre essas
              três importantes doenças transmitidas pelo mosquito Aedes aegypti.
              Nosso objetivo é fornecer um recurso completo e confiável para
              ajudar você a entender, prevenir e combater essas doenças.
            </p>
            <p>Navegue pelas nossas seções para descobrir:</p>
            <ul className="list-disc list-inside">
              <li>
                <b>Indicadores e Estatísticas:</b> Análises e gráficos que
                mostram a evolução dos casos de dengue, zika e chikungunya,
                proporcionando uma visão clara da situação epidemiológica.
              </li>
              <li>
                <b>Sintomas:</b> Informações detalhadas sobre os sinais e
                sintomas de dengue, zika e chikungunya, ajudando você a
                reconhecer cada doença rapidamente.
              </li>
              <li>
                <b>Prevenção e Combate:</b> Estratégias práticas para prevenir a
                proliferação do mosquito e combater as doenças de forma eficaz.
              </li>
              <li>
                <b>Informações Educativas:</b> Materiais educativos que ajudam a
                disseminar o conhecimento sobre essas doenças e as melhores
                práticas para evitá-las.
              </li>
            </ul>
            <p>
              Estamos comprometidos em oferecer informações precisas e
              atualizadas para que você possa proteger sua saúde e a de sua
              comunidade. Juntos, podemos fazer a diferença na luta contra
              dengue, zika e chikungunya. Explore nosso site e fique bem
              informado!
            </p>
          </div>
        </div>
      </section>
      <section className="w-full border-t py-12 md:py-24 lg:py-32">
        <div className="space-y-8 text-center md:flex-row">
          <div className="mx-auto max-w-[900px] space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Indicadores Essenciais
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Monitore os principais indicadores de dengue, zika e chikungunya
              em sua região
            </p>
          </div>
          {diseaseData && (
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              <IndicatorBox
                title="Total de Casos Anuais"
                description="Número total de casos combinados de dengue, zika e chikungunya registrados este ano."
                value={diseaseData.totalCases.total}
              />
              <IndicatorBox
                title="Casos Atuais"
                description="Casos Atuais Semanais"
                value={diseaseData.currentCases.total}
              />
              <IndicatorBox
                title="Estimativa de Casos para essa Semana"
                description="Estimativa de novos casos combinados de dengue, zika e chikungunya para a semana."
                value={diseaseData.estimatedCasesPerWeek.total}
              />
              <IndicatorBox
                title="Nível de Alerta - Zika"
                value={alertToText[diseaseData!.alert.zika].value}
                description={alertToText[diseaseData!.alert.zika].description}
                color={alertToColor[diseaseData!.alert.zika]}
              />
              <IndicatorBox
                title="Nível de Alerta - Dengue"
                value={alertToText[diseaseData!.alert.dengue].value}
                description={alertToText[diseaseData!.alert.dengue].description}
                color={alertToColor[diseaseData!.alert.dengue]}
              />
              <IndicatorBox
                title="Nível de Alerta - Chikungunya"
                value={alertToText[diseaseData!.alert.chikungunya].value}
                description={
                  alertToText[diseaseData!.alert.chikungunya].description
                }
                color={alertToColor[diseaseData!.alert.chikungunya]}
              />
            </div>
          )}
        </div>
      </section>
      <section className="w-full border-t py-12 md:py-24 lg:py-32">
        <div className="space-y-8 text-center md:flex-row">
          <div className="mx-auto max-w-[900px] space-y-2">
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Total de casos registrados até o momento
            </p>
          </div>
          {diseaseData && (
            <div style={{ height: "200px" }}>
              <ResponsiveBar
                data={[
                  {
                    disease: "Dengue",
                    casos: diseaseData.totalCases.dengue,
                  },
                  {
                    disease: "Chikungunya",
                    casos: diseaseData.totalCases.chikungunya,
                  },
                  {
                    disease: "Zika",
                    casos: diseaseData.totalCases.zika,
                  },
                ]}
                margin={{ top: 50, right: 130, bottom: 50, left: 120 }}
                keys={["casos"]}
                indexBy="disease"
                padding={0.35}
                layout="horizontal"
                valueScale={{ type: "linear" }}
                colors={"#2A4330"}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Número de casos",
                  legendPosition: "middle",
                  legendOffset: 32,
                }}
                axisTop={null}
                axisRight={null}
                labelTextColor="#ffebeb"
                legends={[
                  {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemOpacity: 1,
                        },
                      },
                    ],
                    itemTextColor: "#000",
                  },
                ]}
                labelSkipWidth={22}
                labelSkipHeight={22}
              />
            </div>
          )}
        </div>
      </section>
      <section className="w-full border-t py-12 md:py-24 lg:py-32">
        <div></div>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news &&
            news.map((news) => (
              <NewsBox
                key={news.title}
                title={news.title}
                author={news.author}
                url={news.url}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
