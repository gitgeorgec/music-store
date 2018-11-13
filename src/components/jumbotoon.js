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
                <p className="lead" style={this.white}>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"/>
                <p style={this.white}>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <button className="btn btn-primary btn-lg">Learn more</button>
            </div>
        )
    }
}

export default Jumbotron