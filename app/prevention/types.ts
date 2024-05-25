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
