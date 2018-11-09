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
            <p>Recommendations</p>
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