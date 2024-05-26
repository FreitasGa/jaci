"use client";

import { useEffect, useState } from "react";
import { DiseaseData } from "./types";
import fetchDiseaseData from "./clients/disease";

export default function Home() {
  const [diseaseData, setDiseaseData] = useState<DiseaseData>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      localStorage.setItem("position", JSON.stringify(position));
    });

    fetchDiseaseData().then((data) => setDiseaseData(data));
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
        <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:space-y-0">
          <div className="mx-auto max-w-[900px] space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Indicadores Essenciais
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Monitore os principais indicadores de dengue, zika e chikungunya
              em sua região
            </p>
          </div>
        </div>
      </section>

      {JSON.stringify(diseaseData)}
    </main>
  );
}
