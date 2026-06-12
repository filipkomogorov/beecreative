import {
  type AnchorHTMLAttributes,
  type ReactNode,
  useLayoutEffect,
  useRef,
} from "react";
import { gsap } from "gsap";

import useReducedMotion from "../../hooks/useReducedMotion";

interface MagneticLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

const MagneticLink = ({
  children,
  className = "",
  ...anchorProps
}: MagneticLinkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const link = linkRef.current;

    if (
      !link ||
      prefersReducedMotion ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const moveX = gsap.quickTo(link, "x", {
      duration: 0.4,
      ease: "power3",
    });

    const moveY = gsap.quickTo(link, "y", {
      duration: 0.4,
      ease: "power3",
    });

    const handlePointerMove = (
      event: PointerEvent
    ): void => {
      const bounds = link.getBoundingClientRect();

      const centerX =
        bounds.left + bounds.width / 2;

      const centerY =
        bounds.top + bounds.height / 2;

      moveX((event.clientX - centerX) * 0.28);
      moveY((event.clientY - centerY) * 0.35);
    };

    const handlePointerLeave = (): void => {
      moveX(0);
      moveY(0);
    };

    link.addEventListener(
      "pointermove",
      handlePointerMove
    );

    link.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    return () => {
      link.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      link.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      gsap.killTweensOf(link);
    };
  }, [prefersReducedMotion]);

  return (
    <a
      ref={linkRef}
      className={className}
      {...anchorProps}
    >
      {children}
    </a>
  );
};

export default MagneticLink;