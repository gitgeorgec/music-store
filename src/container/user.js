import React, { Component } from 'react';
import CartItem from '../components/cartItem'
// import ShoppingCart from "./shoppingChat"
import { getUser} from '../api/api'

class User extends Component{
  constructor(props){
    super(props)
    this.state={
      username:"",
      email:"",
      page:"My music",
      products:"",
    }
  }

  async componentWillMount(){
    let User = await getUser()
    this.setState({
      order:User.order,
      username:User.username,
      email:User.email,
      products:User.product
    })
  }
  
  ShoppingItems =()=>{
    let arr = []
    for(let key in this.state.products){
        arr.push(
        <CartItem 
          key={key}
          info={this.state.products[key]}
        />
      )
    }
    return arr
  }

  account =()=>{
    return <div className="">
      <div>username:{this.state.username}</div>
      <div>email:{this.state.email}</div>
    </div>
  }

  orderList(){
    let list =this.state.order.map((item,i)=><div key={i}>訂單編號：{item}</div>)
    return <div>{list}</div> 
  }

  handlePageChange(page){
    this.setState({page})
  }

  hoverIn(e){
    e.target.classList.add("font-large")
    if(e.target.previousElementSibling){
      e.target.previousElementSibling.classList.add("font-mid")
    }
    if(e.target.nextElementSibling){
      e.target.nextElementSibling.classList.add("font-mid")
    }
  }

  hoverOut(e){
    e.target.classList.remove("font-large")
    if(e.target.previousElementSibling){
      e.target.previousElementSibling.classList.remove("font-mid")
    }
    if(e.target.nextElementSibling){
      e.target.nextElementSibling.classList.remove("font-mid")
    }
  }

  sideNav(){
    let items = ["My music","My playlist","My account","My order",]
    return items.map((item,i)=>{
      return <li key={i} className="nav-item btn btn-outline-warning" style={{transition:"0.1s"}} onMouseEnter={this.hoverIn.bind(this)} onMouseLeave={this.hoverOut.bind(this)} onClick={this.handlePageChange.bind(this, item)}>
      {item}
      </li>      
    })
  }

  render(){
      return (
      <div className="row mx-auto">
      <nav className="col-md-2 d-md-block sidebar background_red">
        <p className="text-center pt-3 pb-2 mb-3" style={{color:"#fff",fontSize:"1.2rem"}}>Hello {localStorage.username} </p>
          <ul className="nav flex-column mb-3">
            {this.sideNav()}
          </ul>
      </nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 "><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"></div><div className="chartjs-size-monitor-shrink"></div></div>
              <div className="pt-3 pb-2 mb-3 border-bottom">
              <h1>{this.state.page}</h1>
              </div>
              <div style={{minHeight:"100vh"}}>
                {this.state.page==="My account"?this.account():""}
                {this.state.page==="My order"?this.orderList():""}
                {this.state.page==="My music"?this.ShoppingItems():""}
                {/* {this.state.page==="My cart"?<ShoppingCart {...this.props}/>:""} */}
              </div>
          </main>
      </div>
      )
  }
}

export default User