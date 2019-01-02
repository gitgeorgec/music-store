import React, { Component } from 'react';

class Jumbotron extends Component{
    white= {
        "color":"white",
        "fontWeight":"800",
        "textShadow":"1px 1px 0 black"
    }

    render(){
        return (
            <div className="jumbotron jumbo_back">
                <h1 className="display-4" style={this.white}>Music Store</h1>
                <p className="lead" style={this.white}>Enjoy your music.</p>
                <hr className="my-4"/>
                <p style={this.white}>This is a practice project. There is no real product in this project</p>
            </div>
        )
    }
}

export default Jumbotron