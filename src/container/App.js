import React, { Component } from 'react';
import Switcher from './Switcher';
import Header from './header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switcher/>
      </div>
    );
  }
}

export default App;
