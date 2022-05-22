
import {
    FETCHING_ESTACIONES,
    FETCHING_ESTACIONES_SUCCESS,
    FETCHING_ESTACIONES_ERROR
} from '../actionTypes'

import {apiFetchEstaciones} from '../../api'

export const getEstaciones = () => {
    return {
        type: FETCHING_ESTACIONES
    }
}

export const getEstacionesSuccess = payload => {
    return {
        type: FETCHING_ESTACIONES_SUCCESS,
        payload: payload
    }
}

export const getEstacionesError = () => {
    return {
        type: FETCHING_ESTACIONES_ERROR
    }
}

export const fetchEstaciones = (latitude, longitude) => {
    return (dispatch) => {
        dispatch(getEstaciones())
        apiFetchEstaciones(latitude, longitude)
        .then(([response, json]) => {
            dispatch(getEstacionesSuccess(json))
        })
        .catch(error => {
            console.log(error)
            dispatch(getEstacionesError())
        })
    }
}