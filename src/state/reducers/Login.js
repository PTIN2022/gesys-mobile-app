import {
    DO_LOGIN,
    DO_LOGIN_ERROR,
    DO_LOGIN_SUCCESS,
    UPDATE_BALANCE
} from '../actionTypes'

const initial_state = {
    logged: false,
    token: null,
    client_id: null,
    doingLogin: false,
    errorLogin: false,
}

export default (state = initial_state, action) => {
    switch(action.type){
        case DO_LOGIN_SUCCESS: 
            return {
                ...state,
                token: action.payload.token,
                cliente: action.payload.cliente,
                logged: true,
                errorLogin: false,
            }
        case DO_LOGIN_ERROR:
            return {
                ...state,
                errorLogin: true,
                token: null,
                cliente: null,
                logged: false,
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

