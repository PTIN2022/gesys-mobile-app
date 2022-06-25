import {
    FETCHING_HISTORIAL,
    FETCHING_HISTORIAL_SUCCESS,
    FETCHING_HISTORIAL_ERROR,
} from '../actionTypes'

const initial_state = {
    historial: {},
    fetchingTransaction: false,
    successTransaction: false,
    errorTransaction: false
}

export default (state = initial_state, action) => {
    switch(action.type){
        case FETCHING_HISTORIAL: 
            return {
                ...state,
                historial: {},
                successTransaction: false,
                errorTransaction: false,
                fetchingTransaction: true
            }
        case FETCHING_HISTORIAL_SUCCESS: 
            return {
                ...state,
                historial: action.payload,
                successTransaction: true,
                errorTransaction: false,
                fetchingTransaction: false
            }
        case FETCHING_HISTORIAL_ERROR:
            return {
                ...state,
                historial: {},
                successTransaction: false,
                fetchingTransaction: false,
                errorTransaction: true
            }
        default :
            return state
    }
}
