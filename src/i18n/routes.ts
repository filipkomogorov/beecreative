export type Language = "bg" | "en";

export type RouteKey =
  | "home"
  | "services"
  | "process"
  | "projects"
  | "contact";

export const routes: Record<
  RouteKey,
  Record<Language, string>
> = {
  home: {
    bg: "/",
    en: "/en",
  },

  services: {
    bg: "/uslugi",
    en: "/en/services",
  },

  process: {
    bg: "/protses",
    en: "/en/process",
  },

  projects: {
    bg: "/proekti",
    en: "/en/projects",
  },

  contact: {
    bg: "/kontakti",
    en: "/en/contact",
  },
};

export const getRoute = (
  route: RouteKey,
  language: Language
) => routes[route][language];

export const getRouteKeyFromPath = (
  pathname: string
): RouteKey => {
  const found = (
    Object.entries(routes) as [
      RouteKey,
      Record<Language, string>
    ][]
  ).find(([, paths]) =>
    Object.values(paths).includes(pathname)
  );

  return found?.[0] ?? "home";
};