import React, { Component } from 'react';
import Draw from "./component/Draw"
import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
      <div> 
      <h1>LOTERIA</h1>
      <Draw />
      </div>
    );
  }
}

export default connect(state => state)(App);
