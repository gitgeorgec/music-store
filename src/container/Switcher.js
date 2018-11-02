import React from 'react';
import Jumbotron from './jumbotoon'
import Main from './main'
import {Switch, Route} from 'react-router-dom';

const Homepage = () => (
  <Jumbotron/>
);
const About = () => (
  <Main/>
);

const Switcher = () => (
  <Switch>
    <Route exact path="/" component={Homepage}/>
    <Route exact path="/about" component={About}/>
  </Switch>
);

export default Switcher;