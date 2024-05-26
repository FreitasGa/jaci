export type Topic = {
  name: string;
  description: string;
  image: string;
  measures: Measure[];
};

export type Measure = {
  name: string;
  description: string;
};

interface DiseaseData {
  zika: number;
  chikungunya: number;
  dengue: number;
  total: number;
}

export interface RequestDiseaseData{
  totalCases: DiseaseData;
  currentCases: DiseaseData;
  alert: DiseaseData;
  estimatedCasesPerWeek: DiseaseData;
}

export enum ColorEnum {
  Green = 'green',
  Yellow = 'yellow',
  Orange = 'orange',
  Red = 'red'
}
