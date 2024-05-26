import TopicSection from "@/app/prevention/components/topic-section";
import { topics } from "@/app/prevention/data";

export default function Prevention() {
  return (
    <main className="min-h-[100dvh]">
      <section className="container mx-auto px-4 w-full py-12 md:py-24 lg:py-32">
        <div className="space-y-8 text-center">
          <h1 className="text-3xl font-bold tracking-normal md:text-4xl/tight lg:text-5xl/tight">
            Prevenção e Combate
          </h1>
          <p className="text-base md:text-lg lg:text-xl/relaxed">
            Aqui, você encontrará informações essenciais sobre como prevenir e
            combater essas três doenças transmitidas pelo mosquito Aedes
            aegypti.
          </p>
        </div>
      </section>
      {topics.map((topic) => (
        <TopicSection
          key={topic.name.toLowerCase()}
          name={topic.name}
          image={topic.image}
          measures={topic.measures}
        />
      ))}
    </main>
  );
}
