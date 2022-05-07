const initial_state = {
    vehiculos: [
        {
            id: 1,
            name: "Coche deportivo",
            plate: '1279FJD', // es el identificador del vehículo
            model: 'Ferrari 296 GTB'
          },
          {
            id: 2,
            name: "Coche familiar",
            plate: '1275AAA', // es el identificador del vehículo
            model: 'Seat Arona'
          },
          {
            id: 3,
            name: "Todoterreno",
            plate: '1275BBB', // es el identificador del vehículo
            model: 'Jeep'
          },
          {
            id: 4,
            name: "Berlina 2",
            plate: '1276FJD', // es el identificador del vehículo
            model: 'Kia rio'
          },
          {
            id: 5,
            name: "El seat de toda la vida",
            plate: '1279AAA', // es el identificador del vehículo
            model: 'Seat Ibiza'
          },
    ]
}

export default Vehiculos = (state = initial_state) => {
    return state
}