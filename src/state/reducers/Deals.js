const initial_state = {
    deals: [
        {
            id: 1,
            id_promo: "10VILANOVA2022",
            estacion: 'Vilanova y la Geltru, Avda Victor Balague 17',
            descuento: 10,
            fecha_inicio: '01/05/2022',
            fecha_fin: '01/06/2022',
            estado: true
        },
        {
            id: 2,
            id_promo: "12VILANOVA2022",
            estacion: 'Vilanova y la Geltru, Avda Victor Balague 17',
            descuento: 12,
            fecha_inicio: '01/04/2022',
            fecha_fin: '01/05/2022',
            estado: false
        }
    ]
}

export default Deals = (state = initial_state) => {
    return state
}