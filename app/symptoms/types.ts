export type Disease = {
  name: string;
  image: string;
  symptoms: Symptom[];
};

export type Symptom = {
  name: string;
  description: string;
};

