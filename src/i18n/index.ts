import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import bg from "./locales/bg/translations.json";
import en from "./locales/en/translations.json";

const getInitialLanguage = (): "bg" | "en" => {
  return window.location.pathname === "/en" ||
    window.location.pathname.startsWith("/en/")
    ? "en"
    : "bg";
};

i18n.use(initReactI18next).init({
  resources: {
    bg: {
      translation: bg,
    },
    en: {
      translation: en,
    },
  },

  lng: getInitialLanguage(),
  fallbackLng: "bg",

  supportedLngs: ["bg", "en"],

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;