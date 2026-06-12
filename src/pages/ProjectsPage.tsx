import { useRef } from "react";

import CallToAction from "../components/shared/CallToAction";
import PageHero from "../components/shared/PageHero";
import PageMeta from "../components/shared/PageMeta";
import useRevealAnimations from "../hooks/useRevealAnimations";
import ProjectsGrid from "../sections/projects/ProjectsGrid";
import ProjectsTestimonial from "../sections/projects/ProjectsTestimonial";

const ProjectsPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useRevealAnimations(pageRef);

  return (
    <>
      <PageMeta
        title="Проекти — BeeCreative"
        description="Избрани проекти на BeeCreative — магазини, сайтове и уеб приложения, и какво се промени за клиентите след тях."
      />

      <div ref={pageRef}>
        <PageHero
          eyebrow="Проекти"
          firstLine="Прясна"
          secondLine={<em>реколта.</em>}
          description="Шест проекта от последните три години — с какво дойдоха клиентите и какво се промени след това."
          currentPage="Проекти"
        />

        <ProjectsGrid />
        <ProjectsTestimonial />
        <CallToAction />
      </div>
    </>
  );
};

export default ProjectsPage;