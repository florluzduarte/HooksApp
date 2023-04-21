import React from "react";
import ReactDOM from "react-dom/client";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterAppWithCustomHooks } from "./01-useState/CounterAppWithCustomHooks";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { RickAndMortyCharacters } from "./03-examples/RickAndMortyCharacters";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RickAndMortyCharacters />
  </React.StrictMode>
);
