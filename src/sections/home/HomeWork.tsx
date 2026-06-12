import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import ProjectPreview from "../../components/projects/ProjectPreview";
import SectionHeading from "../../components/shared/SectionHeading";
import { homeProjects } from "../../data/projects";
import useReducedMotion from "../../hooks/useReducedMotion";

const HomeWork = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  const canPreviewRef = useRef(false);

  const [activeIndex, setActiveIndex] =
    useState<number | null>(null);

  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const preview = previewRef.current;

    if (
      !preview ||
      prefersReducedMotion ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    canPreviewRef.current = true;

    gsap.set(preview, {
      xPercent: -50,
      yPercent: -50,
      rotation: -3,
      scale: 0.85,
      opacity: 0,
    });

    return () => {
      canPreviewRef.current = false;
      gsap.killTweensOf(preview);
    };
  }, [prefersReducedMotion]);

  const showPreview = (index: number): void => {
    const preview = previewRef.current;

    if (!preview || !canPreviewRef.current) {
      return;
    }

    setActiveIndex(index);

    gsap.to(preview, {
      opacity: 1,
      scale: 1,
      duration: 0.25,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const hidePreview = (): void => {
    const preview = previewRef.current;

    if (!preview || !canPreviewRef.current) {
      return;
    }

    gsap.to(preview, {
      opacity: 0,
      scale: 0.85,
      duration: 0.25,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const movePreview = (
    event: React.PointerEvent<HTMLAnchorElement>
  ): void => {
    const preview = previewRef.current;

    if (!preview || !canPreviewRef.current) {
      return;
    }

    gsap.to(preview, {
      x: event.clientX,
      y: event.clientY - 120,
      duration: 0.35,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <section className="section work-section" id="work">
      <div className="wrap">
        <SectionHeading
          eyebrow="Избрани проекти"
          title={
            <>
              Прясна <em>реколта</em>
            </>
          }
          description="Четири скорошни проекта, направо от питата."
        />

        <ul className="work-list">
          {homeProjects.map((project, index) => (
            <li key={project.slug}>
              <Link
                className="work-row"
                to={`/proekti#${project.slug}`}
                data-reveal
                onPointerEnter={() =>
                  showPreview(index)
                }
                onPointerLeave={hidePreview}
                onPointerMove={movePreview}
              >
                <span className="year">
                  {project.year}
                </span>

                <h3>{project.title}</h3>

                <span className="meta">
                  {project.meta}
                </span>

                <span
                  className="go"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={previewRef}
        className="peek"
        aria-hidden="true"
      >
        <ProjectPreview
          activeIndex={activeIndex}
        />
      </div>
    </section>
  );
};

export default HomeWork;