import React, { Component } from 'react';
import HeadphoneImg from '../img/malte-wingen-381988-unsplash.jpg'
import MusicCard from  '../components/musicCard'
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
            <Jumbotron />
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
            <div className="container" style={this.backgreen}>
                <div className="row">
                <div className="col-12">
                    <h1 className="text-center">隨機推薦單曲</h1>
                </div>
                    <div className="col-md-4 col-sm-12 lead">
                        <MusicCard title="hello" img={HeadphoneImg}/>
                    </div>
                    <div className="col-md-4 col-sm-12 lead">
                        <MusicCard title="HI" img={HeadphoneImg}/>
                    </div>
                    <div className="col-md-4 col-sm-12 lead">
                        <MusicCard title="Music" img={HeadphoneImg}/>
                    </div>

                </div>
            </div>
        </main>
      );
    }
  }
  
  export default Main;