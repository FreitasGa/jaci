import DiseaseSection from "@/app/symptoms/components/disease-section";
import { diseases } from "@/app/symptoms/data";

export default function Symptoms() {
  return (
    <main className="min-h-[100dvh]">
      <section className="container mx-auto px-4 w-full py-12 md:py-24 lg:py-32">
        <div className="space-y-8 text-center">
          <h1 className="text-3xl font-bold tracking-normal md:text-4xl/tight lg:text-5xl/tight">
            Sintomas
          </h1>
          <p className="text-base md:text-lg lg:text-xl/relaxed">
            Aqui, você encontrará informações detalhadas sobre os sinais e
            sintomas dessas três doenças transmitidas pelo mosquito Aedes
            aegypti.
          </p>
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
