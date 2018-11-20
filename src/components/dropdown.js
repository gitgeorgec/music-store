import React, { Component } from 'react';
import {NavLink, Link } from 'react-router-dom';



class Dropdown extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
        }
    }

    handleClick=()=>{
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
        <div className="collapse navbar-collapse justify-content-end" id="Dropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/"><i className="fas fa-home"></i> Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/search"><i className="fas fa-search"></i> Search</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/shoppingCart"><i className="fas fa-shopping-cart"></i><span className="badge badge-pill badge-info">{Object.keys(this.props.shoppingCart).length>0?Object.keys(this.props.shoppingCart).length:""}</span>shopping cart</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/user"><i className="fas fa-user"></i> User</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/about"><i className="fas fa-book"></i> About</NavLink>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/" onClick={this.handleLogout.bind(this)}><i className="fas fa-sign-out-alt"></i> Log Out</Link>
            </li>
                 
            </ul>

        </div>
      )
    }
}

export default Dropdown;