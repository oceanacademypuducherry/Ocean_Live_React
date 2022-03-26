import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import "react-app-polyfill/ie9";
// import "react-app-polyfill/ie11";
// import "react-app-polyfill/stable";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
