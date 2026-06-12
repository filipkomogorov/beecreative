import { useRef } from "react";

import CallToAction from "../components/shared/CallToAction";
import PageHero from "../components/shared/PageHero";
import PageMeta from "../components/shared/PageMeta";
import useRevealAnimations from "../hooks/useRevealAnimations";
import ProcessDetail from "../sections/process/ProcessDetail";
import ProcessPrinciples from "../sections/process/ProcessPrinciples";

const ProcessPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useRevealAnimations(pageRef);

  return (
    <>
      <PageMeta
        title="Процес — BeeCreative"
        description="Как работи BeeCreative: четири стъпки от първия разговор до работещ сайт — разузнаване, танц, градеж и жътва."
      />

      <div ref={pageRef}>
        <PageHero
          eyebrow="Процес"
          firstLine="От нектар"
          secondLine={
            <>
              до <em>мед.</em>
            </>
          }
          description="Четири стъпки от първия разговор до работещ сайт. Без магия — само занаят, повтарян достатъчно пъти, за да изглежда лесен."
          currentPage="Процес"
        />

        <ProcessDetail />
        <ProcessPrinciples />
        <CallToAction />
      </div>
    </>
  );
};

export default ProcessPage;