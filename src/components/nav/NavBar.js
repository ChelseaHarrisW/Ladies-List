import React, { useState } from "react"
import { Link, Navigate } from "react-router-dom"

import UseAPIAuth from "../hooks/UseAPIAuth";


//import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"



export const NavBar = () => {
    const [ searchTerms, setTerms ] = useState("")
    const { isAuthenticated, logout, getCurrentUser } = UseAPIAuth()
    const history = Navigate()

    const search = (e) => {
        if (e.keyCode === 13) {
            const terms = document.querySelector("#searchTerms").value
            const foundItems = {
                instructions: [],
                task: [],
                users: []
            }

            fetch(`${Settings.remoteURL}/users?employee=true&name_like=${encodeURI(terms)}`)
                .then(r => r.json())
                .then(users => {
                    foundItems.users = users
                    return LocationRepository.search(terms)
                })
                .then(task => {
                    foundItems.task = task
                    return AnimalRepository.searchByName(encodeURI(terms))
                })
                .then(instructions => {
                    foundItems.instructions = instructions
                    setTerms("")
                    history.push({
                        pathname: "/search",
                        state: foundItems
                    })
                })
        }
        else {
            setTerms(e.target.value)
        }
    }

    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top onTop">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNavDropdown" className="navbar-collapse collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">NSS Kennels <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/instructions">Instructions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/task">Task</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users">Users</Link>
                        </li>
                        <li className="nav-item">
                            <input id="searchTerms"
                                onKeyUp={search}
                                className="form-control w-100"
                                type="search"
                                placeholder="Search"
                                aria-label="Search" />
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            {
                                isAuthenticated()
                                    ? <Link onClick={() => {
                                        logout()
                                    }} className="nav-link" to="/login">Logout {getCurrentUser().name}</Link>
                                    : <Link className="nav-link" to="/login">Login</Link>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                !isAuthenticated()
                                    ? <Link className="nav-link" to="/register">Register</Link>
                                    : ""
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
