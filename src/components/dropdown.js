import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Dropdown extends Component {
    hover(){

    }
    render() {
      return (
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav col-3">
            <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </span>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink exact className="dropdown-item" to="/Action">Action</NavLink>
                <NavLink exact className="dropdown-item" to="/Another">Another action</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink exact className="dropdown-item" to="/Something">Something else here</NavLink>
                </div>
            </li>
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/landing">landing</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/about">About</NavLink>
            </li>
            </ul>
        </div>
      )
    }
}

export default Dropdown;