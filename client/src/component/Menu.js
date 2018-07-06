import React, { Component } from "react"
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { logout } from '../redux/auth';

class Menu extends Component {
    handleLogout = (event) => {
        event.preventDefault();
        this.props.logout();
    }
    render() {
        return(
            <ul className="menu">
                <li><Link to="/">Play</Link></li>
                {this.props.loggedIn
                    ? <li><a href="#logout" onClick={this.handleLogout}>Logout</a></li>
                    : (
                        <React.Fragment>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                        </React.Fragment>
                    )
                }
            </ul>
        )
    }
}
export default connect(state => ({loggedIn: state.auth.loggedIn}), { logout })(Menu);