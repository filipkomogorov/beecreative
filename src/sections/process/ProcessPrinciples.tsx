import { useTranslation } from "react-i18next";

import HexIcon from "../../components/shared/HexIcon";
import SectionHeading from "../../components/shared/SectionHeading";
import { processPrinciples } from "../../data/process";

const ProcessPrinciples = () => {
  const { t } = useTranslation();

  return (
    <section
      className="section"
      aria-label={t("processPage.principles.ariaLabel") as string}
    >
      <div className="wrap">
        <SectionHeading
          eyebrow={t("processPage.principles.eyebrow")}
          title={
            <>
              {t("processPage.principles.title")}{" "}
              <em>{t("processPage.principles.titleColor")}</em>
            </>
          }
          description={t("processPage.principles.description")}
        />

        <div className="principles">
          {processPrinciples.map((principle) => {
            const baseKey = `processPage.principles.items.${principle.translationKey}`;

            return (
              <article className="principle" data-reveal key={principle.id}>
                <HexIcon className="hex" color={principle.iconColor} />

                <h3>{t(`${baseKey}.title`)}</h3>

                <p>{t(`${baseKey}.description`)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessPrinciples;
