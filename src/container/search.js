import React, { Component } from 'react';
import SideNav from '../components/sideNav'
import SearchBar from '../components/searchBar'
import MusicCard from '../components/musicCard'
import HeadphoneImg from '../img/malte-wingen-381988-unsplash.jpg'
import throttle from '../function/throttle'
import * as apiCalls from "../api/api"
// const url = 'http://localhost:8081/access_token'
const body = document.body
const html = document.documentElement

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchResults:[],
            next:"https://api.spotify.com/v1/browse/new-releases?country=TW&limit=20",
            genre:"",
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
        if(searchKey==="")searchKey=" "
        this.setState({
            searchResults:[],
            next:`https://api.spotify.com/v1/search?query=${searchKey}&type=${searchType}&market=TW&offset=0&limit=20`
        },this.handleSearch)
    }

    handleGenreSearch(genre){
        this.setState({
            searchResults:[],
            next:`https://api.spotify.com/v1/recommendations?limit=40&market=TW&seed_genres=${genre}`,
            searchType:"track",
            genre
        },this.handleSearch)
    }

    async handleSearch(){
        const searchURL = this.state.next
        let token = await apiCalls.getToken()
        let data = await apiCalls.getData(searchURL,token)
        console.log(data)
        const Results = this.state.searchResults.splice("")
        if(data[this.state.searchType+"s"]&&data[this.state.searchType+"s"].items){
            this.setState({
                searchResults:[...Results, ...data[this.state.searchType+"s"].items],
                next:data[this.state.searchType+"s"].next
            })
        }else if(data.seeds){
            this.setState({
                searchResults:[...Results, ...data[this.state.searchType+"s"]],
                next:`https://api.spotify.com/v1/recommendations?limit=20&offset=20&=market=TW&seed_genres=${this.state.genre}`,
            })           
        }else{
            this.setState({
                next:null
            })                
        }
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

    handleClick(){
        if(this.props.add){
            this.props.add()
        }
    }
    render(){
        return (
            <main>
                <div onClick={this.handleClick.bind(this)}>click</div>
                <div className="row mx-auto">
                <SideNav onSubmit={this.handleGenreSearch.bind(this)} categories={this.state.Categories}/>
                <div className="col-md-10 col-sm-12">
                    <div className="container mt-3">
                        <SearchBar onSubmit={this.handleSubmitSearch.bind(this)}/>
                        <hr/>
                        <div className="row mx-auto" style={{"minHeight":"90vh"}}>
                            {this.state.searchType!=="track"?this.state.searchResults.map((item,i)=>{
                                return (
                                    <div className="col-md-3 col-sm-4 col-xs-10 mb-3" key={i}>
                                        <MusicCard key={i} info={item} title={item.name} img={Boolean(item.images)&&Boolean(item.images[0])?item.images[0].url:HeadphoneImg} {...this.props}/>
                                    </div>
                                    )
                                })
                                :""}
                            {this.state.searchType==="track"?
                                this.state.searchResults.map((item,i)=>{
                                    return(
                                        <div className="col-md-3 col-sm-4 col-xs-10 mb-3" key={i}>
                                            <MusicCard key={i} info={item} title={item.name} img={Boolean(item.album.images)&&Boolean(item.album.images[0])?item.album.images[0].url:HeadphoneImg} {...this.props}/>
                                        </div>
                                        )})
                                :""} 
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