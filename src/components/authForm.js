import React, { Component } from 'react';
import * as apiCalls from "../api/api"

class AuthForm extends Component{
  constructor(props){
    super(props)
    this.state = {
        email:"",
        username:"",
        password:"",
        err:false,
        sign:true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(e){
    e.preventDefault()
    const path = this.state.sign?"signin":"signup"
    const url = "http://localhost:8081/api/auth/"+path
    console.log(url)
    const username=this.state.username 
    const email=this.state.email
    const password=this.state.password
    const data = await apiCalls.getAuth(url,username,email,password)
    if(data){
        localStorage.setItem("jwtToken", data.token);
        localStorage.setItem("id", data.id);
        localStorage.setItem("username", data.username);
        // this.props.history.push("/")
    }else {
        this.setState({err:true})
    }
    this.props.checkAuth()
  }

  handleChange = e =>{
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleTestLogin(){
    this.setState({
      email:"test@test.com",
      username:"test",
      password:"test",
    })
  }

  render(){
    return (
      <React.Fragment>
        <h1 className="text-center">{this.state.sign?"log in":"register"}</h1>
        {this.state.err?<div className="text-center">wrong user input</div>:""}
        <form className="col-md-9 mx-auto col-sm-12" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Email">Email address</label>
            <input name="email" type="email" className="form-control" id="Email" placeholder="Enter email" onChange={this.handleChange} value={this.state.email}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          {this.state.sign?"":
          <div className="form-group">
            <label htmlFor="Username">username</label>
            <input name="username" type="text" className="form-control" id="Username" placeholder="Enter email" onChange={this.handleChange} value={this.state.username}/>
          </div>}
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input name="password" type="password" className="form-control" id="Password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary form-control">Submit</button>
          </div>
          {this.state.sign?
          <div className="form-group">
            <div className="btn btn-warning form-control" onClick={this.handleTestLogin.bind(this)}>Test User</div>
          </div>:""}
          <div  className="form-group">
            <div className="btn btn-success form-control" onClick={()=>this.setState({sign:!this.state.sign})}>{this.state.sign?"new user":"I have a account"}</div>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default AuthForm