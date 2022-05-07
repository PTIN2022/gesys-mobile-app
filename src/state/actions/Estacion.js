
import {
    FETCHING_ESTACION,
    FETCHING_ESTACION_SUCCESS,
    FETCHING_ESTACION_ERROR
} from '../actionTypes'
import { apiFetchEstacionById } from '../../api'

export const getEstacion = () => {
    return {
        type: FETCHING_ESTACION
    }
}

export const getEstacionSuccess = payload => {
    return {
        type: FETCHING_ESTACION_SUCCESS,
        payload: payload
    }
}

export const getEstacionError = () => {
    return {
        type: FETCHING_ESTACION_ERROR
    }
}

export const fetchEstacion = id => {
    return (dispatch) => {
        dispatch(getEstacion())
        apiFetchEstacionById(id)
        .then(([response, json]) => {
            if (json.error !=undefined) dispatch(getEstacionError())
            else dispatch(getEstacionSuccess(json))
        })
        .catch(error => {
            console.log(error)
        })
    }
}