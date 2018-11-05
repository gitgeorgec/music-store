import React, { Component } from 'react';
import SideNav from '../components/sideNav'
import SearchBar from '../components/searchBar'
import MusicCard from '../components/musicCard'
import HeadphoneImg from '../img/malte-wingen-381988-unsplash.jpg'

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchResults:[]
        }
    }
    screen ={
        "minHeight":"100vh",
        "background":"#FDE74C"
    }

    handleSubmitSearch(searchKey,searchType){
        const url = 'http://localhost:8081/'
        this.setState({
            searchResults:[]
        })
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            const searchURL = `https://api.spotify.com/v1/search?query=${searchKey}&type=${searchType}&market=TW&offset=0&limit=10`
            fetch(searchURL,{
                method:'GET',
                headers: new Headers({
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${res.access_token}`
                })
            })
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    searchResults:res[searchType+"s"].items
                })
                console.log(res[searchType+"s"].items)
            })
        })
    }

    render(){
        return (
            <main style={this.screen}>
                <div className="row mx-auto">
                <SideNav />
                <div className="col-md-10 col-sm-12">
                    <div className="container mt-3">
                        <SearchBar onSubmit={this.handleSubmitSearch.bind(this)}/>
                        <hr/>
                        <div className="row mx-auto">
                        {this.state.searchResults.map((item,i)=>{
                            return (
                                <div className="col-md-3 col-sm-4 col-xs-10 mb-3" key={i}>
                                    <MusicCard key={i} title={item.name} img={Boolean(item.images)&&Boolean(item.images[0])?item.images[0].url:HeadphoneImg}/>
                                </div>
                            )
                        })}

                        </div>
                    </div>
                </div>
                </div>
            </main>
        )
    }
}

export default Search