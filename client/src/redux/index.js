import { createStore, applyMiddleware } from "redux"
import axios from "axios"
import thunk from "redux-thunk"

export const getCard = () => {
    return dispatch => {
        axios.get("/card").then(response => {
            dispatch({
                type: "GET_CARD",
                card: response.data
            })
        })
    }
}
const reducer = (state = [], action) => {
    switch (action.type) {
        case "GET_CARD":
            return action.card
        default:
            return state
    }
}

export default createStore(
    reducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_(),
    applyMiddleware(thunk))