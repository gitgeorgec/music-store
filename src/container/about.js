import React, { Component } from 'react';
import SpotifyLogo from '../img/Spotify_Logo_RGB_Green.png'
import StripeLogo from '../img/Stripe logo - blue.png'


class About extends Component{
    render(){
        return (     
            <div>
                <div className="row mx-auto">
                    <div role="main" className="col-md-12 px-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">About</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                        </div>
                    </div>
                    <div className="background_black p-2" style={{minHeight:"70vh"}}>
                        <div className="col-12">
                            <div className="row m-1 pt-2 pb-2 background_green border rounded p-2">
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0" style={{background:"#fff"}}>
                                    <img className="card-img shadow" src={SpotifyLogo} alt=""/>
                                </div>
                                <div className="col-lg-10 col-md-9 col-sm-8 col-6" style={{fontWeight:"bold"}}>
                                This product uses the Spotify API but is not endorsed by Spotify.
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row m-1 pt-2 pb-2 background_green border rounded p-2">
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-0" style={{background:"#fff"}}>
                                    <img className="card-img shadow" src={StripeLogo} alt=""/>
                                </div>
                                <div className="col-lg-10 col-md-9 col-sm-8 col-6" style={{fontWeight:"bold"}}>
                                This product uses the Stripe API.
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
      
            </div>
        )
    }
}

export default About