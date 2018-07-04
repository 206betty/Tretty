import React, { Component } from 'react';
import Draw from "./component/Draw"
import { connect } from 'react-redux'
import Board from "./component/Board"
import { getCards } from './redux'

class App extends Component {
  componentDidMount(){
    this.props.getCards()
  }
  render() {
    const { cards } = this.props;

    if (!cards.length) {
      return <p>Loading...</p>
    }

    return (
      <div> 
        <h1>LOTERIA</h1>
        <Draw />
        <Board />
      </div>
    );
  }
}

export default connect(state => state, { getCards })(App);
