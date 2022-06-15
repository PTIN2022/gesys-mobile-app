
import {
    FETCHING_TRANSACTION,
    FETCHING_TRANSACTION_SUCCESS,
    FETCHING_TRANSACTION_ERROR
} from '../actionTypes'

import { apiFetchTransacciones } from '../../api'

export const getTransacciones = () => {
    return {
        type: FETCHING_TRANSACTION
    }
}

export const getTransaccionesSuccess = payload => {
    return {
        type: FETCHING_TRANSACTION_SUCCESS,
        payload: payload
    }
}

export const getTransaccionesError = () => {
    return {
        type: FETCHING_TRANSACTION_ERROR
    }
}

export const fetchTransacciones = (latitude, longitude) => {
    return (dispatch) => {
        dispatch(getTransacciones())
        apiFetchTransacciones(latitude, longitude)
        .then(([response, json]) => {
            dispatch(getTransaccionesSuccess(json))
        })
        .catch(error => {
            console.log(error)
            dispatch(getTransaccionesError())
        })
    }
}