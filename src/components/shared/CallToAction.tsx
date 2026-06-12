import MagneticLink from "../animation/MagneticLink";
import Eyebrow from "./Eyebrow";

interface CallToActionProps {
  id?: string;
}

const CallToAction = ({
  id = "contact",
}: CallToActionProps) => {
  return (
    <section
      className="section dark cta"
      id={id}
    >
      <div className="wrap">
        <Eyebrow data-reveal>
          Имаш проект наум?
        </Eyebrow>

        <h2 data-reveal>
          Да направим <em>мед.</em>
        </h2>

        <p className="sub" data-reveal>
          Разкажи ни какво градиш. Ще отговорим
          до един работен ден с първи идеи,
          ориентировъчен срок и нула празни
          приказки.
        </p>

        <MagneticLink
          className="btn btn-light btn-big"
          href="mailto:hello@beecreative.studio"
          data-reveal
        >
          hello@beecreative.studio

          <span
            className="arr"
            aria-hidden="true"
          >
            →
          </span>
        </MagneticLink>
      </div>
    </section>
  );
};

export default CallToAction;