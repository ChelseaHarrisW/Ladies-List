import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { List } from "./components/List";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UsersList } from "./components/Users/userHome";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <List />
  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
  
);

reportWebVitals();


