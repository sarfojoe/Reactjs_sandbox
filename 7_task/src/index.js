import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import lecture from "./Lecture";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <lecture />
  </React.StrictMode>,

  document.getElementById("root")
);

serviceWorker.unregister();
