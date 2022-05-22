import {
  FETCHING_RESERVAS,
  FETCHING_RESERVAS_SUCCESS,
  FETCHING_RESERVAS_ERROR,
  POST_RESERVA_ERROR,
  POST_RESERVA,
  POST_RESERVA_SUCCESS
} from '../actionTypes'

const initial_state = {
    reservas: [],
    fetchingReservas: false,
    errorReservas: false
}

export default Reservas = (state = initial_state, action) => {
    switch(action.type){
        case FETCHING_RESERVAS: 
            return {
                ...state,
                reservas: [],
                successReservas: false,
                errorReservas: false,
                fetchingReservas: true
            }
        case FETCHING_RESERVAS_SUCCESS: 
            return {
                ...state,
                reservas: action.payload,
                successReservas: true,
                fetchingReservas: false,
                errorReservas: false,
            }
        case FETCHING_RESERVAS_ERROR:
            return {
                ...state,
                reservas: [],
                successReservas: false,
                fetchingReservas: false,
                errorReservas: true
            }
        case POST_RESERVA_SUCCESS:
            return {
                ...state,
                reservas: action.payload,
                successPostResvera: true,
                errorPostReserva: false,
            }
        case POST_RESERVA_ERROR:
            return {
                ...state,
                reservas: state.reservas,
                successPostResvera: false,
                errorPostReserva: true,
            }
        default :
            return state
    }
}