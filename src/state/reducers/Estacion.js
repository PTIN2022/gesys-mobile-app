import {
    FETCHING_ESTACION,
    FETCHING_ESTACION_SUCCESS,
    FETCHING_ESTACION_ERROR
} from '../actionTypes'

const initial_state = {
    estacion: {},
    fetchingEstacion: false,
    successEstacion: false,
    errorEstacion: false
}

export default getEstacion = (state = initial_state, action) => {
    switch(action.type){
        case FETCHING_ESTACION: 
            return {
                ...state,
                estacion: {},
                fetchingEstacion: true
            }
        case FETCHING_ESTACION_SUCCESS: 
            return {
                ...state,
                estacion: action.payload,
                successEstacion: true,
                fetchingEstacion: false
            }
        case FETCHING_ESTACION_ERROR:
            return {
                ...state,
                fetchingEstacion: false,
                errorEstacion: true
            }
        default :
            return state
    }
}
