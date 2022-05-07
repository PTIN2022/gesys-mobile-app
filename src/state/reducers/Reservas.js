const initial_state = {
    reservas: [
        {
            id: 1, // es el id de reserva. No el de la electrolinera.
            name: "Station Vilanova Casino",
            date: "02/05/2022 16:50",
            status: 'Activa',
            import_due: 22,
            amount_paid: 22,
            time: "3h" 
          },
          {
            id: 2, // es el id de reserva. No el de la electrolinera.
            name: "Station SuperMart",
            date: "20/04/2022 8:30",
            status: 'Terminada', // Puede ser una diferencia de fechas realmente.
            import_due: 32,
            amount_paid: 32,
            time: "4h"
          },
          {
            id: 3, // es el id de reserva. No el de la electrolinera.
            name: "Station SuperMart",
            date: "20/04/2022 8:30",
            status: 'Terminada', // Puede ser una diferencia de fechas realmente.
            import_due: 32,
            amount_paid: 32,
            time: "4h"
          },
          {
            id: 4, // es el id de reserva. No el de la electrolinera.
            name: "Station SuperMart",
            date: "20/04/2022 8:30",
            status: 'Terminada', // Puede ser una diferencia de fechas realmente.
            import_due: 32,
            amount_paid: 32,
            time: "4h"
          },
          {
            id: 5, // es el id de reserva. No el de la electrolinera.
            name: "Station SuperMart",
            date: "20/04/2022 8:30",
            status: 'Terminada', // Puede ser una diferencia de fechas realmente.
            import_due: 32,
            amount_paid: 32,
            time: "4h"
          }
    ]
}

export default Reservas = (state = initial_state, action) => {
    return state
}