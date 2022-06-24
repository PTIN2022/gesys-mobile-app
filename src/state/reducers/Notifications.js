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

export default Notifications = (state = initial_state) => {
    return state
}