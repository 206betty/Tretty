import { createStore, applyMiddleware } from "redux"
import axios from "axios"
import thunk from "redux-thunk"

export const shuffle = (cards, boardCards, oppBoardCards) => {
    let randomIndex = Math.floor(Math.random() * (53 - 0) + 0);
    let card = cards[randomIndex]
    let match = false;
    let oppMatch = false;
    
    if (boardCards.find(currentCard => currentCard.number === card.number)) {
        match = card.number;
    }
    if (oppBoardCards.find(currentCard => currentCard.number === card.number)) {
        oppMatch = card.number;
    }
    
    return {
        type: "SHUFFLE",
        imgUrl: card.imgUrl,
        name: card.name,
        number: card.number,
        match,
        oppMatch
    }

}

export const getCards = () => {
    return dispatch => {
        axios.get('/cards').then(response => {
            const cards = response.data;
            const boardCards = getRandom(cards, 16);
            const oppBoardCards = getRandom(cards, 16);
            dispatch({
                type: "GET_CARDS",
                cards,
                boardCards,
                oppBoardCards
            })
            dispatch(shuffle(cards, boardCards, oppBoardCards));
        })
    }
}

function getRandom(arr, n) {
    const arrLength = arr.length;
    const result = [];
    const taken = [];

    while (result.length !== n && result.length !== arr.length) {
        const random = Math.floor(Math.random() * arrLength);

        if (!taken.includes(random)) {
            result.push(arr[random]);
            taken.push(random);
        }
    }
    return result;
}

const initialState = {
    cards: [],
    boardCards: [],
    oppBoardCards: [],
    matches: [],
    oppMatches: [],
    current: {
        imgUrl: '',
        name: '',
        number: ''
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CARDS":
            return {
                ...state,
                cards: action.cards,
                boardCards: action.boardCards,
                oppBoardCards: action.oppBoardCards
            }
        case "SHUFFLE":

            let matches = [ ...state.matches ];

            if (action.match && !matches.includes(action.match)) {
                matches.push(action.match);
            }
            let oppMatches = [ ...state.oppMatches ];

            if (action.oppMatch && !oppMatches.includes(action.oppMatch)) {
                oppMatches.push(action.oppMatch);
            }

            return {
                ...state,
                matches,
                oppMatches,
                current: {
                    imgUrl: action.imgUrl,
                    name: action.name,
                    number: action.number
                }
            }
        default:
            return state
    }
}

export default createStore(
    reducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_(),
    applyMiddleware(thunk)
)