import React, { Component } from 'react';
import Jumbotron from '../components/jumbotron'
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
        "fontWeigth":"bolder",
        "color":"white",
        "textShadow":"1px 1px 0 black"
    }
    marginLarge={
        "margin":"3rem 3rem"
    }

    render() {
      return (
        <main className="background_yellow" style={{minHeight:"100vh"}}>
            <Jumbotron {...this.props}/>
            <div className="row mx-auto">
                <div className="col-md-3 col-sm-6 col-xs-12 mb-3" style={{minWidth:"360px"}}>
                    <Link to="/search">
                        <div className="card background_search shadow" style={{height:"33vh"}}>
                            <div className="card-body"style={this.largeText}>
                                <p className="card-title text-center">search <br/><i className="fas fa-search"style={{color:"#C3423F"}}></i></p>
                                
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 mb-3 " style={{minWidth:"360px"}}>
                    <Link to="/shoppingCart">
                        <div className="card background_shopping shadow" style={{height:"33vh"}}>
                            <div className="card-body"style={this.largeText}>
                                <p className="card-title text-center">Shopping Cart<br/><i className="fas fa-shopping-cart" style={{color:"#9BC53D"}}></i></p>
                                <p className="text-center" ></p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 mb-3" style={{minWidth:"360px"}}>
                    <Link to="/user">
                        <div className="card background_user shadow" style={{height:"33vh"}}>
                            <div className="card-body"style={this.largeText}>
                                <p className="card-title text-center">User<br/><i className="fas fa-user" style={{color:"#5BC0EB"}}></i></p>
                                <p className="text-center" ></p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 mb-3" style={{minWidth:"360px"}}>
                    <Link to="/about">
                        <div className="card background_about shadow" style={{height:"33vh"}}>
                            <div className="card-body"style={this.largeText}>
                                    <p className="card-title text-center">About<br/><i className="fas fa-book" style={{color:"#C3423F"}}></i></p>
                                    <p className="text-center" ></p>
                                </div>
                            </div>
                    </Link>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12"></div>
                <div className="col-md-3 col-sm-6 col-xs-12"></div>
                <div className="col-md-3 col-sm-6 col-xs-12"></div>
            </div>
        </main>
      );
    }
  }
  
  export default Main;