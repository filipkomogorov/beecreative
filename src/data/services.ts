export interface ServicePreview {
  id: string;
  iconColor: string;
}

export const homeServices: ServicePreview[] = [
  {
    id: "websites",
    iconColor: "var(--honey)",
  },
  {
    id: "commerce",
    iconColor: "var(--uv)",
  },
  {
    id: "apps",
    iconColor: "var(--uv)",
  },
  {
    id: "animation",
    iconColor: "var(--honey)",
  },
];

export interface DetailedService {
  id: string;
  translationKey: string;
  iconColor: string;
}

export const detailedServices: DetailedService[] = [
  {
    id: "uebsaitove",
    translationKey: "websites",
    iconColor: "var(--honey)",
  },
  {
    id: "targovia",
    translationKey: "commerce",
    iconColor: "var(--uv)",
  },
  {
    id: "prilozhenia",
    translationKey: "apps",
    iconColor: "var(--honey)",
  },
  {
    id: "animacia",
    translationKey: "animation",
    iconColor: "var(--uv)",
  },
  {
    id: "marketing",
    translationKey: "marketing",
    iconColor: "var(--honey)",
  },
];