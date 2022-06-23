
import {
    FETCHING_VEHICLES,
    FETCHING_VEHICLES_SUCCESS,
    FETCHING_VEHICLES_ERROR,
    ADD_VEHICLE_SUCCESS,
    ADD_VEHICLE_ERROR
} from '../actionTypes/Vehicles'

import {apifetchVehicles, apiAddVehicle} from '../../api'

export const getVehicles = () => {
    return {
        type: FETCHING_VEHICLES
    }
}

export const getVehiclesSuccess = payload => {
    return {
        type: FETCHING_VEHICLES_SUCCESS,
        payload: payload
    }
}

export const getVehiclesError = () => {
    return {
        type: FETCHING_VEHICLES_ERROR
    }
}

export const fetchVehicles = (token, id_cliente) => {
    return (dispatch) => {
        dispatch(getVehicles())
        apifetchVehicles(token, id_cliente)
        .then(([response, json]) => {
            dispatch(getVehiclesSuccess(json))
        })
        .catch(error => {
            console.log("Error al obtener vehiculos. Error en la API.")
            dispatch(getVehiclesError())
        })
    }
}


export const addVehicleError = () => {
    return {
        type: ADD_VEHICLE_ERROR
    }
}

export const addVehicleSuccess = (data) => {
    return {
        type: ADD_VEHICLE_SUCCESS,
        payload: data
    }
}

export const addVehicle = (data, fn) => {
    return (dispatch) => {
        apiAddVehicle(data)
        .then(([response, json]) => {
            if (json.error != undefined) {
                dispatch(addVehicleError())
                fn(false)
            }
            else {
                dispatch(addVehicleSuccess(json))
                fn(true)
            }
        })
        .catch(error => {
            console.log("Error al obtener vehiculos. Error en la API.");
            fn(false)
            dispatch(addVehicleError())
        })
    }
}