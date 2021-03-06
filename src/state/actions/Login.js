import {
    DO_LOGIN,
    DO_LOGIN_ERROR,
    DO_LOGIN_SUCCESS,
    UPDATE_BALANCE,
} from '../actionTypes'

import { apiLogin } from '../../api'

export const validateLogin = () => {
    return {
        type: DO_LOGIN
    }
}

export const validateLoginSuccess = payload => {
    return {
        type: DO_LOGIN_SUCCESS,
        payload: payload
    }
}

export const validateLoginError = () => {
    return {
        type: DO_LOGIN_ERROR
    }
}

export const doLogin = (username, password, fn) => {
    return (dispatch) => {
        apiLogin({
            email: username,
            password: password,
        })
        .then(([response, json]) => {
            if (json.error != undefined) {
                dispatch(validateLoginError())
                fn(false)
            }
            else {
                dispatch(validateLoginSuccess(json))
                fn(true)
            }
        })
        .catch(error => {
            fn(false)
        })
    }
}


export const updateClientBalance = payload => {
    return {
        type: UPDATE_BALANCE,
        payload: payload
    }
}

export const updateSaldo = (payload) => {
    return (dispatch) =>{
        dispatch(updateClientBalance(payload))
    } 
}
