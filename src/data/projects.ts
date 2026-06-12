export interface HomeProject {
  year: string;
  title: string;
  meta: string;
  slug: string;
}

export const homeProjects: HomeProject[] = [
  {
    year: "2026",
    title: "Apiary & Co.",
    meta: "D2C онлайн магазин · Shopify",
    slug: "apiary",
  },
  {
    year: "2025",
    title: "Meridian Bank",
    meta: "Маркетинг платформа · Next.js",
    slug: "meridian",
  },
  {
    year: "2025",
    title: "Fieldnote",
    meta: "SaaS табло · React",
    slug: "fieldnote",
  },
  {
    year: "2024",
    title: "Studio Norr",
    meta: "Портфолио · WebGL",
    slug: "norr",
  },
];

export type ProjectCategory =
  | "magazini"
  | "saitove"
  | "prilozhenia";

export type ProjectCover =
  | "apiary"
  | "meridian"
  | "fieldnote"
  | "dolina"
  | "norr"
  | "atlas";

export interface PortfolioProject {
  id: string;
  category: ProjectCategory;
  cover: ProjectCover;
  title: string;
  year: string;
  summary: string;
  metric: string;
  tags: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "apiary",
    category: "magazini",
    cover: "apiary",
    title: "Apiary & Co.",
    year: "2026",
    summary:
      "Марка за крафт мед с продажби, разпилени по базари. Изградихме D2C магазин с абонаменти и история за всеки кошер.",
    metric: "+38% конверсия след новата количка",
    tags: ["Shopify", "D2C", "Абонаменти"],
  },
  {
    id: "meridian",
    category: "saitove",
    cover: "meridian",
    title: "Meridian Bank",
    year: "2025",
    summary:
      "Банка с десетгодишен сайт и нула доверие у младите клиенти. Нова платформа: 140 страници, 3 езика, 0.8s зареждане.",
    metric: "2× повече заявки за карти онлайн",
    tags: [
      "Next.js",
      "Многоезичност",
      "Дизайн система",
    ],
  },
  {
    id: "fieldnote",
    category: "prilozhenia",
    cover: "fieldnote",
    title: "Fieldnote",
    year: "2025",
    summary:
      "SaaS за агрономи, удавен в таблици. Препроектирахме таблото около един въпрос: „какво да направя днес?“.",
    metric: "−41% време до първото действие",
    tags: ["React", "SaaS", "UX редизайн"],
  },
  {
    id: "dolina",
    category: "magazini",
    cover: "dolina",
    title: "Долина",
    year: "2024",
    summary:
      "Семейна дестилерия за розово масло от Казанлък. Магазин, който ухае на долината — и доставя в 14 държави.",
    metric: "62% от продажбите вече са онлайн",
    tags: ["Headless", "Stripe", "Локализация"],
  },
  {
    id: "norr",
    category: "saitove",
    cover: "norr",
    title: "Studio Norr",
    year: "2024",
    summary:
      "Скандинавско архитектурно студио. Портфолио с WebGL разходки из проектите — награждавано и често „заемано“ за вдъхновение.",
    metric: "4 мин средно време на сайта",
    tags: ["WebGL", "GSAP", "Портфолио"],
  },
  {
    id: "atlas",
    category: "prilozhenia",
    cover: "atlas",
    title: "Атлас Тур",
    year: "2023",
    summary:
      "Туроператор с резервации по телефона. Платформа за търсене, резервация и плащане — без нито едно обаждане.",
    metric: "70% от резервациите минават онлайн",
    tags: ["Платформа", "Плащания", "Търсене"],
  },
];