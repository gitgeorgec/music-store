import React from 'react';
import Main from './main'
import About from './about'
import Search from './search'
import {Switch, Route} from 'react-router-dom';

const HomePage = () => (
  <Main/>
);
const AboutPage = () => (
  <About />
)
const SearchPage = ()=>(
  <Search />
)

const Switcher = () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/about" component={AboutPage}/>
    <Route exact path="/Search" component={SearchPage}/>
  </Switch>
);

export default Switcher;