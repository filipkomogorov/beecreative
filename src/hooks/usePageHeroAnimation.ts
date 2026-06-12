import {
  type RefObject,
  useLayoutEffect,
} from "react";
import { gsap } from "gsap";

import useReducedMotion from "./useReducedMotion";

const usePageHeroAnimation = (
  heroRef: RefObject<HTMLElement | null>
): void => {
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const hero = heroRef.current;

    if (!hero || prefersReducedMotion) {
      return;
    }

    const lines =
      hero.querySelectorAll<HTMLElement>(
        ".line > span"
      );

    const eyebrow =
      hero.querySelector<HTMLElement>(
        ".page-hero-eyebrow"
      );

    const footerItems =
      hero.querySelectorAll<HTMLElement>(
        ".page-hero-foot > *"
      );

    const navigation =
      document.querySelector<HTMLElement>(".nav");

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline.from(lines, {
        yPercent: 110,
        duration: 1.15,
        stagger: 0.12,
        delay: 0.15,
      });

      if (eyebrow) {
        timeline.from(
          eyebrow,
          {
            opacity: 0,
            y: 14,
            duration: 0.7,
          },
          "-=0.8"
        );
      }

      timeline.from(
        footerItems,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.1,
        },
        "-=0.6"
      );

      if (navigation) {
        timeline.from(
          navigation,
          {
            opacity: 0,
            y: -16,
            duration: 0.7,
            clearProps: "opacity,transform",
          },
          "-=0.9"
        );
      }
    }, hero);

    return () => {
      context.revert();
    };
  }, [heroRef, prefersReducedMotion]);
};

export default usePageHeroAnimation;