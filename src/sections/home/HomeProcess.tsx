import { useTranslation } from "react-i18next";

import SectionHeading from "../../components/shared/SectionHeading";
import { homeProcessSteps } from "../../data/processSteps";

const HomeProcess = () => {
  const { t } = useTranslation();

  return (
    <section
      className="section dark process"
      id="process"
    >
      <div
        className="hexfield"
        aria-hidden="true"
      />

      <div className="wrap">
        <SectionHeading
          eyebrow={t("home.process.eyebrow")}
          title={
            <>
              {t("home.process.title")}{" "}
              <em> {t("home.process.titleColor")}</em>
            </>
          }
          description={t("home.process.description")}
        />

        <ol className="steps">
          {homeProcessSteps.map((step) => {
            const baseKey =
              `home.process.steps.${step.translationKey}`;

            return (
              <li
                className="step"
                data-reveal
                key={step.id}
              >
                <span className="num">
                  {step.number} —{" "}
                  {t(`${baseKey}.label`)}
                </span>

                <h3>
                  {t(`${baseKey}.title`)}{" "}<br></br>
                  <span>
                    {t(`${baseKey}.subtitle`)}
                  </span>
                </h3>

                <p>
                  {t(`${baseKey}.description`)}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default HomeProcess;