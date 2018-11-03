import React, { Component } from 'react';
import SpotifyLogo from '../img/Spotify_Logo_RGB_Green.png'


class About extends Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="my-auto">
                        <p className="mx-auto text-center"> This product uses the Spotify API but is not endorsed or certified by Spotify.</p>
                        <div className="col-sm-6 mx-auto my-auto">
                            <img src={SpotifyLogo} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About