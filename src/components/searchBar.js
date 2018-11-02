import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {searchValue:''}
    }
    handleSearchValueChange(e){
        this.setState({
            searchValue: e.target.value
        })
    }
    render() {
      return (
        <form className="form-inline my-2 my-lg-0 align-middle" action="/">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search" autoComplete="off"
                value={this.state.searchValue}
                onChange = {this.handleSearchValueChange.bind(this)}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      );
    }
  }
  
  export default SearchBar;