
import {
    FETCHING_NOTIFICACIONES,
    FETCHING_NOTIFICACIONES_SUCCESS,
    FETCHING_NOTIFICACIONES_ERROR
} from '../actionTypes'

import {apiFetchNotificaciones} from '../../api'

export const getNotificaciones = () => {
    return {
        type: FETCHING_NOTIFICACIONES
    }
}

export const getNotificacionesSuccess = payload => {
    return {
        type: FETCHING_NOTIFICACIONES_SUCCESS,
        payload: payload
    }
}

export const getNotificacionesError = () => {
    return {
        type: FETCHING_NOTIFICACIONES_ERROR
    }
}

export const fetchNotificaciones = (latitude, longitude, ratio) => {
    return (dispatch) => {
        dispatch(getNotificaciones())
        apiFetchNotificaciones(latitude, longitude, ratio)
        .then(([response, json]) => {
            console.log(json)
            dispatch(getNotificacionesSuccess(json))
        })
        .catch(error => {
            console.log(error)
            dispatch(getNotificacionesError())
        })
    }
}