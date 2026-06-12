import {
  type ReactNode,
  useRef,
} from "react";
import { Link } from "react-router-dom";

import usePageHeroAnimation from "../../hooks/usePageHeroAnimation";
import SwarmCanvas from "../animation/SwarmCanvas";
import Eyebrow from "./Eyebrow";

interface PageHeroProps {
  eyebrow: string;
  firstLine: ReactNode;
  secondLine: ReactNode;
  description: string;
  currentPage: string;
  ariaLabel?: string;
}

const PageHero = ({
  eyebrow,
  firstLine,
  secondLine,
  description,
  currentPage,
  ariaLabel = currentPage,
}: PageHeroProps) => {
  const heroRef = useRef<HTMLElement>(null);

  usePageHeroAnimation(heroRef);

  return (
    <section
      ref={heroRef}
      className="page-hero hero-sub"
      id="top"
      aria-label={ariaLabel}
      data-swarm-root
    >
      <SwarmCanvas
        mobileCount={60}
        desktopCount={120}
      />

      <div className="page-hero-inner">
        <Eyebrow className="page-hero-eyebrow">
          {eyebrow}
        </Eyebrow>

        <h1>
          <span className="line">
            <span>{firstLine}</span>
          </span>

          <span className="line">
            <span>{secondLine}</span>
          </span>
        </h1>

        <div className="page-hero-foot">
          <p>{description}</p>

          <span className="crumb">
            <Link to="/">Начало</Link>
            {" / "}
            {currentPage}
          </span>
        </div>
      </div>
    </section>
  );
};

export default PageHero;