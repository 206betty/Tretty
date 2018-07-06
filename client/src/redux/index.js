import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import userReducer from "./signup"
import cardReducer from "./card"

const reducers = combineReducers({
    auth: userReducer,
    game: cardReducer
})

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)