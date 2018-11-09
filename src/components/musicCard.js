import React, { Component } from 'react';


class MusicCard extends Component{
	constructor(props){
		super(props);
		this.state = {
		  	title:props.title,
            img: props.img,
            info: props.info,
            rate: "Good",
            owned: "false"
        }
        this.handleClcik= this.handleClcik.bind(this)
    }
    
    handleClcik(){
        let word 
        this.state.rate==="Good" ?word="bad":word="Good"
        this.setState({rate:word})
    }
    
    handleShopping(){
        if(this.props.addShopping){
            this.props.addShopping(this.state.title)
        }
        console.log("click")
        this.setState({owned: "true"})
    }

    render(){
        return (
            <div className="card">
                <img className="card-img-top" src={this.state.img} alt=""/>
                <div className="card-body">
                <h4>{this.state.title}</h4>
                <div onClick={this.handleClcik}>{this.state.rate}</div>
                <div onClick={this.handleShopping.bind(this)}>In my list {this.state.owned}</div>
                </div>
            </div>
        )
    }
}

export default MusicCard