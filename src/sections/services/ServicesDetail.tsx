import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import HexIcon from "../../components/shared/HexIcon";
import { detailedServices } from "../../data/services";
import { getRoute, Language } from "../../i18n/routes";

const ServicesDetail = () => {
  const { t, i18n } = useTranslation();

  const language: Language =
    i18n.resolvedLanguage === "en" ? "en" : "bg";

  const servicesRoute = getRoute("services", language);

  return (
    <section className="svc-detail">
      <div className="container">
        <nav className="svc-nav">
          {detailedServices.map((service) => {
            const baseKey = `servicesPage.items.${service.translationKey}`;

            return (
              <Link
                key={service.id}
                to={`${servicesRoute}#${service.id}`}
              >
                {t(`${baseKey}.navigationLabel`)}
              </Link>
            );
          })}
        </nav>

        <div className="svc-list">
          {detailedServices.map((service) => {
            const baseKey = `servicesPage.items.${service.translationKey}`;

            const includes = t(`${baseKey}.includes`, {
              returnObjects: true,
            }) as string[];

            const tags = t(`${baseKey}.tags`, {
              returnObjects: true,
            }) as string[];

            return (
              <article
                className="svc-block"
                id={service.id}
                data-reveal
                key={service.id}
              >
                <div className="svc-block-left">
                  <HexIcon
                    className="hex"
                    color={service.iconColor}
                  />

                  <h2>{t(`${baseKey}.title`)}</h2>

                  <p className="lede">
                    {t(`${baseKey}.description`)}
                  </p>
                </div>

                <div className="svc-block-right">
                  <span className="label">
                    {t("servicesPage.includesLabel")}
                  </span>

                  <ul className="includes">
                    {includes.map((item) => (
                      <li key={item}>
                        <HexIcon
                          className="hex"
                          color={service.iconColor}
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="tags">
                    {tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;