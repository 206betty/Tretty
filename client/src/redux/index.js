import { createStore, applyMiddleware } from "redux"
import axios from "axios"
import thunk from "redux-thunk"

export const shuffle = (cards, boardCards) => {
    let randomIndex = Math.floor(Math.random() * (53 - 0) + 0);
    let card = cards[randomIndex]
    let match = false;
    
    if (boardCards.find(currentCard => currentCard.number === card.number)) {
        match = card.number;
    }
    
    return {
        type: "SHUFFLE",
        imgUrl: card.imgUrl,
        name: card.name,
        number: card.number,
        match
    }

}

export const getCards = () => {
    return dispatch => {
        axios.get('/cards').then(response => {
            const cards = response.data;
            const boardCards = getRandom(cards, 16);
            dispatch({
                type: "GET_CARDS",
                cards,
                boardCards
            })
            dispatch(shuffle(cards, boardCards));
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

// export const addCard = newCard => {
//     return dispatch => {
//         axios.post('./card', newCard).then(response => {
//             dispatch(getCard())
//         }).catch(err => {
//             console.log(err)
//         })
//     }
// }

// export const deleteCard = id => {
//     return dispatch => {
//         axios.delete(`/card/${id}`).then(response => {
//             dispatch(getCard())
//         }).catch(err => {
//             console.log(err)
//         })
//     }
// } 

// export const editCard = (id, newCard) => {
//     return dispatch => {
//         axios.put(`card/${id}`, newCard).then(response => {
//             dispatch(getCard())
//         }).catch(err => {
//             console.log(err)
//         })
//     }
// }

const initialState = {
    cards: [],
    boardCards: [],
    matches: [],
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
                boardCards: action.boardCards
            }
        case "SHUFFLE":

            let matches = [ ...state.matches ];

            if (action.match && !matches.includes(action.match)) {
                matches.push(action.match);
            }

            return {
                ...state,
                matches,
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