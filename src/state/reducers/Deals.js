import {
    FETCHING_OFERTA,
    FETCHING_OFERTA_ERROR,
    FETCHING_OFERTA_SUCCESS,
} from '../actionTypes/Deals'


const initial_state = {
    ofertes: [],
    fetchingTickets: false,
    errorTickets: false
}

export default Deal = (state = initial_state, action) => {
    switch (action.type) {
        case FETCHING_OFERTA:
            return {
                ...state,
                ofertes: [],
                successOfertes: false,
                errorOfertes: false,
                fetchingOfertes: true
            }
        case FETCHING_OFERTA_SUCCESS:
            return {
                ...state,
                ofertes: action.payload,
                successOfertes: true,
                fetchingOfertes: false,
                errorOfertes: false,
            }
        case FETCHING_OFERTA_ERROR:
            return {
                ...state,
                ofertes: [],
                successOfertes: false,
                fetchingOfertes: false,
                errorOfertes: true
            }
        default:
            return state
    }
}