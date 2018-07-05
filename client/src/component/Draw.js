import React from 'react'
import { getCard } from '../redux/card';
import { connect } from 'react-redux'
import Card from './CardDraw'

class Draw extends React.Component{
    componentDidMount(){
        this.props.getCard()
    }
    // filter cards.filter(card => card.number === {this.randomNumber}).map()  random number generator match card number
    render(){
        let randomNum = Math.floor(Math.random() * (54 - 2) +2)
        return(
            <div>
                {this.props.cards.filter(one => one.number === randomNum).map(card => 
                <Card  key={card._id} id={card._id}
                name={card.name} number={card.number} 
                imgUrl={card.imgUrl} />)}
            </div>
        )
    }
}
  
export default connect(state => state.cards, { getCard })(Draw)