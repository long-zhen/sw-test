import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h1>What is my stress level</h1>;
  }
}

export default hot(module)(App);
