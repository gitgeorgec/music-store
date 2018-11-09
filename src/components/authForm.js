import React, { Component } from 'react';
import * as apiCalls from "../api/api"
import { Redirect } from 'react-router-dom'

class AuthForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:"",
            username:"",
            password:"",
            err:false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(e){
        e.preventDefault()
        const path = this.props.sign?"signin":"signup"
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
            this.props.history.push("/")
        }else {
            this.setState({err:true})
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        if (this.props.login) {
            return <Redirect to='/'/>;
        }else{
        return (
            <div className="container">
            <h1 className="text-center">{this.props.heading}</h1>
                <form className="col-md-9 mx-auto col-sm-12 form-control-lg" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Email">Email address</label>
                        <input name="email" type="email" className="form-control" id="Email" placeholder="Enter email" onChange={this.handleChange}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Username">username</label>
                        <input name="username" type="text" className="form-control" id="Username" placeholder="Enter email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input name="password" type="password" className="form-control" id="Password" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    {this.state.err?<div>wrong user</div>:""}
                </form>
            </div>
        )
        }
    }
}

export default AuthForm