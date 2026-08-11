import { useRef } from "react";
import { useTranslation } from "react-i18next";

import CallToAction from "../components/shared/CallToAction";
import PageHero from "../components/shared/PageHero";
import PageMeta from "../components/shared/PageMeta";
import useRevealAnimations from "../hooks/useRevealAnimations";
import ProcessDetail from "../sections/process/ProcessDetail";
import ProcessPrinciples from "../sections/process/ProcessPrinciples";

const ProcessPage = () => {
  const pageRef =
    useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  useRevealAnimations(pageRef);

  return (
    <>
      <PageMeta
        title={t("processPage.meta.title")}
        description={t(
          "processPage.meta.description"
        )}
      />

      <div ref={pageRef}>
        <PageHero
          eyebrow={t(
            "processPage.hero.eyebrow"
          )}
          firstLine={t(
            "processPage.hero.firstLine"
          )}
          secondLine={
            <>
              {t(
                "processPage.hero.secondLineBefore"
              )}{" "}
              <em>
                {t(
                  "processPage.hero.secondLineColor"
                )}
              </em>
            </>
          }
          description={t(
            "processPage.hero.description"
          )}
          currentPage={t(
            "processPage.hero.currentPage"
          )}
        />

        <ProcessDetail />

        <ProcessPrinciples />

        <CallToAction />
      </div>
    </>
  );
};

export default ProcessPage;