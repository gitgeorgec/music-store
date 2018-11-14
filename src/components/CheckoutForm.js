import React, {Component} from 'react';
import {injectStripe,CardNumberElement,CardExpiryElement,CardCVCElement} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:"",
        email:"",

        complete: false
    }
    this.submit = this.submit.bind(this);
  }

  async submit(e) {
    e.preventDefault()
    let {token} = await this.props.stripe.createToken({name: "Name"});
    if(!token){
        console.log("not finish input")
        return
    }
    let response = await fetch("http://localhost:8081/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: JSON.stringify({
          "token":token.id,
          "name":"test",
          "email":"test@test.com"
        })
    })
    if(response.ok) {
        this.setState({complete: true})
    } else{

    };
  }
  

  render() {
    if (this.state.complete) return <h1>Purchase Complete. You pay ${this.props.total}</h1>;

    return (
      <form className="checkout m-2 form-group border rounded" style={{background:"#9BC53D"}}>
      <h2 className="m-2">Submit payment</h2>
        <div className="form-row m-2">
            <div className="form-group col-md-6">
            <label htmlFor="name">name</label>
            <input type="text" className="form-control" id="name" placeholder="name"/>
            </div>
            <div className="form-group col-md-6">
            <label htmlFor="inputEmail">Email</label>
            <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
            </div>
        </div>
        <div className="form-group m-2">
            <label htmlFor="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
        </div>  
        <div className="form-group m-2">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" className="form-control" id="phoneNumber" placeholder="0912345678"/>
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