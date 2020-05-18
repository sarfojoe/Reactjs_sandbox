import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import Landingpage from "./Landingpage/Landingpage";
//import Simplerouting from "./Simplerouting";
//import Nestedrouting from "./Nestedrouting";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
