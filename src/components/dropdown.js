import React, { Component } from 'react';
import {NavLink, Link } from 'react-router-dom';


class Dropdown extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
        }
    }
    handleClick(){
        if(this.props.add){
            this.props.add()
        }
    }

    handleLogout(e){
        if(this.props.logout){
            this.props.logout()
        }
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
            {this.props.login? (
                        <li className="nav-item">
                            <Link exact className="nav-link" to="/" onClick={this.handleLogout.bind(this)}>Log Out</Link>
                        </li>
					):(
                        <React.Fragment>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/register">signup</NavLink>
                        </li>
                        </React.Fragment>
					)}
            </ul>
            <span onClick={this.handleClick.bind(this)}>click</span>
        </div>
      )
    }
}

export default Dropdown;