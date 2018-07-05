import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import cardReducer from './card'
import userReducer from './SignUp'

const reducer = combineReducers({
    cards: cardReducer,
    user: userReducer
    
})

export default createStore(
    reducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_(),
    applyMiddleware(thunk)
)