import {
    DO_LOGIN,
    DO_LOGIN_ERROR,
    DO_LOGIN_SUCCESS
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
                token: "GESYS:TOKEN",
                client_id: action.payload.client_id,
                logged: true,
                errorLogin: false,
            }
            case DO_LOGIN_ERROR:
                return {
                ...state,
                errorLogin: true,
                token: null,
                client_id: null,
                logged: false,
            }
        default:
            return state;
    }
}

