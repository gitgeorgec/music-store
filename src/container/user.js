import React, { Component } from 'react';
import ProductItem from '../components/productItem'
import HeadphoneImg from '../img/malte-wingen-381988-unsplash.jpg'
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
        <ProductItem 
          key={key}
          info={this.state.products[key]}
        />
      )
    }
    return arr
  }

  account =()=>{
    return (
      <div className="col-12">
      <div className="row m-1 pt-2 pb-2">
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <img className="card-img shadow" src={HeadphoneImg} alt=""/>
          </div>
          <div className="col-lg-10 col-md-9 col-sm-8 col-6" style={{ fontWeight:"bold", fontSize:"1.5rem"}}>
              username: {this.state.username} <br/>
              email: {this.state.email}
          </div>
      </div>
      </div>
  )
  }

  orderList(){
    let list =this.state.order.map((item)=>(
          <div class="card" key={item._id}>
            <div class="card-header">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target={"#Id"+item._id}>
              {item._id}
              </button>
            </h5>
          </div>
          <div id={"Id"+item._id} class="collapse" data-parent="#orderList">
            <div class="card-body">
              {Object.values(item.cart).map(item=>(
                <div class="row">
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                    <img className="card-img shadow" src={item.img} alt=""/>
                  </div>
                  <div className="col-lg-10 col-md-9 col-sm-8 col-6" style={{fontWeight:"bolder"}}>
                  <h4>{item.item.name}&nbsp;</h4>
                  Artists: {item.item.artists[0].name} <br/>
                  Price: ${item.price} <br/>
                  qty: {item.qty} &nbsp;
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
      )
    )
    return (
       <div className="col-12">
        <div class="" id="orderList">
          {list}
        </div>
       </div>
      )
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
    let items = ["My music","My account","My order",]
    return items.map((item,i)=>{
      return <li key={i} className="nav-item btn btn-outline-warning" style={{transition:"0.1s"}} onMouseEnter={this.hoverIn.bind(this)} onMouseLeave={this.hoverOut.bind(this)} onClick={this.handlePageChange.bind(this, item)}>
      {item}
      </li>      
    })
  }

  render(){
      return (
      <div className="row mx-auto" style={{position:"relative"}}>
      <nav className="col-md-2 background_red">
        <p className="text-center pt-3 pb-2 mb-3" style={{color:"#fff",fontSize:"1.2rem"}}>Hello {localStorage.username} </p>
          <ul className="nav flex-column mb-3">
            {this.sideNav()}
          </ul>
      </nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 "><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"></div><div className="chartjs-size-monitor-shrink"></div></div>
              <div className="pt-3 pb-2 mb-3 border-bottom">
              <h1>{this.state.page}</h1>
              </div>
              <div style={{minHeight:"90vh"}}>
                <div className="row">
                  {this.state.page==="My account"?this.account():""}
                  {this.state.page==="My order"?this.orderList():""}
                  {this.state.page==="My music"?this.ShoppingItems():""}
                </div>
              </div>
          </main>
      </div>
      )
  }
}

export default User