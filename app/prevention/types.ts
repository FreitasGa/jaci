export type Symptom = {
  name: string;
  description: string;
};

export interface Measure {
  name: string;
  topic: {
    name: string;
    description: string;
  }[];
}
