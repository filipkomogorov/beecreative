import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import HexIcon from "../shared/HexIcon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

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

  const linksClassName = [
    "nav-links",
    isMenuOpen ? "open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const toggleClassName = [
    "nav-toggle",
    isMenuOpen ? "open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const getNavLinkClass = ({
    isActive,
  }: {
    isActive: boolean;
  }) => (isActive ? "active" : undefined);

  return (
    <header className={navClassName}>
      <Link
        className="brand"
        to="/"
        aria-label="BeeCreative — начало"
      >
        <HexIcon
          className="mark"
          color="var(--honey)"
          solid
        />

        <span>
          Bee<i>Creative</i>
        </span>
      </Link>

      <nav
        className={linksClassName}
        id="navLinks"
        aria-label="Основна навигация"
      >
        <NavLink to="/uslugi" className={getNavLinkClass}>
          Услуги
        </NavLink>

        <NavLink to="/protses" className={getNavLinkClass}>
          Процес
        </NavLink>

        <NavLink to="/proekti" className={getNavLinkClass}>
          Проекти
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `btn${isActive ? " active" : ""}`
          }
          to="/kontakti"
        >
          Започни проект
          <span className="arr" aria-hidden="true">
            →
          </span>
        </NavLink>
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