import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./pages/Card";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);
