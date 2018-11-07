import React, { Component } from 'react';


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:"",
            username:"",
            password:""
        }
    }

    handleSubmit = e =>{
        e.preventDefault()
        const url = "signin url"
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            //set token

        })
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <div className="container">
                <form className="col-md-9 mx-auto col-sm-12 form-control-lg" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Email">Email address</label>
                        <input name="email" type="email" className="form-control" id="Email" placeholder="Enter email" onChange={this.handleChange}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input name="password" type="password" className="form-control" id="Password" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login