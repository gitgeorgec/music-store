import React, { Component } from 'react';
import SideNav from '../components/sideNav'
import SearchBar from '../components/searchBar'
import MusicCard from '../components/musicCard'
import HeadphoneImg from '../img/malte-wingen-381988-unsplash.jpg'
import throttle from '../function/throttle'
const url = 'https://secret-plateau-59047.herokuapp.com/access_token'
// const url = 'http://localhost:8081/access_token'
const body = document.body
const html = document.documentElement

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            genreResults:[],
            searchResults:[],
            next:"https://api.spotify.com/v1/browse/new-releases?country=TW&limit=20",
            searchType:"album",
            Categories:null
        }
        this.Scroll = this.Scroll.bind(this)
        this.handleScroll = throttle(this.Scroll)
    }

    componentDidMount() {
        this.handleSearch()
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleSubmitSearch(searchKey,searchType){
        this.setState({
            searchResults:[],
            next:null
        })
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            const searchURL = `https://api.spotify.com/v1/search?query=${searchKey}&type=${searchType}&market=TW&offset=0&limit=20`
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
                if(Boolean(res[searchType+"s"])){
                    this.setState({
                        searchResults:res[searchType+"s"].items,
                        next:res[searchType+"s"].next,
                        searchType:searchType
                    })
                }
            })
            .catch(err=>console.log(err))
        })
        .catch(err=>{
            console.log(err)
        })
    }

    handleGenreSearch(genre){
        this.setState({
            searchResults:[],
            next:`https://api.spotify.com/v1/recommendations?limit=20&market=TW&seed_genres=${genre}`,
            searchType:"track"
        })
        this.handleSearch()
    }

    handleSearch(){
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            const searchURL = this.state.next
            console.log(searchURL)
            fetch(searchURL,{
                method:'GET',
                headers: new Headers({
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${res.access_token}`
                })
            })
            .then(res=>{
                if (!res.ok) {
                    throw Error(res);
                }
                return res.json()
            })
            .then(res=>{
                console.log(res)
                const Results = this.state.searchResults.splice("")
                this.setState({
                    searchResults:[...Results, ...res[this.state.searchType+"s"].items],
                    next:res[this.state.searchType+"s"].next
                })
            })
            .catch(function(error) {
                console.log(error);
            });
        })   
    }

    Scroll(){
        const DocHeight = Math.max(body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight );
        const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        if(window.scrollY+screenHeight >= DocHeight-200){
            if(this.state.next){
                this.handleSearch()
            }
        }
        return
    }

    render(){
        return (
            <main>
                <div className="row mx-auto">
                <SideNav onSubmit={this.handleGenreSearch.bind(this)} categories={this.state.Categories}/>
                <div className="col-md-10 col-sm-12">
                    <div className="container mt-3">
                        <SearchBar onSubmit={this.handleSubmitSearch.bind(this)}/>
                        <hr/>
                        <div className="row mx-auto" style={{"minHeight":"90vh"}}>
                            {this.state.searchResults?this.state.searchResults.map((item,i)=>{
                                return (
                                    <div className="col-md-3 col-sm-4 col-xs-10 mb-3" key={i}>
                                        <MusicCard key={i} info={item} title={item.name} img={Boolean(item.images)&&Boolean(item.images[0])?item.images[0].url:HeadphoneImg}/>
                                    </div>
                                )
                            }):""}
                            {this.state.next?<div className="lds-dual-ring mx-auto"></div>:<div className="col-12 text-center" style={{ "fontSize":"2rem"}}>No more result</div>}
                        </div>
                    </div>
                </div>
                </div>
            </main>
        )
    }
}

export default Search