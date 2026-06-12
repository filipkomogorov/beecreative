import HexIcon from "../../components/shared/HexIcon";
import SectionHeading from "../../components/shared/SectionHeading";
import { processPrinciples } from "../../data/process";

const ProcessPrinciples = () => {
  return (
    <section
      className="section"
      aria-label="Как работим с вас"
    >
      <div className="wrap">
        <SectionHeading
          eyebrow="Правила на кошера"
          title={
            <>
              Три правила,{" "}
              <em>нула изненади</em>
            </>
          }
          description="Процесът е половината работа. Другата половина е как се чувствате по време на него."
        />

        <div className="principles">
          {processPrinciples.map((principle) => (
            <article
              className="principle"
              data-reveal
              key={principle.title}
            >
              <HexIcon
                className="hex"
                color={principle.iconColor}
              />

              <h3>{principle.title}</h3>

              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessPrinciples;