export interface ProcessStep {
  id: string;
  number: string;
  translationKey: string;
}

export const homeProcessSteps: ProcessStep[] = [
  {
    id: "razuznavane",
    number: "01",
    translationKey: "discovery",
  },
  {
    id: "tants",
    number: "02",
    translationKey: "dance",
  },
  {
    id: "gradezh",
    number: "03",
    translationKey: "build",
  },
  {
    id: "zhatva",
    number: "04",
    translationKey: "harvest",
  },
];