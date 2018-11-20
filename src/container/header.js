import React, { Component } from 'react';
import Dropdown from '../components/dropdown.js'
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
      return (
        <header className="background_blue">
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand" to="/"><h2><i className="fas fa-headphones"></i> Music Store</h2></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Dropdown">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Dropdown {...this.props} />
            </nav>
        </header>
      );
    }
  }
  
  export default Header;