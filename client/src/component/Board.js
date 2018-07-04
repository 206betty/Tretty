import React from 'react'
import { connect } from 'react-redux'

class Board extends React.Component {
    render () {
        const { matches } = this.props;
        const boardClassName = matches.length === 16 ? 'board won' : 'board';
        return (
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
        );
    }
}

export default connect(state => state)(Board)