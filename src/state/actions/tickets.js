import {
    FETCHING_TICKET,
    FETCHING_TICKET_SUCCESS,
    FETCHING_TICKET_ERROR,
    ADD_TICKET_SUCCESS,
    ADD_TICKET_ERROR
} from '../actionTypes/Ticket'

import { apifetchTickets, apiAddTickets } from '../../api'

export const getTickets = () => {
    return {
        type: FETCHING_TICKET
    }
}

export const getTicketsSuccess = payloa => {
    return {

        type: FETCHING_TICKET_SUCCESS,
        payload: payloa
    }
}

export const getTicketsError = () => {
    return {
        type: FETCHING_TICKET_ERROR
    }
}

export const fetchTickets = (token, id_client) => {
    return (dispatch) => {
        dispatch(getTickets())
        apifetchTickets(token, id_client)
            .then(([response, json]) => {

                dispatch(getTicketsSuccess(json))
            })
            .catch(error => {
                dispatch(getTicketsError())
            })
    }
}





export const addTicketsError = () => {
    return {
        type: ADD_TICKET_ERROR
    }
}

export const addTicketsSuccess = (data) => {
    return {
        type: ADD_TICKET_SUCCESS,
        payload: data
    }
}

export const addTickets = (data, token) => {
    console.log("abans return de add Tickets")
    console.log(token)
    return (dispatch) => {

        apiAddTickets(token, data)
            .then(([response, json]) => {
                console.log(response)
                console.log(json)
                if (json.error != undefined) {
                    dispatch(addTicketsError())
                    // fn(false)
                }
                else {
                    dispatch(addTicketsSuccess(json))
                    // fn(true)
                }
            })
            .catch(error => {
                console.log("Error al obtener vehiculos. Error en la API.");
                // fn(false)
                dispatch(addTicketsError())
            })
    }
}



