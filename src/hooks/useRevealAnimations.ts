import {
  type RefObject,
  useLayoutEffect,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import useReducedMotion from "./useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const useRevealAnimations = (
  scopeRef: RefObject<HTMLElement | null>
): void => {
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const scope = scopeRef.current;

    if (!scope || prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      const revealElements =
        gsap.utils.toArray<HTMLElement>(
          "[data-reveal]",
          scope
        );

      revealElements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 34,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          }
        );
      });
    }, scope);

    return () => {
      context.revert();
    };
  }, [scopeRef, prefersReducedMotion]);
};

export default useRevealAnimations;