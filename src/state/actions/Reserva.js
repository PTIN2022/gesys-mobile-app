import {
    FETCHING_RESERVA,
    FETCHING_RESERVA_SUCCESS,
    FETCHING_RESERVA_ERROR
} from '../actionTypes'
import { apiFetchReservaById } from '../../api'
import { apiFetchReservaByEstacion } from '../../api'
import { apiFetchReservaByDNI } from '../../api'
import { apiFetchReservaByMatricula } from '../../api'


export const getReserva = () => {
    return {
        type: FETCHING_RESERVA
    }
}

export const getReservaSuccess = payload => {
    return {
        type: FETCHING_RESERVA_SUCCESS,
        payload: payload
    }
}

export const getReservaError = () => {
    return {
        type: FETCHING_RESERVA_ERROR
    }
}

export const fetchReserva = id => {
    return (dispatch) => {
        dispatch(getReserva())
        apiFetchReservaById(id)
            .then(([response, json]) => {
                if (json.error != undefined) dispatch(getReservaError())
                else dispatch(getReservaSuccess(json))
            })
            .catch(error => {
                console.log(error)
            })

        dispatch(getReserva())
        apiFetchReservaByEstacion(id)
            .then(([response, json]) => {
                if (json.error != undefined) dispatch(getReservaError())
                else dispatch(getReservaSuccess(json))
            })
            .catch(error => {
                console.log(error)
            })

        dispatch(getReserva())
        apiFetchReservaByDNI(id)
            .then(([response, json]) => {
                if (json.error != undefined) dispatch(getReservaError())
                else dispatch(getReservaSuccess(json))
            })
            .catch(error => {
                console.log(error)
            })
        
        dispatch(getReserva())
        apiFetchReservaByMatricula(id)
            .then(([response, json]) => {
                if (json.error != undefined) dispatch(getReservaError())
                else dispatch(getReservaSuccess(json))
            })
            .catch(error => {
                console.log(error)
            })
        
       /* dispatch(getReserva())
        apiFetchAddReserva()  //esta bien????
            .then(([response, json]) => {
                if (json.error != undefined) dispatch(getReservaError())
                else dispatch(getReservaSuccess(json))
            })
            .then((json) => {
                return json.?;
            })
            .catch(error => {
                console.log(error)
            })
            */
    }
}