import { Disease } from "./types";

export const diseases: Disease[] = [
  {
    name: "Dengue",
    description:
      "A dengue é uma doença viral transmitida pelo mosquito Aedes Aegypti.",
    image: "https://www.saopaulo.sp.gov.br/wp-content/uploads/2024/03/Sintomadengue_750x500-4f077b8a685f5916.jpg",
    symptoms: [
      {
        name: "Febre Alta",
        description:
          "Geralmente acima de 38,5°C, de início repentino e dura de 2 a 7 dias.",
      },
      {
        name: "Artralgia (Dor nas Articulações)",
        description: "Dor nas articulações que pode durar semanas. Quase sempre presente e com dores moderadas."
      },
      {
        name: "Rash Cutâneo (Manchas Vermelhas na Pele)",
        description: "Erupção cutânea com manchas vermelhas na pele de início súbito e que dura de 2 a 5 dias. Pode estar presente dentre os sintomas mas nem sempre ocorre."
      },
      {
        name: "Coceira (Prurido Cutâneo)",
        description: "Coceira na pele que pode durar dias. Pode estar presente dentre os sintomas de maneira leve."
      },
      {
        name: "Mialgia (Dor Muscular)",
        description: "Dor muscular que pode durar semanas. Quase sempre presente e com dores moderadas."
      },
      {
        name: "Cefaleia (Dor de Cabeça)",
        description: "Dor de cabeça que pode durar dias. Quase sempre presente e com dores moderadas."
      },
      //Gerado automaticamente (se quiser tirar so apagar)
      {
        name: "Dor Retroorbital (Dor Atrás dos Olhos)",
        description: "Dor atrás dos olhos que pode durar dias. Quase sempre presente e com dores moderadas."
      },
      {
        name: "Anorexia (Perda de Apetite)",
        description: "Perda de apetite que pode durar dias. Quase sempre presente e com dores moderadas."
      },
      {
        name: "Náusea (Enjoo)",
        description: "Enjoo que pode durar dias. Quase sempre presente e com dores moderadas."
      },
      {
        name: "Vômito",
        description: "Vômito que pode durar dias. Quase sempre presente e com dores moderadas."
      },
      {
        name: "Dor Abdominal",
        description: "Dor abdominal que pode durar dias. Quase sempre presente e com dores moderadas."
      },
    ],
  },
  {
    name: "Zika",
    description:
      "O vírus Zika é transmitido principalmente pelo mosquito Aedes Aegypti.",
    image: "https://cdn.statically.io/img/leianoticias.com.br/wp-content/uploads/2024/02/pessoa-doente-768x475.jpg?quality=70&f=auto",
    symptoms: [
      {
        name: "Febre Baixa",
        description: "Geralmente abaixo de 38°C, que dura de 2 a 7 dias.",
      },
      {
        name: "Artralgia (Dor nas Articulações)",
        description: "Dor nas articulações, que pode estar presente e apresentar dores leves",
      },
      {
        name: "Rash Cutâneo (Manchas Vermelhas na Pele)",
        description:
          "Erupção cutânea com manchas vermelhas na pele de início súbito e que dura de 2 a 5 dias.",
      },
      {
        name: "Prurido (Coceira)",
        description: "Coceira na pele que pode durar dias. Pode estar presente e em grau leve ou intenso",
      },
      {
        name: "Vermelhidão nos olhos (Hiperemia Conjuntival)",
        description: "Vermelhidão nos olhos que pode durar dias. Nem sempre presente e com dores leves.",
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
    image: "https://simplesmentefeminino.com.br/wp-content/uploads/2016/05/zika-virus-4.jpg",
    symptoms: [
      {
        name: "Febre Alta",
        description:
          "Geralmente acima de 38,5°C, de início repentino e dura de 2 a 7 dias.",
      },
      {
        name: "Artralgia (Dor nas Articulações)",
        description: "Dor intensa nas articulações, que é presente em 90% dos casos.",
      },
      {
        name: "Rash Cutâneo (Manchas Vermelhas na Pele)",
        description:
          "Erupção cutânea com manchas vermelhas na pele de início súbito e que dura de 2 a 5 dias. Se manifesta nas primeiras 48hr (a partir do secundo dia).",
      },
      {
        name: "Prurido (Coceira)",
        description: "Coceira na pele que pode durar dias. Pode estar presente e em grau leve e está presente em 50 a 80% dos casos.",
      },
      {
        name: "Vermelhidão nos olhos (Hiperemia Conjuntival)",
        description: "Vermelhidão nos olhos que pode durar dias. Nem sempre presente e com dores leves.",
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
