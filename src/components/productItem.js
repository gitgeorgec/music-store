import React, { Component } from 'react';
import HeadphoneImg from '../img/malte-wingen-381988-unsplash.jpg'


class ProductItem extends Component{

    handleClcik(){
        console.log(this.props.info.item)
    }

    render(){
        return (
            <div onClick={this.handleClcik.bind(this)} className="col-12">
                <div className="row m-1 pt-2 pb-2 border border-dark rounded shadow">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <img className="card-img shadow" src={this.props.info.img||HeadphoneImg} alt=""/>
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-6" style={{fontWeight:"bolder"}}>
                        <h4>{this.props.info.item.name}&nbsp;</h4>
                        Artists: {this.props.info.item.artists[0].name} <br/>
                        Price: ${this.props.info.price} <br/>
                        qty: {this.props.info.qty} &nbsp;
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem