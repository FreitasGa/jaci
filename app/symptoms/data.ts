import { Disease } from "./types";

export const diseases: Disease[] = [
  {
    name: "Dengue",
    description:
      "A dengue é uma doença viral transmitida pelo mosquito Aedes Aegypti.",
    image: "https://via.placeholder.com/400x400",
    symptoms: [
      {
        name: "Febre Alta",
        description:
          "Geralmente acima de 38,5°C, de início repentino e dura de 2 a 7 dias.",
      },
    ],
  },
  {
    name: "Zika",
    description:
      "O vírus Zika é transmitido principalmente pelo mosquito Aedes Aegypti.",
    image: "https://via.placeholder.com/400x400",
    symptoms: [
      {
        name: "Febre Baixa",
        description: "Geralmente abaixo de 38°C, que dura de 2 a 7 dias.",
      },
    ],
  },
  {
    name: "Chikungunya",
    description:
      "A chikungunya é uma doença viral transmitida pelo mosquito Aedes Aegypti.",
    image: "https://via.placeholder.com/400x400",
    symptoms: [
      {
        name: "Febre Alta",
        description:
          "Geralmente acima de 38,5°C, de início repentino e dura de 2 a 7 dias.",
      },
    ],
  },
];
