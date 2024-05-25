/* eslint-disable @next/next/no-img-element */
import { diseases } from "./data";
import DiseaseSection from "./components/disease-section";

export default function Symptoms() {
  return (
    <main className="container flex flex-col min-h-[100dvh] mx-auto px-4 py-8 md:px-6 md:py-12">
      <h1>Sintomas</h1>

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
