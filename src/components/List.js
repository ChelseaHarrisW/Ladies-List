// renders the HTML to the page 
import React from "react"
import { Route, Navigate } from "react-router-dom"
import Login from "./auth/Login"
import { Register } from "./auth/Register"
import { NavBar } from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import useAPIAuth from "./hooks/UseAPIAuth"
//import "bootstrap/dist/css/bootstrap.min.css"
import "./List.css"


export const List = () => {
    const { isAuthenticated } = useAPIAuth()

    return <>
        <Route render={() => {
            if (isAuthenticated()) {
                return <>
                    <NavBar />
                    <ApplicationViews />
                </>
            } else {
                return <Navigate to="/login" />
            }
        }} />
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
}
