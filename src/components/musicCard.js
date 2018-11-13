import React, { Component } from 'react';
import HeadphoneImg from '../img/malte-wingen-381988-unsplash.jpg'

class MusicCard extends Component{
	constructor(props){
		super(props);
		this.state = {
            owned: this.props.shoppingCart[this.props.info.id]?"true": "false"
        }
    }
    
    async handleAddShopping(){
        if(this.props.addShopping){
            await this.props.addShopping(this.props.info,this.props.price,this.props.img)
            this.setState({owned: this.props.shoppingCart[this.props.info.id]?"true": "false"})
        }
    }

    async handleRemoveShopping(){
        if(this.props.removeShopping){
            await this.props.removeShopping(this.props.info)
            this.setState({owned: this.props.shoppingCart[this.props.info.id]?"true": "false"})
        }
    }

    render(){
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.img||HeadphoneImg} alt=""/>
                <div className="card-body">
                <h4>{this.props.info.name}</h4>
                {this.props.price?
                    <div>Price ${this.props.price} 
                    <span onClick={this.handleAddShopping.bind(this)}>+</span>
                    <span onClick={this.handleRemoveShopping.bind(this)}>-</span>
                    <div>{this.props.info.artists[0].name}</div>
                    <div>In my cart {this.state.owned}</div>
                    </div>
                :""}
                </div>
            </div>
        )
    }
}

export default MusicCard