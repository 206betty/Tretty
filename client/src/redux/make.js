import axios from 'axios';

const initialState = {
    user: {
        name: "",
        email: ""
    },
    loggedIn: false
}

export const make = user => {
    return dispatch =>{
        axios.post('/make', user)
        .then(response =>{
            console.log(response.data)
            localStorage.token = response.data.token
            dispatch({
                type: 'MAKE',
                user: response.data.user
            })
        })
    }
}

const makeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MAKE":
            return {
                ...state,
                cards: action.card
            }
        case 'MAKE':
         return {
             ...state,
            loggedIn: true,
            user: action.user 
         }
        default:
            return state
    }
}

export default makeReducer;