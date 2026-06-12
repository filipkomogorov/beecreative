const HomeManifesto = () => {
  return (
    <section
      className="section manifesto"
      aria-label="Нашата философия"
    >
      <div className="wrap">
        <blockquote data-reveal>
          „Питата побира най-много{" "}
          <span className="h-word">мед</span> с
          най-малко восък. Ние строим по същия
          начин —{" "}
          <em>
            максимален резултат, минимален код.
          </em>
          “
        </blockquote>

        <p className="datapoints" data-reveal>
          <span>
            <b>98+</b>
            среден Lighthouse резултат
          </span>

          <span
            className="sep"
            aria-hidden="true"
          >
            ⬡
          </span>

          <span>
            <b>&lt;1 сек</b>
            първо зареждане, навсякъде
          </span>

          <span
            className="sep"
            aria-hidden="true"
          >
            ⬡
          </span>

          <span>
            <b>60fps</b>
            на всяка анимация, която пускаме
          </span>
        </p>
      </div>
    </section>
  );
};

export default HomeManifesto;