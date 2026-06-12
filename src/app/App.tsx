import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./router";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;