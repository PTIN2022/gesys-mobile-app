import {
    FETCHING_CHAT,
    FETCHING_CHAT_ERROR,
    FETCHING_CHAT_SUCCESS,
    ADD_CHAT_SUCCESS,
    ADD_CHAT_ERROR
} from '../actionTypes/Chat'


const initial_state = {
    mensajes: [],
    fetchingChat: false,
    errorChat: false
}

export default Chat = (state = initial_state, action) => {
    switch (action.type) {
        case FETCHING_CHAT:
            return {
                ...state,
                mensajes: [],
                successChat: false,
                errorChat: false,
                fetchingChat: true
            }
        case FETCHING_CHAT_SUCCESS:
            return {
                ...state,
                mensajes: action.payload,
                successChat: true,
                fetchingChat: false,
                errorChat: false,
            }
        case FETCHING_CHAT_ERROR:
            return {
                ...state,
                mensajes: [],
                successChat: false,
                fetchingChat: false,
                errorChat: true
            }
        case ADD_CHAT_SUCCESS:
            return {
                ...state,
                mensajes: state.mensajes.concat(action.payload),
                successAddChat: true,
                errorAddChat: false,
            }
        case ADD_CHAT_ERROR:
            return {
                ...state,
                mensajes: state.mensajes,
                successAddChat: false,
                errorAddChat: true,
            }
        default:
            return state
    }
}