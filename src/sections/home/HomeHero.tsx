import { useRef } from "react";

import SwarmCanvas from "../../components/animation/SwarmCanvas";
import Eyebrow from "../../components/shared/Eyebrow";
import useHomeHeroAnimation from "../../hooks/useHomeHeroAnimation";

import { useTranslation } from "react-i18next";

const HomeHero = () => {
  const heroRef = useRef<HTMLElement>(null);
   const { t } = useTranslation();

  useHomeHeroAnimation(heroRef);

  return (
    <section
      ref={heroRef}
      className="home-hero"
      id="top"
      aria-label="Начало"
      data-swarm-root
    >
      <SwarmCanvas />

      <div className="home-hero-inner">
        <Eyebrow className="home-hero-eyebrow">
          {t("home.topTitle")}
          {/* Студио за уеб разработка · от 2019 */}
        </Eyebrow>

        <h1>
          <span className="line">
            <span>{t("home.hero")}</span>
          </span>

          <span className="line">
            <span>
              {t('home.heroSecondRow')} <em>{t('home.heroColor')}</em>
            </span>
          </span>
        </h1>

        <div className="home-hero-foot">
          <p>
            {t('home.subtitle')}
          </p>

          <span className="scroll-hint">
            <span className="scroll-hint-dot" aria-hidden="true" />
            {t("home.scroll")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
