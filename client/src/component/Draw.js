import React from 'react'
import { connect } from 'react-redux'
import { shuffle } from '../redux';

class Draw extends React.Component{
    handleClick = (event) => {
        const { shuffle, cards, boardCards } = this.props;
        shuffle(cards, boardCards);
    }
    render(){
        const { imgUrl } = this.props.current;
        return(
            <div>
                <img className="drawImg" src={imgUrl} alt='card'/> <br/>
                <button onClick={this.handleClick} className="drawBtn">Draw Card</button>
            </div>
        )
    }
}
  
export default connect(state => state, {shuffle})(Draw)