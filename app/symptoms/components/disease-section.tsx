/* eslint-disable @next/next/no-img-element */
import { type Disease } from "../../types";
import SymptomItem from "./symptom-item";

type DiseaseSectionProps = Disease;

export default function DiseaseSection({
  name,
  image,
  symptoms,
}: DiseaseSectionProps) {
  const id = name.toLowerCase();
  const imageDescriptor = `Sintomas de ${name}`;

  return (
    <section id={id} className="w-full border-t py-12 md:py-24 lg:py-32">
      <div className="grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div>
          <img
            src={image}
            alt={imageDescriptor}
            className="mx-auto rounded-lg object-cover aspect-square"
            height={400}
            width={400}
          />
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {name}
            </h2>
          </div>
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
