import {
    FETCHING_ESTACIONES,
    FETCHING_ESTACIONES_SUCCESS,
    FETCHING_ESTACIONES_ERROR
} from '../actionTypes'

const initial_state = {
    estaciones: [
        {
            id: 1,
            estacion: "hola",
            latitude: 41.22353710912193,
            longitude: 1.7204303853213787,
            ocupation_max: 10,
            ocupation_now: 5
        },
        {
            id: 2,
            estacion: "hola",
            latitud: 41.22301989408491,
            longitud: 1.7290154658257961,
            ocupation_max: 20,
            ocupation_now: 18
        },
        {
            id: 3,
            estacion: "hola",
            latitud: 41.21592322008729,
            longitud: 1.7236034385859966,
            ocupation_max: 25,
            ocupation_now: 1
        },
    ],
    fetchingEstaciones: false,
    errorEstaciones: false
}

export default Estaciones = (state = initial_state, action) => {
    switch (action.type) {
        case FETCHING_ESTACIONES:
            return {
                ...state,
                estaciones: [],
                successEstaciones: false,
                errorEstaciones: false,
                fetchingEstaciones: true
            }
        case FETCHING_ESTACIONES_SUCCESS:
            return {
                ...state,
                estaciones: action.payload,
                successEstaciones: true,
                fetchingEstaciones: false,
                errorEstaciones: false,
            }
        case FETCHING_ESTACIONES_ERROR:
            return {
                ...state,
                estaciones: [],
                successEstaciones: false,
                fetchingEstaciones: false,
                errorEstaciones: true
            }
        default:
            return state
    }
}