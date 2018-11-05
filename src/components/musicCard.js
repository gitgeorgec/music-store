import React, { Component } from 'react';


class MusicCard extends Component{
	constructor(props){
		super(props);
		this.state = {
		  	title:props.title,
		  	img: props.img
        }
        this.handleClcik= this.handleClcik.bind(this)
    }
    
    handleClcik(){
        let word 
        this.state.title==="Good" ?word="bad":word="Good"
        this.setState({title:word})
    }


    
    render(){
        return (
            <div className="card">
                <img className="card-img-top" src={this.state.img} alt=""/>
                <div className="card-body">
                <h1 onClick={this.handleClcik}>{this.state.title}</h1>
                </div>
            </div>
        )
    }
}

export default MusicCard