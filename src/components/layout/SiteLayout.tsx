import { Outlet } from "react-router-dom";

import LanguageSync from "../../i18n/LanguageSync";
import SvgSymbols from "../shared/SvgSymbols";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

const SiteLayout = () => {
  return (
    <>
      <LanguageSync />

      <a className="skip-link" href="#main">
        Към съдържанието
      </a>

      <SvgSymbols />
      <ScrollToTop />
      <Header />

      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>

    </>
  );
};

export default SiteLayout;
