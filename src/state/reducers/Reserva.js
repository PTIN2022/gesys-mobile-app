import {
    FETCHING_RESERVA,
    FETCHING_RESERVA_SUCCESS,
    FETCHING_RESERVA_ERROR,
    POST_RESERVA,
    POST_RESERVA_SUCCESS,
    POST_RESERVA_ERROR
} from '../actionTypes'

const initial_state = {
    reserva: {},
    fetchingReserva: false,
    successReserva: false,
    errorReserva: false
}

export default getReserva = (state = initial_state, action) => {
    switch(action.type){
        case FETCHING_RESERVA: 
            return {
                ...state,
                reserva: {},
                successReserva: false,
                errorReserva: false,
                fetchingReserva: true
            }
        case FETCHING_RESERVA_SUCCESS: 
            return {
                ...state,
                reserva: action.payload,
                successReserva: true,
                errorReserva: false,
                fetchingReserva: false
            }
        case FETCHING_RESERVA_ERROR:
            return {
                ...state,
                reserva: {},
                successReserva: false,
                fetchingReserva: false,
                errorReserva: true
            }
        default :
            return state
    }
}
