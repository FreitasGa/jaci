"use client";

import { BarChart, BookOpen, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { DiseaseData, News } from "../../types";
import fetchDiseaseData from "../../clients/disease";
import { fetchNews } from "../../clients/news";
import IndicatorBox from "../../components/indicator-box";
import NewsBox from "../../components/news-box";

export default function Home() {
  const [diseaseData, setDiseaseData] = useState<DiseaseData>();
  const [news, setNews] = useState<News[]>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      localStorage.setItem("position", JSON.stringify(position));
    });

    fetchDiseaseData().then((data) => {
      if (data !== null) {
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
    <main className="min-h-[100dvh]">
      <section
        style={{
          backgroundImage: `url('/background.jpg')`,
        }}
        className="flex flex-col text-gray-50 space-y-16 w-full pt-32 pb-8 md:pt-48 md:pb-12 lg:pb-16 lg:pt-72 bg-cover bg-center bg-no-repeat"
      >
        <div className="container mx-auto px-4 space-y-2">
          <h1 className="text-3xl font-bold tracking-normal md:text-4xl/tight lg:text-5xl/tight">
            Bem-vindo ao Jaci
          </h1>
          <p className="text-base md:text-lg lg:text-xl/relaxed">
            Aqui você encontra informações sobre a dengue, zika e chikungunya
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 w-full py-12 md:py-24 lg:py-32">
        <div className="space-y-8 text-center">
          <h2 className="text-[#12664f] text-2xl font-bold tracking-tighter md:text-3xl/tight lg:text-4xl/tight">
            Navegue para Descobrir
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center p-4 text-center space-y-4">
              <BarChart color="#09342b" />
              <h4 className="text-lg font-bold">Indicadores e Estatísticas</h4>
              <p>
                Análises e gráficos que mostram a evolução dos casos de dengue,
                zika e chikungunya
              </p>
            </div>
            <div className="flex flex-col items-center p-4 text-center space-y-4">
              <Shield color="#09342b" />
              <h4 className="text-lg font-bold">Prevenção e Combate</h4>
              <p>
                Estratégias práticas para prevenir a proliferação do mosquito e
                combater as doenças de forma eficaz
              </p>
            </div>
            <div className="flex flex-col items-center p-4 text-center space-y-4">
              <BookOpen color="#09342b" />
              <h4 className="text-lg font-bold">Sintomas</h4>
              <p>
                Informações detalhadas sobre os sinais e sintomas de dengue,
                zika e chikungunya
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 w-full border-t py-12 md:py-24 lg:py-32">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-[#12664f] text-2xl font-bold tracking-tighter md:text-3xl/tight lg:text-4xl/tight">
              Indicadores Essenciais
            </h2>
            <p className="text-base md:text-lg">
              Monitore os principais indicadores de dengue, zika e chikungunya
              em sua região
            </p>
          </div>
          {diseaseData && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:px-40">
              <IndicatorBox
                title="Casos Anuais"
                description="Número total de casos combinados de dengue, zika e chikungunya registrados este ano."
                value={diseaseData.totalCases.total}
              />
              <IndicatorBox
                title="Casos Semanais"
                description="Número de novos casos combinados de dengue, zika e chikungunya registrados nesta semana."
                value={diseaseData.currentCases.total}
              />
              <IndicatorBox
                title="Estimativa de Casos para Semana"
                description="Estimativa de novos casos combinados de dengue, zika e chikungunya para a semana."
                value={diseaseData.estimatedCasesPerWeek.total}
              />
              <IndicatorBox
                title="Nível de Alerta - Dengue"
                description="Número total de alertas de dengue emitidos."
                value={diseaseData.alert.dengue}
              />
              <IndicatorBox
                title="Nível de Alerta - Zika"
                description="Número total de alertas de zika emitidos."
                value={diseaseData.alert.zika}
              />
              <IndicatorBox
                title="Nível de Alerta - Chikungunya"
                description="Número total de alertas de chikungunya emitidos."
                value={diseaseData.alert.chikungunya}
              />
            </div>
          )}
        </div>
      </section>
      <section className="container mx-auto px-4 w-full border-t py-12 md:py-24 lg:py-32">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-[#12664f] text-2xl font-bold tracking-tighter md:text-3xl/tight lg:text-4xl/tight">
              Ultimas Notícias
            </h2>
            <p className="text-base md:text-lg">
              Mantenha-se atualizado com as últimas notícias sobre dengue, zika
              e chikungunya
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:px-24">
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
        </div>
      </section>
    </main>
  );
}
