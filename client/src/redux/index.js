import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import authReducer from "./auth"
import cardReducer from "./card"

const reducers = combineReducers({
    auth: authReducer,
    game: cardReducer
})
export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)