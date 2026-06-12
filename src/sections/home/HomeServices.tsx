import HexIcon from "../../components/shared/HexIcon";
import SectionHeading from "../../components/shared/SectionHeading";
import { homeServices } from "../../data/services";

const HomeServices = () => {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHeading
          eyebrow="Какво правим"
          title={
            <>
              Създадено за скорост,{" "}
              <em>направено да трае</em>
            </>
          }
          description="Четири дисциплини, една мания: детайлите, които забелязваш само когато липсват."
        />

        <div className="services-grid">
          {homeServices.map((service) => (
            <article
              className="service"
              data-reveal
              key={service.title}
            >
              <HexIcon
                className="hex"
                color={service.iconColor}
              />

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <ul className="tags">
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;