import React, { Component } from 'react';
// import Landing from './container/landing'
import Main from './container/Main';
import Header from './container/header'
import * as apiCalls from "./api/api"
// import { setCookie, getCookie }from "./function/cookie"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
        shoppingCart:{},
        count:0,
        login:false,
        logout:this.logout,
        add:this.addcount.bind(this),
        total:0,
        addShopping:this.addShopping.bind(this),
        removeShopping:this.removeShopping.bind(this),
        removeAllShopping: this.removeAllShopping.bind(this),
        checkAuth:this.authUser.bind(this)
    }
  }

  componentWillMount(){
    if(localStorage.getItem('cart')){
      let shoppingCart = JSON.parse(localStorage.getItem('cart'))
      let total = 0
      for(let key in shoppingCart){
        total = total + shoppingCart[key].price * shoppingCart[key].qty
      }
      this.setState({
        shoppingCart:shoppingCart,
        total:total
      })
    }
  }

  componentDidMount(){
    this.authUser()
  }

  componentDidUpdate(){
    this.authUser()
  }

  async authUser(){
    if(localStorage.jwtToken){
      console.log("have token")
      const isLogin = await apiCalls.checkAuth(localStorage.id, localStorage.jwtToken)
      if(isLogin){
        (!this.state.login)?this.setState({login:true}):console.log("not Auth")
        console.log("auth user "+localStorage.username)
        return true
      }else{
        localStorage.removeItem("jwtToken")
        localStorage.removeItem("id");
        localStorage.removeItem("username");
        this.setState({login:false})
        return false
      }
    }else{
      console.log("not auth")
      return false
    }
  }

  logout=()=>{
    localStorage.removeItem("jwtToken")
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    this.setState({login:false})
  }

  addcount(s=1){
    this.setState((prevState,props)=>({count:prevState.count+s}))
  }

  addShopping(item,price,img){
    let NewCart = JSON.parse(JSON.stringify(this.state.shoppingCart));
    let totalPrice = this.state.total
    if(!NewCart[item.id]){
      NewCart[item.id]={item, qty:1, price, img}
      localStorage.setItem("cart",JSON.stringify(NewCart))
    }else{
      NewCart[item.id].qty++
      NewCart[item.id].price = price
      localStorage.setItem("cart",JSON.stringify(NewCart))
    }
    totalPrice += price
    this.setState({shoppingCart:NewCart, total:totalPrice})
  }

  removeShopping(item){
    let NewCart = JSON.parse(JSON.stringify(this.state.shoppingCart));
    let totalPrice = this.state.total
    if(NewCart[item.id]){
      const price = NewCart[item.id].price
      if(NewCart[item.id].qty===1){
        delete NewCart[item.id]
      }else{
        NewCart[item.id].qty--
      }
      totalPrice-price>0?totalPrice=totalPrice-price:totalPrice=0
    }
    localStorage.setItem("cart",JSON.stringify(NewCart))
    this.setState({shoppingCart:NewCart, total:totalPrice})
  }

  removeAllShopping(){
    localStorage.removeItem("cart")
    this.setState({
      shoppingCart:{},
      total:0,
    })
  }

  render() {
    // if(this.state.login){
    //   return (<Landing />)
    // }
    return (
      <div>
        <Header {...this.state}/>
        <Main {...this.state}/>
      </div>
    );
  }
}

export default App;
