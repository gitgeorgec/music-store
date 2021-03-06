import React, { Component } from 'react';

class SideNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            genres:["acoustic","alternative", "anime","blues", "bossanova", "chill", "classical", "dance", "deep-house","disco", "drum-and-bass","dubstep","electronic", "funk","groove", "guitar", "happy", "hard-rock", "hip-hop", "holidays", "house", "indie", "industrial", "j-pop", "j-rock", "jazz", "k-pop", "mandopop", "metal", "movies", "new-release", "opera","piano", "pop", "punk","road-trip", "rock","rock-n-roll","romance","sad","sleep","soul","study","summer","tango","trance","work-out"],
        }
    }
    screen ={
        "height":"100vh",
        "background":"#C3423F"
    }

    handleGenreClick(e){
        if(this.props.onSubmit){
            this.props.onSubmit(e.target.innerText)
            console.log(e.target.innerText)
        }
        this.setState({
            selected:e.target.value
        })
    }

    hoverIn(e){
        e.target.classList.add("font-large")
        if(e.target.previousElementSibling){
          e.target.previousElementSibling.classList.add("font-mid")
        }
        if(e.target.nextElementSibling){
          e.target.nextElementSibling.classList.add("font-mid")
        }
    }

    hoverOut(e){
        e.target.classList.remove("font-large")
        if(e.target.previousElementSibling){
          e.target.previousElementSibling.classList.remove("font-mid")
        }
        if(e.target.nextElementSibling){
          e.target.nextElementSibling.classList.remove("font-mid")
        }
    }
    handleSideShowUP(){
        const side = document.querySelector(".side-nav")
        side.classList.toggle("hide-nav")
      }

    render(){
        return (
            <React.Fragment>
                <i className="fas fa-arrow-circle-right position-fixed btn" style={{zIndex:"3", top:"50%", left:"-25px", fontSize:"2rem"}} onClick={this.handleSideShowUP.bind(this)}></i>
                <div className="col-md-2 background_red side-nav hide-nav" style={{transition:"0.3s"}}>
                    <h4 className="text-center pt-3 pb-2 mb-3" style={{color:"#fff",wordBreak: "break-all"}}>
                    Recommendations
                    <i className="fas fa-times-circle btn close-tag" onClick={this.handleSideShowUP.bind(this)}></i>
                    </h4>
                    <ul className="list-group list-group-flush">
                        {this.state.genres.map((item,i)=>{
                            return(
                                <li style={{transition:"0.1s"}} onMouseEnter={this.hoverIn.bind(this)} onMouseLeave={this.hoverOut.bind(this)}  onClick={this.handleGenreClick.bind(this)} className="btn btn-outline-warning" key={i}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default SideNav