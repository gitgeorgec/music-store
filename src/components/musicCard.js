import React, { Component } from 'react';


class MusicCard extends Component{
	constructor(props){
		super(props);
		this.state = {
		  	title:props.title,
            img: props.img,
            info: props.info,
            rate: "Good"
        }
        this.handleClcik= this.handleClcik.bind(this)
    }
    
    handleClcik(){
        let word 
        this.state.rate==="Good" ?word="bad":word="Good"
        this.setState({rate:word})
    }
    
    render(){
        return (
            <div className="card">
                <img className="card-img-top" src={this.state.img} alt=""/>
                <div className="card-body">
                <h4>{this.state.title}</h4>
                {/* <div>{this.state.info.artists[0].name}</div> */}
                <div onClick={this.handleClcik}>{this.state.rate}</div>
                </div>
            </div>
        )
    }
}

export default MusicCard