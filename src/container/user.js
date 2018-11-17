import React, { Component } from 'react';
import CartItem from '../components/cartItem'
import { getUser} from '../api/api'

class User extends Component{
  constructor(props){
    super(props)
    this.state={
      username:"",
      email:"",
      page:"My account",
      products:"",
    }
  }

  async componentWillMount(){
    let User = await getUser()
    console.log(User)
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

  render(){
      return (
      <div className="row mx-auto">
      <nav className="col-md-2 d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item text-center" onClick={this.handlePageChange.bind(this, "My account")}>
                My account
            </li>
            <li className="nav-item" onClick={this.handlePageChange.bind(this, "My order")}>
                My order
            </li>
            <li className="nav-item" onClick={this.handlePageChange.bind(this, "My music")}>
                My music
            </li>
          </ul>
        </div>
      </nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"></div><div className="chartjs-size-monitor-shrink"></div></div>
              <div className="pt-3 pb-2 mb-3 border-bottom">
              <h1>{this.state.page}</h1>
              </div>
              {this.state.page==="My account"?this.account():""}
              {this.state.page==="My order"?this.orderList():""}
              {this.state.page==="My music"?this.ShoppingItems():""}

          </main>
      </div>
      )
  }
}

export default User