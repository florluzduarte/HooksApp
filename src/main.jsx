import React from "react";
import ReactDOM from "react-dom/client";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./components/CounterApp";
import { CounterAppWithCustomHooks } from "./components/CounterAppWithCustomHooks";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterAppWithCustomHooks />
  </React.StrictMode>
);
