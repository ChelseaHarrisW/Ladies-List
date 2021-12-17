// ^^the functions above are importing statements that are later called below to render the coresponding import location that
// below are followed from the listed items.
// the functions below are being called in a function called Repairs which is returning the functions ability to render the HTML to the DOM setCustomers
// see corresponding function at loocation.

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./Route/ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./List.css";
import { UsersList } from "./Users/userHome";

export const List = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("Lady_User")) {
          return (
            <>
              <h1> Ladies List- Ladies Edition</h1>
              <NavBar />
              <ApplicationViews />
              
            </>
          
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
