import {
    DO_LOGIN,
    DO_LOGIN_ERROR,
    DO_LOGIN_SUCCESS
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
            username: username,
            password: password,
        })
        .then(([response, json]) => {
            if (json.error != undefined) {
                console.log("ERROR")
                dispatch(validateLoginError())
                fn(false)
            }
            else {
                console.log("SUCCESS")
                dispatch(validateLoginSuccess(json))
                fn(true)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}

