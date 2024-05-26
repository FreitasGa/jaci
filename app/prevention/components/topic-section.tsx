/* eslint-disable @next/next/no-img-element */
import { type Topic } from "../../types";
import MeasureItem from "./measure-item";

type TopicSectionProps = Topic;

export default function TopicSection({
  name,
  image,
  measures,
}: TopicSectionProps) {
  const id = name.toLowerCase();
  const imageDescriptor = `Medidas de ${name}`;

  return (
    <section id={id} className="w-full border-t py-12 md:py-24 lg:py-32">
      <div className="grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="order-last">
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
            {measures.map((measure) => (
              <MeasureItem
                key={measure.name.toLowerCase()}
                name={measure.name}
                description={measure.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
