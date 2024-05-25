import { Disease, Measure } from "./types";

export const diseases: Disease[] = [
  {
    name: "Dengue",
    description:
      "A dengue é uma doença viral transmitida pelo mosquito Aedes Aegypti.",
    image:
      "https://www.saopaulo.sp.gov.br/wp-content/uploads/2024/03/Sintomadengue_750x500-4f077b8a685f5916.jpg",
    symptoms: [
      {
        name: "Febre Alta",
        description:
          "Geralmente acima de 38,5°C, de início repentino e dura de 2 a 7 dias.",
      },
      {
        name: "Artralgia (Dor nas Articulações)",
        description:
          "Dor nas articulações que pode durar semanas. Quase sempre presente e com dores moderadas.",
      },
      {
        name: "Rash Cutâneo (Manchas Vermelhas na Pele)",
        description:
          "Erupção cutânea com manchas vermelhas na pele de início súbito e que dura de 2 a 5 dias. Pode estar presente dentre os sintomas mas nem sempre ocorre.",
      },
      {
        name: "Coceira (Prurido Cutâneo)",
        description:
          "Coceira na pele que pode durar dias. Pode estar presente dentre os sintomas de maneira leve.",
      },
      {
        name: "Mialgia (Dor Muscular)",
        description:
          "Dor muscular que pode durar semanas. Quase sempre presente e com dores moderadas.",
      },
      {
        name: "Cefaleia (Dor de Cabeça)",
        description:
          "Dor de cabeça que pode durar dias. Quase sempre presente e com dores moderadas.",
      },
      //Gerado automaticamente (se quiser tirar so apagar)
      {
        name: "Dor Retroorbital (Dor Atrás dos Olhos)",
        description:
          "Dor atrás dos olhos que pode durar dias. Quase sempre presente e com dores moderadas.",
      },
      {
        name: "Anorexia (Perda de Apetite)",
        description:
          "Perda de apetite que pode durar dias. Quase sempre presente e com dores moderadas.",
      },
      {
        name: "Náusea (Enjoo)",
        description:
          "Enjoo que pode durar dias. Quase sempre presente e com dores moderadas.",
      },
      {
        name: "Vômito",
        description:
          "Vômito que pode durar dias. Quase sempre presente e com dores moderadas.",
      },
      {
        name: "Dor Abdominal",
        description:
          "Dor abdominal que pode durar dias. Quase sempre presente e com dores moderadas.",
      },
    ],
  },
  {
    name: "Zika",
    description:
      "O vírus Zika é transmitido principalmente pelo mosquito Aedes Aegypti.",
    image:
      "https://cdn.statically.io/img/leianoticias.com.br/wp-content/uploads/2024/02/pessoa-doente-768x475.jpg?quality=70&f=auto",
    symptoms: [
      {
        name: "Febre Baixa",
        description: "Geralmente abaixo de 38°C, que dura de 2 a 7 dias.",
      },
      {
        name: "Artralgia (Dor nas Articulações)",
        description:
          "Dor nas articulações, que pode estar presente e apresentar dores leves",
      },
      {
        name: "Rash Cutâneo (Manchas Vermelhas na Pele)",
        description:
          "Erupção cutânea com manchas vermelhas na pele de início súbito e que dura de 2 a 5 dias.",
      },
      {
        name: "Prurido (Coceira)",
        description:
          "Coceira na pele que pode durar dias. Pode estar presente e em grau leve ou intenso",
      },
      {
        name: "Vermelhidão nos olhos (Hiperemia Conjuntival)",
        description:
          "Vermelhidão nos olhos que pode durar dias. Nem sempre presente e com dores leves.",
      },
      //gerado automaticamente (se quiser tirar so apagar)
      {
        name: "Mialgia (Dor Muscular)",
        description: "Dor muscular que pode durar semanas.",
      },
      {
        name: "Cefaleia (Dor de Cabeça)",
        description: "Dor de cabeça que pode durar dias.",
      },
      {
        name: "Dor Retroorbital (Dor Atrás dos Olhos)",
        description: "Dor atrás dos olhos que pode durar dias.",
      },
      {
        name: "Anorexia (Perda de Apetite)",
        description: "Perda de apetite que pode durar dias.",
      },
      {
        name: "Náusea (Enjoo)",
        description: "Enjoo que pode durar dias.",
      },
      {
        name: "Vômito",
        description: "Vômito que pode durar dias.",
      },
      {
        name: "Dor Abdominal",
        description: "Dor abdominal que pode durar dias.",
      },
    ],
  },
  {
    name: "Chikungunya",
    description:
      "A chikungunya é uma doença viral transmitida pelo mosquito Aedes Aegypti.",
    image:
      "https://simplesmentefeminino.com.br/wp-content/uploads/2016/05/zika-virus-4.jpg",
    symptoms: [
      {
        name: "Febre Alta",
        description:
          "Geralmente acima de 38,5°C, de início repentino e dura de 2 a 7 dias.",
      },
      {
        name: "Artralgia (Dor nas Articulações)",
        description:
          "Dor intensa nas articulações, que é presente em 90% dos casos.",
      },
      {
        name: "Rash Cutâneo (Manchas Vermelhas na Pele)",
        description:
          "Erupção cutânea com manchas vermelhas na pele de início súbito e que dura de 2 a 5 dias. Se manifesta nas primeiras 48hr (a partir do secundo dia).",
      },
      {
        name: "Prurido (Coceira)",
        description:
          "Coceira na pele que pode durar dias. Pode estar presente e em grau leve e está presente em 50 a 80% dos casos.",
      },
      {
        name: "Vermelhidão nos olhos (Hiperemia Conjuntival)",
        description:
          "Vermelhidão nos olhos que pode durar dias. Nem sempre presente e com dores leves.",
      },
      //gerado automaticamente (se quiser tirar so apagar)
      {
        name: "Mialgia (Dor Muscular)",
        description: "Dor muscular que pode durar semanas.",
      },
      {
        name: "Cefaleia (Dor de Cabeça)",
        description: "Dor de cabeça que pode durar dias.",
      },
      {
        name: "Dor Retroorbital (Dor Atrás dos Olhos)",
        description: "Dor atrás dos olhos que pode durar dias.",
      },
      {
        name: "Anorexia (Perda de Apetite)",
        description: "Perda de apetite que pode durar dias.",
      },
      {
        name: "Náusea (Enjoo)",
        description: "Enjoo que pode durar dias.",
      },
      {
        name: "Vômito",
        description: "Vômito que pode durar dias.",
      },
      {
        name: "Dor Abdominal",
        description: "Dor abdominal que pode durar dias.",
      },
    ],
  },
];
export const measures: Measure[] = [
  {
    name: 'Educação e Conscientização',
    topic: [
      {
        name: 'Divulgação de Informações',
        description: 'Compartilhe informações corretas e atualizadas sobre os métodos de prevenção e combate ao mosquito com familiares, amigos e vizinhos.'
      },
      {
        name: 'Educação nas Escolas',
        description: 'Incentive programas educacionais nas escolas para ensinar as crianças sobre a importância da prevenção e do combate ao Aedes aegypti.'
      },
      {
        name: 'Campanhas de Sensibilização',
        description: 'Participe e ajude a organizar campanhas de sensibilização em sua comunidade, utilizando diferentes mídias para alcançar o maior número possível de pessoas.'
      },
      {
        name: 'Capacitação',
        description: 'Promova ou participe de treinamentos e workshops que ensinem técnicas de prevenção e combate, além de esclarecer dúvidas sobre as doenças transmitidas pelo mosquito.'
      }
    ]
  },
  {
    name: 'Métodos de Combate',
    topic: [
      {
        name: 'Uso de Repelentes',
        description: 'Utilizar repelentes de pele e ambientes, como velas de citronela e sprays.'
      },
      {
        name: 'Inseticidas',
        description: 'Aplicação de inseticidas específicos para larvas e mosquitos adultos. É importante seguir as instruções dos fabricantes e utilizar produtos aprovados pelas autoridades de saúde.'
      },
      {
        name: 'Mobilização Comunitária',
        description: 'Participe de campanhas comunitárias de limpeza e conscientização. A união de esforços da comunidade é essencial para reduzir os focos de proliferação do mosquito.'
      },
      {
        name: 'Monitoramento e Fiscalização',
        description: 'Apoie e colabore com os órgãos de saúde pública no monitoramento de focos e na fiscalização de áreas críticas.'
      }
    ]
  },
  {
    name: 'Medidas de Prevenção',
    topic: [
      {
        name: 'Inspeção Regular',
        description: 'Verifique semanalmente seu quintal, casa e arredores em busca de locais que possam acumular água parada, pois esses são os principais criadouros do mosquito Aedes aegypti.'
      },
      {
        name: 'Eliminação de Água Parada',
        description: 'Tampe caixas d\'água, tonéis e barris; mantenha garrafas sempre viradas com a boca para baixo; evite acumular água em pratos de vasos de plantas e troque a água de plantas aquáticas regularmente.'
      },
      {
        name: 'Descartar Objetos Inúteis',
        description: 'Remova objetos que possam acumular água, como pneus velhos, latas, plásticos, tampinhas e qualquer outro recipiente que não esteja em uso.'
      },
      {
        name: 'Manutenção de Calhas e Piscinas',
        description: 'Limpe regularmente calhas para evitar entupimentos que possam reter água e mantenha piscinas sempre tratadas com cloro.'
      },
      {
        name: 'Uso de Repelentes',
        description: 'Aplique repelentes nas áreas expostas da pele e sobre a roupa, conforme as instruções do fabricante.'
      },
      {
        name: 'Instalação de Telas',
        description: 'Instale telas em janelas e portas para evitar a entrada de mosquitos.'
      },
      {
        name: 'Roupas Adequadas',
        description: 'Use roupas que cubram a maior parte do corpo, especialmente ao amanhecer e ao entardecer, quando os mosquitos estão mais ativos.'
      },
      {
        name: 'Manter Ambientes Limpos',
        description: 'Mantenha quintais e áreas externas sempre limpas e bem cuidadas, evitando o acúmulo de lixo e entulhos.'
      }
    ]
  }
];