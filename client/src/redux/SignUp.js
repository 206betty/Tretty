import axios from 'axios';

const initialState = {
    user: {
        name: "",
        email: ""
    },
    loggedIn: false
}

export const getUser = () => {
    return dispatch => {
        axios.get('/user').then(response => {
            dispatch({
                type: "GET_USER",
                user: response.data
            })
        })
    }
}
 export const login = user => {
        return dispatch =>{
            axios.post('/user/login', user)
            .then(response =>{
                console.log(response.data)
                localStorage.token = response.data.token
                dispatch({
                    type: 'LOGIN',
                    user: response.data.user
                })
            })
        }
 }

 export const logout = () => {
     return dispatch =>{
        localStorage.token = null
        dispatch({
            type: 'LOGOUT'
        })
     }
 }


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER":
            return {
                ...state,
                cards: action.card
            }
        case 'LOGIN':
         return {
             ...state,
            loggedIn: true,
            user: action.user 
         }
         case 'LOGOUT':
         return {
             loggedIn: false,
             user: {}
         }
        default:
            return state
    }
}

export default userReducer;