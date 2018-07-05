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
        <div className="mobileHeader">
          <div className="header">
            <h1 className="title">~  LOTERIA  ~</h1>
          </div>
          <div className="drawcard">
            <Draw />
          </div>
        </div>
        <div>
          <Board />
        </div>
      </div>
    );
  }
}

export default connect(state => state, { getCards })(App);
