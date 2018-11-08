import React from 'react';
import Index from './index'
import About from './about'
import Search from './search'
import AuthForm from '../components/authForm'
import {Switch, Route} from 'react-router-dom';

const IndexPage = () => (<Index/>)
const AboutPage = () => (<About />)
const SearchPage = ()=>(<Search />)

const Switcher = () => (
  <Switch>
    <Route exact path="/" component={IndexPage}/>
    <Route exact path="/about" component={AboutPage}/>
    <Route exact path="/search" component={SearchPage}/>
    <Route exact path="/register" render={props=>{
      return(
        <AuthForm heading="register" {...props}/>
      )
    }}/>
    <Route exact path="/login" render={props=>{
      return(
        <AuthForm heading="log in" signin {...props}/>
      )
    }}/>
  </Switch>
);

export default Switcher;