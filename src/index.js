import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
// import { Test } from "./Components/Testing/Test";
// import { OALoaders } from "./Components/Loaders/OALoader/OALoader";
// import "react-app-polyfill/ie9";
// import "react-app-polyfill/ie11";
// import "react-app-polyfill/stable";
import { BrowserRouter } from "react-router-dom";

export default axios.create({
  baseURL: "https://oa-live-api.herokuapp.com/",
  // baseURL: "http://localhost:5000/",
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
