import React from 'react';
import Index from './index'
import About from './about'
import Search from './search'
import Register from './register';
import {Switch, Route} from 'react-router-dom';

const IndexPage = () => (<Index/>)
const AboutPage = () => (<About />)
const SearchPage = ()=>(<Search />)
const RegisterPage = ()=>(<Register />)

const Switcher = () => (
  <Switch>
    <Route exact path="/" component={IndexPage}/>
    <Route exact path="/about" component={AboutPage}/>
    <Route exact path="/search" component={SearchPage}/>
    <Route exact path="/register" component={RegisterPage}/>
    <Route exact path="/login" component={RegisterPage}/>
  </Switch>
);

export default Switcher;