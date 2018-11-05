import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchValue:'',
            searchResults:{}
        }
    }
    handleSearchValueChange(e){
        this.setState({
            searchValue: e.target.value
        })
    }

    handleSearch(){
        if(this.props.onSubmit){
            const searchKey = this.state.searchValue
            const searchType = document.querySelector('select[name=searchType]').value
            this.props.onSubmit(searchKey,searchType)
        }
        this.setState({
            searchValue:""
        })
    }

    render() {
      return (
        <div className="input-group mb-3">
            <select name="searchType">
                <option value="album">album</option>
                <option value="artist">artist</option>
                <option value="playlist">playlist</option>
                <option value="track">track</option>
            </select>
            <input type="text" className="form-control" placeholder="search..." 
                value={this.state.searchValue}
                onChange = {this.handleSearchValueChange.bind(this)} />
            <div className="input-group-append">
                <span onClick={this.handleSearch.bind(this)} className="input-group-text btn btn-success">Search</span>
            </div>
      </div>
      );
    }
  }
  
  export default SearchBar;