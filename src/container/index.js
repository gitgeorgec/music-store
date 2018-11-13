import React, { Component } from 'react';
import HeadphoneImg from '../img/malte-wingen-381988-unsplash.jpg'
import Jumbotron from '../components/jumbotoon'

class Main extends Component {
    
    backyellow ={
        "background":"#FDE74C"
    }
    backgreen ={
        "background":"#9BC53D"
    }
    largeText ={
        "fontSize": "4rem",
        "fontWeigth":"bold"
    }
    marginLarge={
        "margin":"3rem 3rem"
    }

    render() {
      return (

        <main>
            <Jumbotron {...this.props}/>
            <div style={this.marginLarge}>
                <div className="container" style={this.backyellow}>
                    <div className="row text-align-center">
                        <h1 className="col-12 text-center" style={this.largeText}>Music Store</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 order-md-2 mx-auto my-auto">
                            <img src={HeadphoneImg} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-6 col-sm-12 my-auto">
                            <p className="col-md-10 col-sm-12 lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reprehenderit quidem! Quos, illo! Nulla totam molestiae ea voluptatum, tempora quibusdam harum itaque culpa error inventore provident asperiores unde natus laborum?voluptatum, tempora quibusdam harum itaque culpa error inventore provident asperiores unde natus laborum?</p>
                            <div style={this.marginLarge}>
                                <a className="btn btn-lg btn-primary" href="/">GET START</a>
                            </div>
                            <div>
                            <p className="col-md-10 col-sm-12 lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reprehenderit quidem! Quos, illo! Nulla totam molestiae ea voluptatum, tempora quibusdam harum itaque culpa error</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      );
    }
  }
  
  export default Main;