import React, { Component } from 'react';
import AuthForm from '../components/authForm'
import HeadphoneImg from '../img/malte-wingen-381988-unsplash.jpg'
import { getToken } from "../api/api"

class Landing extends Component{
    componentDidMount(){
        getToken()
    }
    render(){
        return (
            <div className="landing_back" style={{minHeight:"100vh"}}>
                <div className="row mx-auto">
                    <div className="col-lg-4 col-md-6 col-10 mx-auto background_yellow p-3 rounded shadow-lg" style={{marginTop:"10vh"}}>
                    <h1 className="text-center">Music store</h1>
                        <img className="mb-4 d-block mx-auto" src={HeadphoneImg} alt="" width="100" height="100"/>
                            <AuthForm {...this.state} {...this.props}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing