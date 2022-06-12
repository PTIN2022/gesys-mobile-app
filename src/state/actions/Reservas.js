import {
    FETCHING_RESERVAS,
    FETCHING_RESERVAS_SUCCESS,
    FETCHING_RESERVAS_ERROR,
    POST_RESERVA_ERROR,
    POST_RESERVA_SUCCESS,
    POST_RESERVA
} from '../actionTypes'

import { apiFetchReservas } from '../../api'
import { apiPostReserva } from '../../api'

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



export const postReservaError = () => {
    return {
        type: POST_RESERVA_ERROR
    }
}

export const postReservaSuccess = (data) => {
    return {
        type: POST_RESERVA_SUCCESS,
        payload: data
    }
}

export const addBooking = (data) => {
    return (dispatch) => {
        apiPostReserva(data)
        .then(([response, json]) => {
            if (json.error != undefined) {
                dispatch(postReservaError())
            }
            else {
                let newData = {
                    fecha_entrada: json.fecha_entrada,
                    fecha_salida: json.fecha_salida,
                    id_cargador: json.id_cargador,
                    id_reserva: json.id_reserva,
                    id_vehiculo: json.id_vehiculo,
                }
                dispatch(postReservaSuccess(json))
            }
        })
        .catch(error => {
            alert(error)
        })
    }
}