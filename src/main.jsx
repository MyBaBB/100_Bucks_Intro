import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
