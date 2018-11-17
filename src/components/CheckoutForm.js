import React, {Component} from 'react';
import {injectStripe,CardNumberElement,CardExpiryElement,CardCVCElement} from 'react-stripe-elements';
import{ makeOrder }from "../api/api"

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:"",
        email:"",
        address:"",
        phoneNumber:"",
        complete:"",
        payment:""
    }
    this.submit = this.submit.bind(this);
  }

  handleChange = e =>{
    //check email
    if(e.target.name==="email"){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(e.target.value).toLowerCase())){
            this.setState({
                [e.target.name]: e.target.value
            })
            return 
        }else{
            return
        }
    }
    //check phonenumber
    if(e.target.name==="phoneNumber"){
        e.target.value.length === 10?this.setState({[e.target.name]: e.target.value}):console.log("not phone number")
        return
    }
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  async submit(e) {
    e.preventDefault()
    let {token} = await this.props.stripe.createToken({name: "Name"});
    if(!token){
        this.setState({complete:"false"})
        return
    }
    let response = await makeOrder(token.id,{
        "name":this.state.name,
        "email":this.state.email,
        "phoneNumber":this.state.phoneNumber,
        "address":this.state.address,
        "total":this.props.total,
        "userID":localStorage.id,
        "cart":localStorage.cart?JSON.parse(localStorage.cart):""
      })
    if(response.ok) {
        this.setState({
            complete: "true",
            payment:this.props.total
        })
        this.props.removeAllShopping()
    } else{
        this.setState({complete: "false"})
    };
  }
  

  render() {
    if (this.state.complete==="true") return <h1>Purchase Complete. payment: {this.state.payment}</h1>;

    return (
      <form className="checkout m-2 form-group border rounded" style={{background:"#9BC53D"}}>
      <h2 className="m-2">Submit payment</h2>
      {this.state.complete==="false"?<h3 className="text-center" style={{color:"red"}}>something gose wrong please check your input</h3>:""}
        <div className="form-row m-2">
            <div className="form-group col-md-6">
            <label htmlFor="name">name</label>
            <input type="text" name="name" onChange={this.handleChange.bind(this)} className="form-control" id="name" placeholder="name"/>
            </div>
            <div className="form-group col-md-6">
            <label htmlFor="inputEmail">Email</label>
            <input type="email" name="email" onChange={this.handleChange.bind(this)} className="form-control" id="inputEmail" placeholder="Email"/>
            </div>
        </div>
        <div className="form-group m-2">
            <label htmlFor="inputAddress">Address</label>
            <input type="text" name="address" onChange={this.handleChange.bind(this)} className="form-control" id="inputAddress" placeholder="1234 Main St"/>
        </div>  
        <div className="form-group m-2">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" name="phoneNumber" onChange={this.handleChange.bind(this)} className="form-control" id="phoneNumber" placeholder="0912345678"/>
        </div>
        <div className="border border-danger rounded m-2">
            <h3 className="m-2">Credit Card</h3>
            <div className="form-group m-2">
                <label htmlFor="card-number">card number</label>
                <CardNumberElement  className="form-control  col-md-6" id="card-number"/>
            </div>
            <div className="form-group m-2">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="expired-date">expired date</label>
                        <CardExpiryElement className="form-control" id="expired-date"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="cvc-number">cvc</label>
                        <CardCVCElement className="form-control" id="cvc-number"/>
                    </div>
                </div>
            </div>
        </div>  
            <div className="d-flex justify-content-end">
                <p className="m-3">payment ${this.props.total}</p>
                <button className="btn btn-warning m-2 " onClick={this.submit}>Send</button>
            </div>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);