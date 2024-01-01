import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style.css";

ReactDOM.render(
  <BrowserRouter>
    <h1 className="page_header">React Concepts Practice</h1>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
