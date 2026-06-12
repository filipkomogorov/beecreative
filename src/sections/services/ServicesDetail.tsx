import { Link } from "react-router-dom";

import HexIcon from "../../components/shared/HexIcon";
import { detailedServices } from "../../data/services";

const ServicesDetail = () => {
  return (
    <section
      className="section services-detail-section"
      id="spisak"
    >
      <div className="wrap">
        <nav
          className="chips"
          aria-label="Бърза навигация по услуги"
          data-reveal
        >
          {detailedServices.map((service) => (
            <Link
              key={service.id}
              to={`/uslugi#${service.id}`}
            >
              {service.navigationLabel}
            </Link>
          ))}
        </nav>

        <div className="svc-list">
          {detailedServices.map((service) => (
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

                <h2>{service.title}</h2>

                <p className="lede">
                  {service.description}
                </p>
              </div>

              <div className="svc-block-right">
                <span className="label">
                  Какво включва
                </span>

                <ul className="includes">
                  {service.includes.map((item) => (
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
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;