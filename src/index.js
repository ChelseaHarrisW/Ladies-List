import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { List } from "./components/List";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ImageSlide } from "./components/nav/ImageSlide";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <List />
      <ImageSlide />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
  
);

reportWebVitals();


