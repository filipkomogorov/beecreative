import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import HexIcon from "../../components/shared/HexIcon";
import { detailedProcessSteps } from "../../data/process";
import {
  getRoute,
  Language,
} from "../../i18n/routes";

const ProcessDetail = () => {
  const { t, i18n } = useTranslation();

  const language: Language =
    i18n.resolvedLanguage === "en"
      ? "en"
      : "bg";

  const processRoute =
    getRoute("process", language);

  return (
    <section
      className="section dark process process-detail-section"
      id="stapki"
    >
      <div
        className="hexfield"
        aria-hidden="true"
      />

      <div className="wrap">
        <nav
          className="chips chips-dark"
          aria-label={t("processPage.quickNavAria") as string}
          data-reveal
        >
          {detailedProcessSteps.map((step) => {
            const baseKey =
              `processPage.steps.${step.translationKey}`;

            return (
              <Link
                key={step.id}
                to={`${processRoute}#${step.id}`}
              >
                {step.number}{" "}
                {t(`${baseKey}.name`)}
              </Link>
            );
          })}
        </nav>

        <ol className="process-detail-list">
          {detailedProcessSteps.map((step) => {
            const baseKey =
              `processPage.steps.${step.translationKey}`;

            const tasks = t(
              `${baseKey}.tasks`,
              {
                returnObjects: true,
              }
            ) as string[];

            return (
              <li
                className="step-detail"
                id={step.id}
                data-reveal
                key={step.id}
              >
                <div className="step-detail-left">
                  <div
                    className="bignum"
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>

                  <span className="pname">
                    {t(`${baseKey}.name`)}
                  </span>

                  <span className="duration">
                    {t(`${baseKey}.duration`)}
                  </span>
                </div>

                <div className="step-detail-right">
                  <h2>
                    {t(`${baseKey}.title`)}{" "}
                    <span>
                      {t(`${baseKey}.subtitle`)}
                    </span>
                  </h2>

                  <p className="lede">
                    {t(`${baseKey}.description`)}
                  </p>

                  <span className="label">
                    {t("processPage.tasksLabel")}
                  </span>

                  <ul className="includes">
                    {tasks.map((task) => (
                      <li key={task}>
                        <HexIcon
                          className="hex"
                          color="var(--honey)"
                        />

                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="result">
                    <HexIcon
                      className="hex"
                      color="var(--honey)"
                      solid
                    />

                    <p>
                      <b>
                        {t(
                          "processPage.resultLabel"
                        )}
                      </b>{" "}
                      {t(`${baseKey}.result`)}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ProcessDetail;