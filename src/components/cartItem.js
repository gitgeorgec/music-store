import React, { Component } from 'react';
import HeadphoneImg from '../img/malte-wingen-381988-unsplash.jpg'


class CartItem extends Component{

    handleAddShopping(){
        if(this.props.addShopping){
            this.props.addShopping(this.props.info.item,this.props.info.price)
        }
        this.setState({owned: "true"})
    }
    handleRemoveShopping(){
        if(this.props.removeShopping){
            this.props.removeShopping(this.props.info.item)
        }
    }

    render(){
        return (
            <div className="row ">
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <img className="card-img" src={this.props.info.img||HeadphoneImg} alt=""/>
                </div>
                <div className="col-lg-10 col-md-9 col-sm-8 col-6">
                    <h4>{this.props.info.item.name}</h4>
                    <div>Price ${this.props.info.price} 
                    <span onClick={this.handleAddShopping.bind(this)}>+</span>
                    <span onClick={this.handleRemoveShopping.bind(this)}>-</span>
                    </div>
                    <div>number {this.props.info.qty}</div>
                </div>
            </div>
        )
    }
}

export default CartItem