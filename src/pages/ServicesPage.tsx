import { useRef } from "react";

import CallToAction from "../components/shared/CallToAction";
import PageHero from "../components/shared/PageHero";
import PageMeta from "../components/shared/PageMeta";
import useRevealAnimations from "../hooks/useRevealAnimations";
import ServicesDetail from "../sections/services/ServicesDetail";

const ServicesPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useRevealAnimations(pageRef);

  return (
    <>
      <PageMeta
        title="Услуги — BeeCreative"
        description="Услугите на BeeCreative: уебсайтове, електронна търговия, уеб приложения, анимация и дигитален маркетинг — под един покрив."
      />

      <div ref={pageRef}>
        <PageHero
          eyebrow="Услуги"
          firstLine="Пет занаята,"
          secondLine={
            <>
              един <em>кошер.</em>
            </>
          }
          description="От първата скица до първия клиент — всичко, от което уеб присъствието ви има нужда, под един покрив."
          currentPage="Услуги"
        />

        <ServicesDetail />
        <CallToAction />
      </div>
    </>
  );
};

export default ServicesPage;