import { createStore, applyMiddleware } from "redux"
import axios from "axios"
import thunk from "redux-thunk"

export const getCard = () => {
    return dispatch => {
        axios.get('/card').then(response => {
            dispatch({
                type: "GET_CARD",
                card: response.data
            })
        })
    }
}

export const addCard = newCard => {
    return dispatch => {
        axios.post('./card', newCard).then(response => {
            dispatch(getCard())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteCard = id => {
    return dispatch => {
        axios.delete(`/card/${id}`).then(response => {
            dispatch(getCard())
        }).catch(err => {
            console.log(err)
        })
    }
} 

export const editCard = (id, newCard) => {
    return dispatch => {
        axios.put(`card/${id}`, newCard).then(response => {
            dispatch(getCard())
        }).catch(err => {
            console.log(err)
        })
    }
}

const initialState = {
    cards: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CARD":
            return {
                ...state,
                cards: action.card
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