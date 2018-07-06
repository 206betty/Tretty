import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCards } from './redux/card';
import Login from "./component/Login";
import { Switch, Route } from "react-router-dom";
import Game from "./component/Game"
import Signup from "./component/Signup"


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
        <Switch>
          <Route path="/login" component={Login}/>        
          <Route path="/signup" component={Signup}/>
          <Route path="/" component={Game}/>
        </Switch>
      </div>
    );
  }
}

export default connect(state => state.game, { getCards })(App)
