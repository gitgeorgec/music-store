import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Signup from '../components/signupForm'
import Login from '../components/loginForm'

const signupForm=()=>(<Signup/>)
const loginForm=()=>(<Login/>)

class Register extends Component{
    render(){
        return (
            <main>
                <Switch>
                    <Route exact path="/register" component={signupForm}/>
                    <Route exact path="/login" component={loginForm}/>
                </Switch>
            </main>
        )
    }
}

export default Register

