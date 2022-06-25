
import {
    FETCHING_HISTORIAL,
    FETCHING_HISTORIAL_SUCCESS,
    FETCHING_HISTORIAL_ERROR
} from '../actionTypes'

import { apiFetchHistorial } from '../../api'

export const getTransacciones = () => {
    return {
        type: FETCHING_HISTORIAL
    }
}

export const getTransaccionesSuccess = payload => {
    return {
        type: FETCHING_HISTORIAL_SUCCESS,
        payload: payload
    }
}

export const getTransaccionesError = () => {
    return {
        type: FETCHING_HISTORIAL_ERROR
    }
}

export const fetchHistorial = (token) => {
    return (dispatch) => {
        dispatch(getTransacciones())
        apiFetchHistorial(token)
        .then(([response, json]) => {
            console.log(json)
            dispatch(getTransaccionesSuccess(json))
        })
        .catch(error => {
            console.log(error)
            dispatch(getTransaccionesError())
        })
    }
}
