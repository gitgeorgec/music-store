import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Dropdown extends Component {
    hover(){

    }
    render() {
      return (
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav col-3">
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/search">Search</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/register">Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/login">signup</NavLink>
            </li>
            </ul>
        </div>
      )
    }
}

export default Dropdown;