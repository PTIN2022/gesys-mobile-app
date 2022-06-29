import {
    ADD_CHAT_SUCCESS,
    ADD_CHAT_ERROR,
    FETCHING_CHAT,
    FETCHING_CHAT_SUCCESS,
    FETCHING_CHAT_ERROR,
} from '../actionTypes/Chat'

import { apiAddChat, apifetchChat } from '../../api'


export const addChatError = () => {
    return {
        type: ADD_CHAT_ERROR
    }
}

export const addChatSuccess = (data) => {
    return {
        type: ADD_CHAT_SUCCESS,
        payload: data
    }
}

export const addChat = (id, data, token) => {
    console.log("abans return de add ID TICKET")
    console.log(id)
    console.log(data)
    return (dispatch) => {
        apiAddChat(token, data, id)
            .then(([response, json]) => {
                console.log("RESPONSE")
                console.log(response)

                if (json.error != undefined) {
                    dispatch(addChatError())
                    // fn(false)
                }
                else {
                    dispatch(addChatSuccess(json))
                    // fn(true)
                }
            })
            .catch(error => {
                console.log("Error al obtener vehiculos. Error en la API.");
                // fn(false)
                dispatch(addChatError())
            })
    }
}





















export const getChat = () => {
    return {
        type: FETCHING_CHAT
    }
}

export const getChatSuccess = payload => {
    return {
        type: FETCHING_CHAT_SUCCESS,
        payload: payload
    }
}

export const getChatError = () => {
    return {
        type: FETCHING_CHAT_ERROR
    }
}

export const fetchChat = (token, id_client, id) => {
    return (dispatch) => {
        dispatch(getChat())
        apifetchChat(token, id_client, id)
            .then(([response, json]) => {
                console.log("success tickets", json)
                dispatch(getChatSuccess(json))
            })
            .catch(error => {
                console.error("error tickets list", error)
                dispatch(getChatError())
            })
    }
}

export const setChatState = (mensajes) => {
    return (dispatch) => {
        if (mensajes) {
            dispatch(getChatSuccess(mensajes))
        } else {
            dispatch(getChatError())
        }
    }
}

export const fetchChatApi = (token, id_client, id) => {
    return new Promise((resolve, reject) => {
        apifetchChat(token, id_client, id)
            .then(([response, json]) => {
                console.log(json)
                resolve(json)
            })
            .catch(error => {
                console.error("error chat list", error)
                reject(null)
            })
    })
}