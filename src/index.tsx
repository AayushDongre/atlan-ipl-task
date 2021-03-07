import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./Utils/serviceWorker";

import App from "./App";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
