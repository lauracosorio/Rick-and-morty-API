import React from "react";
import ReactDOM from "react-dom";

//import App from "./App";

import Character from "./components/Character"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Character />
  </React.StrictMode>,
  rootElement
);
