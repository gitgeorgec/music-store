import React from 'react';
import Jumbotron from './jumbotoon'
import Main from './main'
import About from './about'
import {Switch, Route} from 'react-router-dom';

const Homepage = () => (
  <Jumbotron/>
);
const Aboutpage = () => (
  <About />
)
const Landing = ()=>(
  <Main />
)

const Switcher = () => (
  <Switch>
    <Route exact path="/" component={Homepage}/>
    <Route exact path="/about" component={Aboutpage}/>
    <Route exact path="/landing" component={Landing}/>
  </Switch>
);

export default Switcher;