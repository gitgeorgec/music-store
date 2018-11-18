import React, { Component } from 'react';
import AuthForm from '../components/authForm'

class Landing extends Component{
    render(){
        return (
            <div >
                <div className="row">
                <div className="col-12">
                    <AuthForm />
                </div>
                </div>
                <div className="text-center row">
                    <form style={{maxWidth:"400px"}}>
                    <img className="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <div className="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                    </form>

                </div>
            </div>
        )
    }
}

export default Landing