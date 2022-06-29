import {
    FETCHING_OFERTA,
    FETCHING_OFERTA_SUCCESS,
    FETCHING_OFERTA_ERROR,

} from '../actionTypes/Deals'

import { apifetchOfertes, apifetchOfertesEst } from '../../api'

export const getOfertes = () => {
    return {
        type: FETCHING_OFERTA
    }
}

export const getOfertesSuccess = payload => {
    return {
        type: FETCHING_OFERTA_SUCCESS,
        payload: payload
    }
}

export const getOfertesError = () => {
    return {
        type: FETCHING_OFERTA_ERROR
    }
}

export const fetchOfertes = (token, id_client, id) => {
    return (dispatch) => {
        dispatch(getOfertes())
        apifetchOfertes(token, id_client, id)
            .then(([response, json]) => {
                console.log("success tickets", json)
                dispatch(getOfertesSuccess(json))
            })
            .catch(error => {
                console.error("error tickets list", error)
                dispatch(getOfertesError())
            })
    }
}

export const setOfertesState = (ofertes) => {
    return (dispatch) => {
        if (ofertes) {
            dispatch(getOfertesSuccess(ofertes))
        } else {
            dispatch(getOfertesError())
        }
    }
}

export const fetchOfertesApi = (token, id_client, id) => {
    return new Promise((resolve, reject) => {
        apifetchOfertes(token, id_client, id)
            .then(([response, json]) => {
                resolve(json)
            })
            .catch(error => {
                console.error("error tickets list", error)
                reject(null)
            })
    })
}




export const fetchOfertesEstApi = (token, id_client) => {
    return new Promise((resolve, reject) => {
        apifetchOfertesEst(token, id_client)
            .then(([response, json]) => {
                console.log("Aqui el json", json)
                resolve(json)
            })
            .catch(error => {
                console.error("error tickets list", error)
                reject(null)
            })
    })
}


