import React from "react";
import ReactDOM from "react-dom/client";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterAppWithCustomHooks } from "./01-useState/CounterAppWithCustomHooks";
import { SimpleForm } from "./02-useEffect/SimpleForm";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>
);
