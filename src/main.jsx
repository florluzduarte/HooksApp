import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterAppWithCustomHooks } from "./01-useState/CounterAppWithCustomHooks";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { RickAndMortyCharacters } from "./03-examples/RickAndMortyCharacters";
// import { FocusForm } from "./04-useRef/FocusForm";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memos/memorize";
// import { MemoHook } from "./06-memos/MemoHook";
// import { CallbackHooks } from "./06-memos/CallbackHooks";
// import { Padre } from "./07-tarea-memo/07-tarea-memo/Padre";
// import "./08-useReducer/demo-reducer.js";
// import { TodoApp } from "./08-useReducer/TodoApp.jsx";
import { MainApp } from "./09-context/MainApp.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
