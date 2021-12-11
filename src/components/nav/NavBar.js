
import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
//import FaIcons from 'react-icons/fa'

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/User">Welcome User</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/task">Task</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/instructions">Instructions</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__item" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("Lady_User")
                    }
                    
                }>
                Logout
                </Link>
            </li>
        </ul>
    )
}
// link component will generate anchor tags
// to atrubute will assign the anchor tag (h ref atribute)