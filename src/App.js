import React, { Component } from 'react';
import Main from './container/Main';
import Header from './container/header'
import * as apiCalls from "./api/api"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
        buyChart:[],
        count:0,
        login:false,
        logout:this.logout.bind(this),
        add:this.addcount.bind(this),
        addShopping:this.addShopping.bind(this),
    }
  }

  async componentDidMount(){
    console.log("componentDidMount")
    this.authUser()
  }

  async componentDidUpdate(){
    console.log("componentDidUpadate")
    //checkuser
    this.authUser()
  }

  async authUser(){
    if(localStorage.jwtToken){
      console.log("have token")
      const isLogin = await apiCalls.checkAuth(localStorage.id, localStorage.jwtToken)
      if(isLogin){
        (!this.state.login)?this.setState({login:true}):console.log("auth user")
      }else{
        localStorage.clear()
        console.log("not auth")
      }
    }
  }

  logout(){
    localStorage.clear()
    this.setState({login:false})
  }

  addcount(s=1){
    let c= this.state.count
    c = c + s
    this.setState({count:c})
  }

  addShopping(item){
    let buyChart= [...this.state.buyChart]
    console.log(buyChart)
    if(buyChart.includes(item)){
      console.log("include")
    }else{
      buyChart =[...buyChart, item]
      this.setState({buyChart})
    }
    console.log(buyChart)
  }
  
  render() {
    return (
      <div>
        <Header {...this.state} onlogOut={this.state.logout}/>
        <div>{this.state.count}</div>
        <Main {...this.state}/>
      </div>
    );
  }
}

export default App;
