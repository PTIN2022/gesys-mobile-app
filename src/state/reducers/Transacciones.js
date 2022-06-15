import {
    FETCHING_TRANSACTIONS,
    FETCHING_TRANSACTIONS_SUCCESS,
    FETCHING_TRANSACTIONS_ERROR,
} from '../actionTypes'

const initial_state = {
    transaction: {},
    fetchingTransaction: false,
    successTransaction: false,
    errorTransaction: false
}

export default (state = initial_state, action) => {
    switch(action.type){
        case FETCHING_TRANSACTIONS: 
            return {
                ...state,
                transactions: {},
                successTransaction: false,
                errorTransaction: false,
                fetchingTransaction: true
            }
        case FETCHING_TRANSACTIONS_SUCCESS: 
            return {
                ...state,
                transactions: action.payload,
                successTransaction: true,
                errorTransaction: false,
                fetchingTransaction: false
            }
        case FETCHING_TRANSACTIONS_ERROR:
            return {
                ...state,
                transactions: {},
                successTransaction: false,
                fetchingTransaction: false,
                errorTransaction: true
            }
        default :
            return state
    }
}
