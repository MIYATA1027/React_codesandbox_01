import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HeaderName } from "./Providers/HeaderName";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HeaderName>
      <App />
    </HeaderName>
  </React.StrictMode>
);
