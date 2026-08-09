import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import i18n from "./index";

const LanguageSync = () => {
  const location = useLocation();

  useEffect(() => {
    const language =
      location.pathname === "/en" ||
      location.pathname.startsWith("/en/")
        ? "en"
        : "bg";

    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }

    document.documentElement.lang = language;
  }, [location.pathname]);

  return null;
};

export default LanguageSync;