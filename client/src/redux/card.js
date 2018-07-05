import axios from "axios"


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

const cardReducer = (state = initialState, action) => {
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

export default cardReducer;