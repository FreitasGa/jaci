"use client";

import { DataBox } from "./components/dataBox";
import { useDiseaseData } from "./diseaseHook";
import { SectionHeader } from "./components/sectionHeader";
import { Color } from "../types";

const alertToColor: Record<number, Color> = {
  1: Color.Green,
  2: Color.Yellow,
  3: Color.Orange,
  4: Color.Red,
};

const alertToText: Record<number, string> = {
  1: "Atividade viral baixa",
  2: "Atividade viral controlável",
  3: "Atividade viral alta, porém dentro dos níveis históricos",
  4: "Incidência alta para padrões históricos",
};

export default function Cases() {
  const { data, isLoading } = useDiseaseData();

  return (
    <>
      <main className="container flex flex-col min-h-[100dvh] mx-auto px-4 py-8 md:px-6 md:py-12">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-8 px-4 md:px-6 lg:space-y-12">
            <SectionHeader
              title="Indicadores Essenciais"
              subTitle="Monitore os principais indicadores de dengue, zika e chikungunya em sua região"
            />
            {isLoading ? (
              <></>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <DataBox
                  description="Número total de casos combinados de dengue, zika e chikungunya registrados este ano."
                  title="Total de Casos Anuais"
                  value={data!.totalCases.total}
                />
                <DataBox
                  description="Número de novos casos combinados de dengue, zika e chikungunya registrados nesta semana."
                  title="Casos Atuais Semanais"
                  value={data!.currentCases.total}
                />
                <DataBox
                  description="Estimativa de novos casos combinados de dengue, zika e chikungunya para a semana."
                  title="Estimativa de Casos para Semana"
                  value={data!.estimatedCasesPerWeek.total}
                />
                <DataBox
                  description="Número total de alertas de dengue, zika e chikungunya emitidos."
                  title="Nivel de Alerta"
                  value={alertToText[data!.alert.dengue]}
                  color={alertToColor[data!.alert.dengue]}
                />
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
