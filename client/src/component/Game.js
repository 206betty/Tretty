import React from "react"
import Draw from "./Draw"
import Board from "./Board"

const Game = (props) => {
    return(
        <div className="game">
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
    )
}

export default Game