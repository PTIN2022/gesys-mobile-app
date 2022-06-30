import {
    FETCHING_NOTIFICACIONES,
    FETCHING_NOTIFICACIONES_SUCCESS,
    FETCHING_NOTIFICACIONES_ERROR
} from '../actionTypes'

const initial_state = {
    notifications: [
        {
            id: 1,
            tipo: "Reserva Cancelada",
            reserva: 1312313,
            estacion: "Siuuuuu",
            vehiculo: "a",
            hora: "14:50",
            texto: "CANCELASTE LA RESERVA WACHIN"
        },
        {
            id:2,
            tipo:"Te han robado el coche",
            reserva: 1312313,
            estacion: "Bar de Pepin",
            vehiculo: "XAvineta",
            hora: "15:23",
            texto: "Primo te han robado el coche :(("
        },
        {
            id: 3,
            tipo: "La estacion explotó",
            reserva: 1312313,
            estacion: "EPSEVG",
            vehiculo: "Opel Corsa",
            hora: "163:31313",
            texto: "BOOM"
        }

    ]

}

export default Notifications = (state = initial_state, action) => {
    switch(action.type){
        case FETCHING_NOTIFICACIONES: 
            return {
                ...state,
                estaciones: [],
                successNotificaciones: false,
                errorNotificaciones: false,
                fetchingNotificaciones: true
            }
        case FETCHING_NOTIFICACIONES_SUCCESS: 
            return {
                ...state,
                estaciones: action.payload,
                successNotificaciones: true,
                fetchingNotificaciones: false,
                errorNotificaciones: false,
            }
        case FETCHING_NOTIFICACIONES_ERROR:
            return {
                ...state,
                estaciones: [],
                successNotificaciones: false,
                fetchingNotificaciones: false,
                errorNotificaciones: true
            }
        default :
            return state
    }
}
