import {
    FETCHING_RESERVAS,
    FETCHING_RESERVAS_SUCCESS,
    FETCHING_RESERVAS_ERROR
} from '../actionTypes'

import { apiFetchReservas } from '../../api'

export const getReservas = () => {
    return {
        type: FETCHING_RESERVAS
    }
}

export const getReservasSuccess = payload => {
    return {
        type: FETCHING_RESERVAS_SUCCESS,
        payload: payload
    }
}

export const getReservasError= () => {
    return {
        type: FETCHING_RESERVAS_ERROR
    }
}

export const fetchReservas = () => {

    return (dispatch) => {
        dispatch(getReservas())
        apiFetchReservas()
            .then(([response, json]) => {
                dispatch(getReservasSuccess(json))
            })
            .catch(error => {
                dispatch(getReservasError())
            })
    }
}