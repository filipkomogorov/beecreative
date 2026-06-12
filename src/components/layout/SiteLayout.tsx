import { Outlet } from "react-router-dom";

import SvgSymbols from "../shared/SvgSymbols";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

const SiteLayout = () => {
  return (
    <>
      <a className="skip-link" href="#main">
        Към съдържанието
      </a>

      <SvgSymbols />
      <ScrollToTop />
      <Header />

      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default SiteLayout;