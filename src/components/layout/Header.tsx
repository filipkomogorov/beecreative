import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { getRoute, Language, getRouteKeyFromPath } from "../../i18n/routes";

import { useNavigate } from "react-router-dom";

import HexIcon from "../shared/HexIcon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  const language: Language = i18n.resolvedLanguage === "en" ? "en" : "bg";

  const switchLanguage = (newLanguage: Language) => {
    const routeKey = getRouteKeyFromPath(location.pathname);

    navigate(getRoute(routeKey, newLanguage));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navClassName = [
    "nav",
    isScrolled ? "scrolled" : "",
    isMenuOpen ? "menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const linksClassName = ["nav-links", isMenuOpen ? "open" : ""]
    .filter(Boolean)
    .join(" ");

  const toggleClassName = ["nav-toggle", isMenuOpen ? "open" : ""]
    .filter(Boolean)
    .join(" ");

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : undefined;

  console.log(language);

  return (
    <header className={navClassName}>
      <Link
      
      className="brand"
      to={getRoute("home", language)}
      aria-label="BeeCreative — начало">
        <HexIcon className="mark" color="var(--honey)" solid />

        <span>
          Bee<i>Creative</i>
        </span>
      </Link>

      <nav
        className={linksClassName}
        id="navLinks"
        aria-label="Основна навигация"
      >
        <NavLink
          to={getRoute("services", language)}
          className={getNavLinkClass}
        >
          {t("nav.services")}
        </NavLink>
        <NavLink to={getRoute("process", language)} className={getNavLinkClass}>
          {t("nav.process")}
        </NavLink>

        <NavLink
          to={getRoute("projects", language)}
          className={getNavLinkClass}
        >
          {t("nav.projects")}
        </NavLink>

        <NavLink to={getRoute("contact", language)} className="btn">
          {t("nav.startProject")}
          <span className="arr" aria-hidden="true">
            →
          </span>
        </NavLink>
        <button
          type="button"
          className="language-switcher"
          onClick={() => switchLanguage(language === "bg" ? "en" : "bg")}
        >
          {language === "bg" ? "EN" : "BG"}
        </button>
      </nav>

      <button
        className={toggleClassName}
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="navLinks"
        aria-label={
          isMenuOpen
            ? "Затвори основната навигация"
            : "Отвори основната навигация"
        }
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        {isMenuOpen ? "ЗАТВОРИ" : "МЕНЮ"}
      </button>
    </header>
  );
};

export default Header;
