import SectionHeading from "../../components/shared/SectionHeading";
import { homeProcessSteps } from "../../data/processSteps";

const HomeProcess = () => {
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
          eyebrow="Вътре в кошера"
          title={
            <>
              От нектар <em>до мед</em>
            </>
          }
          description="Пчелата казва на кошера къде са цветята, като танцува. Ние правим почти същото — с прототипи."
        />

        <ol className="steps">
          {homeProcessSteps.map((step) => (
            <li
              className="step"
              data-reveal
              key={step.number}
            >
              <span className="num">
                {step.number} — {step.label}
              </span>

              <h3>
                {step.title}{" "}
                <span>{step.subtitle}</span>
              </h3>

              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HomeProcess;