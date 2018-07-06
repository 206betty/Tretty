import React from 'react'
import { connect } from 'react-redux'
import { shuffle } from '../redux/card';

class Draw extends React.Component{
    handleClick = (event) => {
        const { cards, boardCards, oppBoardCards } = this.props.game;
        const { shuffle } = this.props
        shuffle(cards, boardCards, oppBoardCards);
    }
    render(){
        const { imgUrl } = this.props.game.current;
        return(
            <div>
                <div>
                    <img className="drawImg" src={imgUrl} alt='card'/>
                </div>
                <div className="btnHome">
                    <p className="hola">Hola {this.props.auth.user.name || "User"}!</p>
                    <button onClick={this.handleClick} className="drawBtn">Draw Card</button>
                    <p className="oppName">Your Opponent (Advisario)</p>
                </div>
            </div>
        )
    }
}
  
export default connect(state => state, {shuffle})(Draw)