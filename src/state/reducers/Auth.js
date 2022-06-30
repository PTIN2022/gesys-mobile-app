import {
    DOING_LOGIN,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    DOING_LOGOUT,
    LOGOUT_ERROR,
    LOGOUT_SUCCESS,
    UPDATE_BALANCE
} from '../actionTypes'

const initial_state = {
    client: null,
    token: null,
    doingLogin: false,
    loginSuccess: false,
    loginError: false,
    doingLogout: false,
    logoutSuccess: false,
    logoutError: false,
    message: "",
}

export default (state = initial_state, action) => {
    switch(action.type){
        case DOING_LOGIN:
            return {
                ...state,
                client: null,
                token: null,
                doingLogin: true,
                loginSuccess: false,
                loginError: false,
                doingLogout: false,
                logoutSuccess: false,
                logoutError: false,
            }
        case LOGIN_SUCCESS: 
            return {
                ...state,
                token: action.payload.token,
                cliente: action.payload.cliente,
                doingLogin: false,
                loginSuccess: true,
                loginError: false,
                doingLogout: false,
                logoutSuccess: false,
                logoutError: false,
                message: "Log in realizado con éxito"
            }
        case LOGIN_ERROR:
            return {
                ...state,
                client: null,
                token: null,
                doingLogin: false,
                loginSuccess: false,
                loginError: true,
                doingLogout: false,
                logoutSuccess: false,
                logoutError: false,
                message: "Log in error"
            }
        case DOING_LOGOUT:
            return {
                ...state,
                doingLogin: false,
                loginSuccess: false,
                loginError: false,
                doingLogout: true,
                logoutSuccess: false,
                logoutError: false,
            }
        case LOGOUT_SUCCESS:
            console.log("r-logout-success",)
            return {
                ...state,
                client: null,
                token: null,
                doingLogin: false,
                loginSuccess: false,
                loginError: false,
                doingLogout: false,
                logoutSuccess: true,
                logoutError: false,
                message: "Log out realizado con éxito",
            }
        case LOGOUT_ERROR:
            return {
                ...state,
                doingLogin: false,
                loginSuccess: false,
                loginError: false,
                doingLogout: false,
                logoutSuccess: false,
                logoutError: true,
                message: "Log out error"
            }
        case UPDATE_BALANCE:
            return {
                ...state,
                cliente: {
                    ...state.cliente,
                    saldo: action.payload,
                }
            }
        default:
            return state;
    }
}

