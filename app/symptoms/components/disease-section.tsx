/* eslint-disable @next/next/no-img-element */
import { type Disease } from "../../types";
import SymptomItem from "./symptom-item";

type DiseaseSectionProps = Disease;

export default function DiseaseSection({
  name,
  image,
  symptoms,
}: DiseaseSectionProps) {
  const imageDescriptor = `Sintomas de ${name}`;

  return (
    <section className="container mx-auto border-t py-12 md:py-24 lg:py-32">
      <div className="grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <img
          src={image}
          alt={imageDescriptor}
          className="mx-auto rounded-lg object-cover aspect-square"
          height={480}
          width={480}
        />
        <div className="space-y-4">
          <h2 className="text-[#12664f] text-2xl font-bold tracking-tighter md:text-3xl/tight lg:text-4xl/tight">
            {name}
          </h2>
          <div className="grid gap-4">
            {symptoms.map((symptom) => (
              <SymptomItem
                key={symptom.name.toLowerCase()}
                name={symptom.name}
                description={symptom.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
