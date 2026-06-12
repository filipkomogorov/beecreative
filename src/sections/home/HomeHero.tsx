import { useRef } from "react";

import SwarmCanvas from "../../components/animation/SwarmCanvas";
import Eyebrow from "../../components/shared/Eyebrow";
import useHomeHeroAnimation from "../../hooks/useHomeHeroAnimation";

const HomeHero = () => {
  const heroRef = useRef<HTMLElement>(null);

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
          Студио за уеб разработка · от 2019
        </Eyebrow>

        <h1>
          <span className="line">
            <span>Караме уеба</span>
          </span>

          <span className="line">
            <span>
              да <em>жужи.</em>
            </span>
          </span>
        </h1>

        <div className="home-hero-foot">
          <p>
            BeeCreative създава бързи, прецизни и
            безкомпромисно изпипани уебсайтове за
            брандове, които отказват да се сливат с
            тълпата.
          </p>

          <span className="scroll-hint">
            <span
              className="scroll-hint-dot"
              aria-hidden="true"
            />

            Скролни надолу
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;