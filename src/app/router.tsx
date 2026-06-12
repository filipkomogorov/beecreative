import { Route, Routes } from "react-router-dom";

import SiteLayout from "../components/layout/SiteLayout";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProcessPage from "../pages/ProcessPage";
import ProjectsPage from "../pages/ProjectsPage";
import ServicesPage from "../pages/ServicesPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="uslugi" element={<ServicesPage />} />
        <Route path="protses" element={<ProcessPage />} />
        <Route path="proekti" element={<ProjectsPage />} />
        <Route path="kontakti" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
