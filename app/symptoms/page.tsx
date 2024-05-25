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
          <div className="space-y-2 text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <p>
              Aqui, você encontrará informações detalhadas sobre os sinais e
              sintomas dessas três doenças transmitidas pelo mosquito Aedes
              aegypti. Conhecer os sintomas é essencial para o reconhecimento
              precoce e o tratamento adequado.
            </p>
            <p>
              Dengue, zika e chikungunya compartilham algumas características
              comuns, mas também apresentam sintomas específicos que as
              diferenciam. Nesta página, exploraremos cada uma dessas condições
              de maneira clara e objetiva, ajudando você a identificar os sinais
              de cada doença.
            </p>
            <p>Continue lendo para saber mais sobre os sintomas de:</p>
            <ul className="list-disc list-inside">
              <li>
                <b>Dengue:</b> Conheça os sintomas clássicos e os sinais de
                alerta que podem indicar complicações.
              </li>
              <li>
                <b>Zika:</b> Descubra os principais sintomas, incluindo aqueles
                que são mais leves e frequentemente confundidos com outras
                condições.
              </li>
              <li>
                <b>Chikungunya:</b> Entenda os sinais típicos e como eles se
                manifestam de maneira diferente em relação às outras duas
                doenças.
              </li>
            </ul>
            <p>
              Nosso objetivo é fornecer informações precisas e úteis para que
              você possa estar bem informado e preparado para tomar as medidas
              necessárias caso surjam sintomas.
            </p>
          </div>
        </div>
      </section>

      {diseases.map((disease) => (
        <DiseaseSection
          key={disease.name.toLowerCase()}
          name={disease.name}
          image={disease.image}
          symptoms={disease.symptoms}
        />
      ))}
    </main>
  );
}
