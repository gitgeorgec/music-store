import React, { Component } from 'react';
import UserNav from '../components/userNav'
import CartItem from '../components/cartItem'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../components/CheckoutForm';

class ShoppingCart extends Component{

  componentDidMount(){
    console.log("shopping page mount")
    for(let key in this.props.shoppingCart){
      console.log(this.props.shoppingCart[key].item.name)
      console.log(this.props.shoppingCart[key].item.type)
    }
  }

  ShoppingItems =()=>{
    let arr = []
    for(let key in this.props.shoppingCart){
        arr.push(
        <CartItem 
          key={key}
          info={this.props.shoppingCart[key]}
          {...this.props}
        />
      )
    }
    return arr
  }

  handleCancel(){
    if(this.props.removeAllShopping){
      this.props.removeAllShopping()
    }
  }

  handleCheckOut(){
    this.props.history.push("/login")
  }

  render(){
    return (
    <div className="row mx-auto">
      <UserNav />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="chartjs-size-monitor">
            <div className="chartjs-size-monitor-expand"></div>
            <div className="chartjs-size-monitor-shrink"></div>
          </div>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">My cart</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <p className="mr-3">total price:{this.props.total}</p>
            <div className="btn-group mr-2">
            {this.props.login?<button className="btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#exampleModalCenter">check out</button>:<button className="btn btn-sm btn-outline-primary" onClick={this.handleCheckOut.bind(this)} >check out</button>}
            <button onClick={this.handleCancel.bind(this)} className="btn btn-sm btn-outline-danger">remove all</button>
            </div>
          </div>
          </div>
          {this.ShoppingItems()}
          <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <StripeProvider apiKey="pk_test_WtTS1S3oqOzys4iqVJtSpOaB">
                  <div className="example">
                    <Elements>
                      <CheckoutForm {...this.props}/>
                    </Elements>
                  </div>
                </StripeProvider>
              </div>
            </div>
          </div>          
        </main>
    </div>
    )
  }
}

export default ShoppingCart