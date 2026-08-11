export interface DetailedProcessStep {
  id: string;
  number: string;
  translationKey: string;
}

export interface ProcessPrinciple {
  id: string;
  translationKey: string;
  iconColor: string;
}

export const detailedProcessSteps: DetailedProcessStep[] = [
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

export const processPrinciples: ProcessPrinciple[] = [
  {
    id: "visibility",
    translationKey: "visibility",
    iconColor: "var(--honey)",
  },
  {
    id: "singleContact",
    translationKey: "singleContact",
    iconColor: "var(--uv)",
  },
  {
    id: "noSurprises",
    translationKey: "noSurprises",
    iconColor: "var(--honey)",
  },
];