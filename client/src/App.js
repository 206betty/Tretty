import React, { Component } from 'react';
import Draw from "./component/Draw"
import { connect } from 'react-redux'
import Board from "./component/Board"
import SignUp from './component/SignUp';
import { getCards } from './redux/card'

class App extends Component {
  componentDidMount() {
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
        <SignUp />
      </div>
    );
  }
}

export default connect(state => state.game, { getCards })(App)
