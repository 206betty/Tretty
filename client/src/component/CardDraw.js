import React from 'react'
import { connect } from 'react-redux'

class Card extends React.Component{
    shuffle = (arr) => {
        let currentIndex;
        while (this.state.imgUrl.length) {
            currentIndex = Math.floor(Math.random() * arr.length);
            if (this.props.number === currentIndex) {
                return(
                <div>
                <img src={this.props.imgUrl} alt="single-card"/>
                </div>
                )
            } 
        }
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {/* <p>{this.props.name}</p>
                <p>{this.props.number}</p> */}
                <img className="image" src={this.props.imgUrl} alt='card'/>
                <button onClick={this.shuffle} className="drawBtn">Draw Card</button>
            </div>
        )
    }
}

export default connect(state => state, {} )(Card)