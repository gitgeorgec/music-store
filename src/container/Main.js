import React, { Component } from 'react';
import Index from './index'
import About from './about'
import Search from './search'
import User from './user'
import AuthForm from '../components/authForm'
import {Switch, Route} from 'react-router-dom';

const IndexPage = () => (<Index />)
const AboutPage = () => (<About />)

class Main extends Component {
  
  SearchPage = ()=>(<Search {...this.props}/>)
  render() {
  return (
      <Switch>
        <Route exact path="/" component={IndexPage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/search" render={(props)=>{
            return <Search {...this.props} {...props}/>
        }}/>
        <Route exact path="/user" render={(props)=>{
            return <User {...this.props} {...props}/>
        }}/>
        <Route exact path="/register" render={(props)=>{
          return(
            <AuthForm heading="register" {...this.props} {...props}/>
          )
        }}/>
        <Route exact path="/login" render={(props)=>{
          return(
            <AuthForm heading="log in" sign {...this.props} {...props}/>
          )
        }}/>
      </Switch>
      )
    };
  }
export default Main;