import { Link } from "react-router-dom";

import PageMeta from "../components/shared/PageMeta";

const NotFoundPage = () => {
  return (
    <>
      <PageMeta
        title="Страницата не е намерена — BeeCreative"
        description="Тази страница не съществува или е преместена."
      />

      <section className="route-placeholder">
        <div className="wrap">
          <p className="placeholder-label">404</p>
          <h1>Тази клетка е празна.</h1>

          <Link className="btn placeholder-button" to="/">
            Към началото
            <span className="arr" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;