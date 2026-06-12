import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";

import ProjectCard from "../../components/projects/ProjectCard";
import {
  type ProjectCategory,
  portfolioProjects,
} from "../../data/projects";
import useReducedMotion from "../../hooks/useReducedMotion";

type ProjectFilter = "all" | ProjectCategory;

interface FilterOption {
  value: ProjectFilter;
  label: string;
}

const filterOptions: FilterOption[] = [
  {
    value: "all",
    label: "Всички",
  },
  {
    value: "magazini",
    label: "Магазини",
  },
  {
    value: "saitove",
    label: "Сайтове",
  },
  {
    value: "prilozhenia",
    label: "Приложения",
  },
];

const ProjectsGrid = () => {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("all");

  const gridRef = useRef<HTMLDivElement>(null);
  const hasMountedRef = useRef(false);

  const prefersReducedMotion = useReducedMotion();

  const visibleProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) =>
            project.category === activeFilter
        );

  useLayoutEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    const grid = gridRef.current;

    if (!grid || prefersReducedMotion) {
      return;
    }

    gsap.fromTo(
      Array.from(grid.children),
      {
        opacity: 0,
        y: 18,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.06,
        ease: "power2.out",
        overwrite: true,
      }
    );
  }, [activeFilter, prefersReducedMotion]);

  return (
    <section
      className="section projects-list-section"
      id="spisak"
    >
      <div className="wrap">
        <div
          className="chips project-filters"
          role="group"
          aria-label="Филтър по тип проект"
          data-reveal
        >
          {filterOptions.map((option) => {
            const isActive =
              activeFilter === option.value;

            return (
              <button
                key={option.value}
                className={isActive ? "on" : ""}
                type="button"
                aria-pressed={isActive}
                onClick={() =>
                  setActiveFilter(option.value)
                }
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div
          ref={gridRef}
          className="cases"
          aria-live="polite"
        >
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;