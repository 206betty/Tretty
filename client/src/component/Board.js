import React from 'react'
import { connect } from 'react-redux'

class Board extends React.Component {
    render () {
        const { matches, oppMatches } = this.props;
        const boardClassName = matches.length === 16 ? 'board won' : 'board';
        const oppBoardClassName = oppMatches.length === 16 ? 'board won' : 'board';
        return (
            <div className="boards">
                <div className={boardClassName}>
                    {this.props.boardCards.map(card => {
                        const cardClassName = matches.includes(card.number) ? 'card matched' : 'card'; 
                        return (
                            <div key={card._id} className={cardClassName}>
                                <span>
                                    <img className="boardImg" src={card.imgUrl} alt={card.name} />
                                </span>
                            </div>
                        )
                    })}
                </div>
                <div className={oppBoardClassName}>
                    {this.props.oppBoardCards.map(card => {
                        const cardClassName = oppMatches.includes(card.number) ? 'card matched' : 'card'; 
                        return (
                            <div key={card._id} className={cardClassName}>
                                <span>
                                    <img className="boardImg" src={card.imgUrl} alt={card.name} />
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default connect(state => state)(Board)