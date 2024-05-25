/* eslint-disable @next/next/no-img-element */
import { diseases } from "./data";
import DiseaseSection from "./components/disease-section";

export default function Symptoms() {
  return (
    <main className="container flex flex-col min-h-[100dvh] mx-auto px-4 py-8 md:px-6 md:py-12">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">
            Sintomas
          </h1>
          <div className="space-y-2">
            <p className="text-gray-500 md:text-2xl/relaxed lg:text-lg/relaxed xl:text-2xl/relaxed">
              Aqui, você encontrará informações detalhadas sobre os sinais e
              sintomas dessas três doenças transmitidas pelo mosquito Aedes
              aegypti. Conhecer os sintomas é essencial para o reconhecimento
              precoce e o tratamento adequado.
            </p>
            <p className="text-gray-500 md:text-2xl/relaxed lg:text-lg/relaxed xl:text-2xl/relaxed">
              Dengue, zika e chikungunya compartilham algumas características
              comuns, mas também apresentam sintomas específicos que as
              diferenciam. Nesta página, exploraremos cada uma dessas condições
              de maneira clara e objetiva, ajudando você a identificar os sinais
              de cada doença.
            </p>
          </div>
        </div>
      </section>

      {diseases.map((disease) => (
        <DiseaseSection
          key={disease.name.toLowerCase()}
          name={disease.name}
          description={disease.description}
          image={disease.image}
          symptoms={disease.symptoms}
        />
      ))}
    </main>
  );
}
