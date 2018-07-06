import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import userReducer from "./signup"
import cardReducer from "./card"
import makeReducer from "./make"

const reducers = combineReducers({
    auth: userReducer,
    game: cardReducer,
    make: makeReducer
})

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)