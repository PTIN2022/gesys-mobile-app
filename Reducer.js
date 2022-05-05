import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
  all_vehicles: [ // Guardamos los vehículos.
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
  ],
  all_bookings: [ // Guardamos las reservas.
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
  ],
  all_stations: []

};

const gesysReducer = (state = INITIAL_STATE, action) => {
  const {
    current
  } = state;

  switch (action.type) {
    case 'ADD_STATION': // Definimos lo que hacemos con la acción.
      return {
        ...state,
        all_stations: state.all_stations.concat(action.payload)
      }

    case 'ADD_VEHICLE': // Definimos lo que hacemos con la acción.
      return {
        ...state,
        all_vehicles: state.all_vehicles.concat(action.payload)
      }

    case 'ADD_BOOKING': // Definimos lo que hacemos con la acción.
      return {
        ...state,
        all_bookings: state.all_bookings.concat(action.payload)
      }

    default:
      return state
  }
};

export default gesysReducer;
