import TopicSection from "./components/topic-section";
import { topics } from "./data";

export default function Prevention() {
  return (
    <main className="container flex flex-col min-h-[100dvh] mx-auto px-4 py-8 md:px-6 md:py-12">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">
            Prevenção e Combate
          </h1>
          <div className="space-y-2 text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <p>
              Aqui, você encontrará informações essenciais sobre como prevenir e
              combater essas três doenças transmitidas pelo mosquito Aedes
              aegypti. A prevenção é a chave para evitar surtos e proteger a
              saúde de todos.
            </p>
            <p>
              Dengue, zika e chikungunya podem ser evitadas com medidas simples
              e eficazes. Nesta página, compartilharemos estratégias comprovadas
              e orientações práticas para ajudar você a manter sua família e
              comunidade seguras.
            </p>
            <p>Continue lendo para saber mais sobre:</p>
            <ul className="list-disc list-inside">
              <li>
                <b>Medidas de Prevenção:</b> Aprenda a identificar e eliminar
                criadouros do mosquito, além de outras ações diárias que você
                pode adotar para reduzir o risco de transmissão.
              </li>
              <li>
                <b>Métodos de Combate:</b> Descubra as melhores práticas para
                combater o mosquito Aedes aegypti, incluindo o uso de
                repelentes, inseticidas e a importância da mobilização
                comunitária.
              </li>
              <li>
                <b>Educação e Conscientização:</b> Entenda como a educação e a
                conscientização são fundamentais para o controle dessas doenças
                e como você pode contribuir para a disseminação de informações
                corretas e úteis.
              </li>
            </ul>
            <p>
              Nosso objetivo é fornecer informações precisas e práticas para que
              você possa estar bem informado e capacitado a tomar as medidas
              necessárias para proteger sua saúde e a de sua comunidade. Juntos,
              podemos vencer a batalha contra dengue, zika e chikungunya.
            </p>
          </div>
        </div>
      </section>

      {topics.map((topic) => (
        <TopicSection
          key={topic.name.toLowerCase()}
          name={topic.name}
          description={topic.description}
          image={topic.image}
          measures={topic.measures}
        />
      ))}
    </main>
  );
}
