const initial_state = {
    tickets: [
        {
            id: 1,
            id_ticket: "TICKET-22-05-2022-16-33-01",
            fecha: "22/05/2022 16:33",
            asunto: 'Consulta sobre cuota mensual',
            mensaje: 'Hola, me gustaria saber si se puede pagar una cuota mensual',
            estado: true
        },
        {
            id: 2,
            id_ticket: "TICKET-22-05-2022-16-33-02",
            fecha: "22/05/2022 16:33",
            asunto: 'Problema con mi reserva 23',
            mensaje: 'Hola, tengo un problema con mi reserva, me la han cancelado. Sigo?',
            estado: false
        },
    ]
}

export default Tickets = (state = initial_state) => {
    return state
}