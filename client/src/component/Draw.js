import React from 'react'
import { connect } from 'react-redux'
import { shuffle } from '../redux';

class Draw extends React.Component{
    handleClick = (event) => {
        const { shuffle, cards, boardCards, oppBoardCards } = this.props;
        shuffle(cards, boardCards, oppBoardCards);
    }
    render(){
        const { imgUrl } = this.props.current;
        return(
            <div>
                <div>
                    <img className="drawImg" src={imgUrl} alt='card'/>
                </div>
                <div className="btnHome">
                    <p className="hola">placeHolder</p>
                    <button onClick={this.handleClick} className="drawBtn">Draw Card</button>
                    <p className="oppName">Your Opponent (Advisario)</p>
                </div>
            </div>
        )
    }
}
  
export default connect(state => state, {shuffle})(Draw)