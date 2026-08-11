import React from "react";
import ReactDOM from "react-dom/client";
import './i18n'

import App from "./app/App";
import "./styles/global.css";
import "./styles/shared.css";
import "./styles/services.css";
import "./styles/process.css";
import "./styles/projects.css";
import "./styles/contact.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('The element with id="root" was not found.');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);