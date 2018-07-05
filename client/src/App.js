import React, { Component } from 'react';
import Draw from "./component/Draw";
import { connect } from 'react-redux';
import SignUp from './component/SignUp';


class App extends Component {
  render() {
    return (
      <div> 
      <h1>LOTERIA</h1>
      <Draw />
      <SignUp/>
      </div>
    );
  }
}

export default connect(state => state)(App);
