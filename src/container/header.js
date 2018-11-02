import React, { Component } from 'react';
import Dropdown from '../components/dropdown.js'
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
      return (
        <header className="Head">
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand" to="/">Music Store</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Dropdown/>
            </nav>
        </header>
      );
    }
  }
  
  export default Header;