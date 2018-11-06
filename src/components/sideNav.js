import React, { Component } from 'react';


class SideNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            genres:["acoustic","alternative", "anime","blues", "bossanova", "chill", "classical", "dance", "deep-house","disco", "drum-and-bass","dubstep","electronic", "funk","groove", "guitar", "happy", "hard-rock", "hip-hop", "holidays", "house", "indie", "industrial", "j-pop", "j-rock", "jazz", "k-pop", "mandopop", "metal", "movies", "new-release", "opera","piano", "pop", "punk","road-trip", "rock","rock-n-roll","romance","sad","sleep","soul","study","summer","tango","trance","work-out"],
        }
    }

    backred ={
        "background":"#C3423F"
    }
    screen ={
        "height":"100vh",
        "background":"#C3423F"
    }
    // GetGenres(){
    //     const url = 'https://secret-plateau-59047.herokuapp.com/access_token'
    //     const CategoriesURL="https://api.spotify.com/v1/recommendations/available-genre-seeds"
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(res=>{
    //         fetch(CategoriesURL,{
    //             method:'GET',
    //             headers: new Headers({
    //                 "Accept": "application/json",
    //                 "Content-Type": "application/json",
    //                 "Authorization": `Bearer ${res.access_token}`
    //             })
    //         })
    //         .then(res=>res.json())
    //         .then(res=>{
    //             this.setState({
    //                 genres:res.genres
    //             })
    //             console.log(this.state.genres)
    //         })
    //     })   
    // }

    handleGenreChange(e){
        if(this.props.onSubmit){
            this.props.onSubmit(e.target.innerText)
            console.log(e.target.innerText)
        }
        this.setState({
            selected:e.target.value
        })
    }
    render(){
        return (
            <div className="col-md-2" style={this.backred}>
            <p></p>
                <ul className="list-group list-group-flush">
                    {this.state.genres.map((item,i)=>{
                        return(
                            <li onClick={this.handleGenreChange.bind(this)} className="list-group-item" key={i}>{item}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default SideNav