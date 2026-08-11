import { useTranslation } from "react-i18next";

import HexIcon from "../../components/shared/HexIcon";
import SectionHeading from "../../components/shared/SectionHeading";
import { homeServices } from "../../data/services";

const HomeServices = () => {
  const { t } = useTranslation();

  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHeading
          eyebrow={t("home.services")}
          title={
            <>
              {t("home.servicesTitle")}{" "}
              <em>{t("home.servicesTitleColor")}</em>
            </>
          }
          description={t("home.servicesSubtitle")}
        />

        <div className="services-grid">
          {homeServices.map((service) => {
            const tags = t(
              `home.serviceItems.${service.id}.tags`,
              {
                returnObjects: true,
              }
            ) as string[];

            return (
              <article
                className="service"
                data-reveal
                key={service.id}
              >
                <HexIcon
                  className="hex"
                  color={service.iconColor}
                />

                <h3>
                  {t(
                    `home.serviceItems.${service.id}.title`
                  )}
                </h3>

                <p>
                  {t(
                    `home.serviceItems.${service.id}.description`
                  )}
                </p>

                <ul className="tags">
                  {tags.map((tag) => (
                    <li key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;