import React, { Component } from 'react';
import HeadphoneImg from '../img/malte-wingen-381988-unsplash.jpg'


class CartItem extends Component{

    handleAddShopping(){
        if(this.props.addShopping){
            this.props.addShopping(this.props.info.item,this.props.info.price)
        }
    }
    handleRemoveShopping(){
        if(this.props.removeShopping){
            this.props.removeShopping(this.props.info.item)
        }
    }

    render(){
        return (
            <div className="col-12">
            <div className="row m-1 pt-2 pb-2 background_green border rounded">
                <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <img className="card-img shadow" src={this.props.info.img||HeadphoneImg} alt=""/>
                </div>
                <div className="col-lg-10 col-md-9 col-sm-8 col-6" style={{textShadow:"1px 1px 2px #222222", color:"#f2f2f2", fontWeight:"bold"}}>
                    <h4>
                        {this.props.info.item.name}&nbsp;
                        <div className="mt-1">
                            <span className="btn btn-warning btn-sm" onClick={this.handleAddShopping.bind(this)}>+</span>&nbsp;
                            <span className="btn btn-danger btn-sm" onClick={this.handleRemoveShopping.bind(this)}>-</span>
                        </div>
                    </h4>
                    Artists: {this.props.info.item.artists[0].name} <br/>
                    Price: ${this.props.info.price} 
                    <div className="m-2 p-1">
                    </div>
                    <span className="float-right d-inline-block" style={{fontWeight:"bolder"}} >
                    qty: {this.props.info.qty} &nbsp;
                    total: {this.props.info.qty*this.props.info.price}$
                    </span>
                </div>
            </div>
            </div>
        )
    }
}

export default CartItem