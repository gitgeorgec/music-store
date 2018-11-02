import React, { Component } from 'react';
import Switcher from './container/Switcher';
import Header from './container/header'

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
