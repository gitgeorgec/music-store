import React, { Component } from 'react';
import Jumbotron from '../components/jumbotoon'
import {Link } from 'react-router-dom';

class Main extends Component {
    
    backyellow ={
        "background":"#FDE74C"
    }
    backgreen ={
        "background":"#9BC53D"
    }
    largeText ={
        "fontSize": "4rem",
        "fontWeigth":"bold",
        "color":"white"
    }
    marginLarge={
        "margin":"3rem 3rem"
    }

    render() {
      return (
        <main className="background_yellow" style={{minHeight:"100vh"}}>
            <Jumbotron {...this.props}/>
            <div>
                <div className="row mx-auto">
                    <div className="col-md-3 col-sm-6 col-xs-12 mb-3" style={{minWidth:"400px"}}>
                        <Link to="/search">
                            <div className="card background_search shadow" style={{height:"33vh"}}>
                                    <div className="card-body">
                                        <h2 className="card-title text-center" style={this.largeText}>Search</h2>
                                    </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 mb-3" style={{minWidth:"400px"}}>
                        <Link to="/shoppingCart">
                            <div className="card background_shopping shadow" style={{height:"33vh"}}>
                                <div className="card-body">
                                <h2 className="card-title text-center" style={this.largeText}>shoppign cart</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 mb-3" style={{minWidth:"400px"}}>
                        <Link to="/about">
                            <div className="card background_about shadow" style={{height:"33vh"}}>
                                <div className="card-body">
                                <h2 className="card-title text-center" style={this.largeText}>about</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 mb-3" style={{minWidth:"400px"}}>
                        <Link to="/user">
                            <div className="card background_user shadow" style={{height:"33vh"}}>
                                <div className="card-body">
                                <h2 className="card-title text-center" style={this.largeText}>User</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12"></div>
                    <div className="col-md-3 col-sm-6 col-xs-12"></div>
                    <div className="col-md-3 col-sm-6 col-xs-12"></div>
                </div>
            </div>
        </main>
      );
    }
  }
  
  export default Main;