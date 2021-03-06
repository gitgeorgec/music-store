import React, { Component } from 'react';
import Index from './index'
import About from './about'
import Search from './search'
import User from './user'
import ShoppingCart from "./shoppingChat"
import {Switch, Route, Redirect} from 'react-router-dom';

const IndexPage = () => (<Index />)
const AboutPage = () => (<About />)

class Main extends Component {
  render() {
  return (
      <Switch>
        <Route exact path="/" component={IndexPage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/search" render={(props)=>{
            return <Search {...this.props} {...props}/>
        }}/>
        <Route exact path="/user" render={(props)=>{
            return <User {...this.props} {...props}/>
        }}/>
        <Route exact path="/shoppingCart" render={(props)=>{
            return <ShoppingCart {...this.props} {...props}/>
        }}/>
        <Route exact path="/:other" render={() => (
          <Redirect to="/"/>
        )}/>
      </Switch>
      )
    };
  }
export default Main;