import React, { Component } from 'react';
import UserNav from '../components/userNav'
import CartItem from '../components/cartItem'

class ShoppingCart extends Component{
  constructor(props){
    super(props)
    this.state={
      total:0
    }
  }

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

  handleSubmit(){

  }

  handleCancel(){
    console.log(this.props.removeAllShopping)
    if(this.props.removeAllShopping){
      this.props.removeAllShopping()
    }
  }

  render(){
    return (
    <div className="row">
      <UserNav />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"></div><div className="chartjs-size-monitor-shrink"></div></div>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">My cart</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
              <div className="mr-2">total price:{this.props.total}</div>
              <div className="btn-group mr-2">
              <button onClick={this.handleSubmit.bind(this)} className="btn btn-sm btn-outline-primary">check out</button>
              <button onClick={this.handleCancel.bind(this)} className="btn btn-sm btn-outline-danger">remove all</button>
              </div>
          </div>
          </div>
          {this.ShoppingItems()}
        </main>
    </div>
    )
  }
}

export default ShoppingCart