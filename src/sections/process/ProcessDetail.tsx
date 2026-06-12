import { Link } from "react-router-dom";

import HexIcon from "../../components/shared/HexIcon";
import { detailedProcessSteps } from "../../data/process";

const ProcessDetail = () => {
  return (
    <section
      className="section dark process process-detail-section"
      id="stapki"
    >
      <div className="hexfield" aria-hidden="true" />

      <div className="wrap">
        <nav
          className="chips chips-dark"
          aria-label="Бърза навигация по стъпки"
          data-reveal
        >
          {detailedProcessSteps.map((step) => (
            <Link
              key={step.id}
              to={`/protses#${step.id}`}
            >
              {step.number} {step.name}
            </Link>
          ))}
        </nav>

        <ol className="process-detail-list">
          {detailedProcessSteps.map((step) => (
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
                  {step.name}
                </span>

                <span className="duration">
                  {step.duration}
                </span>
              </div>

              <div className="step-detail-right">
                <h2>
                  {step.title}{" "}
                  <span>{step.subtitle}</span>
                </h2>

                <p className="lede">
                  {step.description}
                </p>

                <span className="label">
                  Какво правим
                </span>

                <ul className="includes">
                  {step.tasks.map((task) => (
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
                    <b>Резултат:</b>{" "}
                    {step.result}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessDetail;