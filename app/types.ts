export type Disease = {
  name: string;
  image: string;
  symptoms: Symptom[];
};

export type Symptom = {
  name: string;
  description: string;
};

export type Topic = {
  name: string;
  image: string;
  measures: Measure[];
};

export type Measure = {
  name: string;
  description: string;
};

export type DiseaseData = {
  totalCases: {
    zika: number;
    chikungunya: number;
    dengue: number;
    total: number;
  };
  currentCases: {
    zika: number;
    chikungunya: number;
    dengue: number;
    total: number;
  };
  alert: {
    zika: number;
    chikungunya: number;
    dengue: number;
    total: number;
  };
  estimatedCasesPerWeek: {
    zika: number;
    chikungunya: number;
    dengue: number;
    total: number;
  };
};

export enum Color {
  Green = "green",
  Yellow = "yellow",
  Orange = "orange",
  Red = "red",
}

export type News = {
  author: string;
  title: string;
  url: string;
};

export enum DiseaseEnum {
  zika = "zika",
  dengue = "dengue",
  chikungunya = "chikungunya",
}
