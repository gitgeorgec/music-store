import React, { Component } from 'react';
import HeadphoneImg from '../img/malte-wingen-381988-unsplash.jpg'

class MusicCard extends Component{
    
    handleAddShopping(){
        if(this.props.addShopping){
            this.props.addShopping(this.props.info,this.props.price,this.props.img)
        }
    }

    handleRemoveShopping(){
        if(this.props.removeShopping){
            this.props.removeShopping(this.props.info)
        }
    }

    render(){
        return (
            <div className="card background_black">
                <img className="card-img-top" src={this.props.img?this.props.img:HeadphoneImg} alt=""/>
                <div className="card-body" style={{color:"#fff"}}>
                <h4>{this.props.info.name}</h4>
                {this.props.price?
                    <div>
                        Artists:{this.props.info.artists[0].name} <br/>
                        Price:{this.props.price} <br/>
                            <i className="fas fa-shopping-cart"></i>&nbsp;
                            <span className="badge badge-pill badge-info">{this.props.shoppingCart[this.props.info.id]?this.props.shoppingCart[this.props.info.id].qty:0}</span>
                            <span className="float-right">
                                <span className="btn btn-warning btn-sm" onClick={this.handleAddShopping.bind(this)}>+</span>&nbsp;
                                <span className="btn btn-danger btn-sm" onClick={this.handleRemoveShopping.bind(this)}>-</span>
                            </span>
                    </div>
                :""}
                </div>
            </div>
        )
    }
}

export default MusicCard