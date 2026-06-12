export interface ProcessStep {
  number: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
}

export const homeProcessSteps: ProcessStep[] = [
  {
    number: "01",
    label: "Разузнаване",
    title: "Откриваме",
    subtitle: "/ стратегия",
    description:
      "Картографираме аудиторията, целите и конкуренцията, преди да помръдне и пиксел. Добрите полета дават добър мед.",
  },
  {
    number: "02",
    label: "Танц",
    title: "Проектираме",
    subtitle: "/ прототип",
    description:
      "Посоката се показва, а не се разказва: мудборди, тестове за анимация и кликаеми прототипи.",
  },
  {
    number: "03",
    label: "Градеж",
    title: "Изграждаме",
    subtitle: "/ клетка по клетка",
    description:
      "Чист, ревюиран, достъпен код. Бюджети за производителност от първия комит, а не от последния.",
  },
  {
    number: "04",
    label: "Жътва",
    title: "Пускаме",
    subtitle: "/ растеж",
    description:
      "Стартираме, измерваме, подобряваме. Оставаме и след старта — кошерите имат нужда от пчелари, сайтовете също.",
  },
];