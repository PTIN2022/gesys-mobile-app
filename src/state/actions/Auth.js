import {
    DOING_LOGIN,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    DOING_LOGOUT,
    LOGOUT_ERROR,
    LOGOUT_SUCCESS,
    UPDATE_BALANCE
} from '../actionTypes'
import { apiLogin } from '../../api'
import { apiLogout } from '../../api'

export const doingLogin = () => {
    return {
        type: DOING_LOGIN
    }
}

export const doingLogout = () => {
    return {
        type: DOING_LOGOUT
    }
}

export const loginSuccess = payload => {
    return {
        type: LOGIN_SUCCESS,
        payload: payload
    }
}

export const loginError = () => {
    return {
        type: LOGIN_ERROR
    }
}
export const logoutSuccess = () => {
    console.log("logoutSuccess")
    return {
        type: LOGOUT_SUCCESS,
    }
}

export const logoutError = () => {
    console.log("logoutError")
    return {
        type: LOGOUT_ERROR
    }
}

export const doLogin = (username, password) => {
    return (dispatch) => {
        dispatch(doingLogin())
        apiLogin({
            email: username,
            password: password,
        })
        .then(([response, json]) => {
            if (json.error != undefined) {
                dispatch(loginError())
            }
            else {
                console.log(json)
                dispatch(loginSuccess(json))
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const doLogout = token => {
    console.log("action:", token)
    return (dispatch) => {
        dispatch(doingLogout())
        apiLogout(token)
        .then(([response, json]) => {
            console.log(json)
            dispatch(logoutSuccess())
        })
        .catch(error => {
            console.log(error)
            dispatch(logoutError())
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
