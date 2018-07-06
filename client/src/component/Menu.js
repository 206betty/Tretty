import React from "react"
import { Link } from "react-router-dom"

const Menu = (props) => {
    return(
        <ul className="menu">
            <li><Link to="/">Play</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
        </ul>
    )
}
export default Menu;