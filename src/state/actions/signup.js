import {

    POST_SIGNUP_ERROR,
    POST_SIGNUP_SUCCESS,
    POST_SIGNUP
} from '../actionTypes'

import { apiSignUp } from '../../api'



export const addSignUp = () => {
    return {
        type: 'POST_SIGNUP_ERROR'
    }
}

export const addSignUpSuccess = (data) => {
    return {
        type: 'POST_SIGNUP_SUCCESS',
        payload: data
    }
}

export const addSignup = (data) => {
    // //data = {
    //     "nombre": "Pere",
    //     "apellido": "Roca",
    //     "DNI": "124381N",
    //     "telefono": 622574433,
    //     "email": "pe2lore.roca@boss.com",
    //     "username": "p2eiurealoca",
    //     "password": "1",
    //     "foto": "a"
    // }
    console.log(data)
    return (dispatch) => {
        console.log("sfas")
        apiSignUp(data)
            .then(([response, json]) => {
                console.log(response)
                console.log(json)
                if (json.error != undefined) {
                    dispatch(addSignUp())
                    // fn(false)
                }
                else {
                    dispatch(addSignUpSuccess(json))
                    // fn(true)
                }
            })
            .catch(error => {
                console.log("Error al obtener vehiculos. Error en la API.");
                // fn(false)
                alert(error)
            })
    }
}


