import React, { Component } from 'react';
import Dropdown from '../components/dropdown.js'
import {NavLink} from 'react-router-dom';

class Header extends Component {
    handleClick(){
        if(this.props.add){
            this.props.add()
        }
    }
    render() {
      return (
        <header className="Head">
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand" to="/">Music Store</NavLink>
                {localStorage.username?<span onClick={this.handleClick.bind(this)}>Hello {localStorage.username}</span>:""}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Dropdown {...this.props} />
            </nav>
        </header>
      );
    }
  }
  
  export default Header;