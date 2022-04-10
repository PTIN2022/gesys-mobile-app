import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
  all_vehicles: [ // Guardamos los vehículos.
  ],
  all_bookings: [ // Guardamos las reservas.
  ],
  all_stations: [ // Guardmos las electrolineras.
    // Ponemos los datos iniciales (de momento ficticios) a la store.
    {
      name: "Station Vilanova Casino",
      coordinates: {
        latitude: 27.38,
        longitude: 31.33
      },
      capacity: 31,
      curr_ocupation: 30
    },
    {
      name: "Station SuperMart",
      coordinates: {
        latitude: 90.38,
        longitude: 87.33
      },
      capacity: 50,
      curr_ocupation: 2
    },
    {
      name: "Station Lidl Granvia",
      coordinates: {
        latitude: 10.1,
        longitude: 15.12
      },
      capacity: 20,
      curr_ocupation: 10
    }
  ]
};

const gesysReducer = (state = INITIAL_STATE, action) => {
  const {
    current
  } = state;

  switch (action.type) {
    case 'ADD_STATION': // Definimos lo que hacemos con la acción.
      const { all_stations } = state;
      // Insertamos en la primera posición.
      const addedStation = all_stations.splice(action.payload, 1);
      current.push(addedStation);
      return { current, all_stations };

    case 'ADD_VEHICLE': // Definimos lo que hacemos con la acción.
      const { all_vehicles } = state;
      // Insertamos en la primera posición.
      const addedVehicle = all_vehicles.splice(action.payload, 1);
      current.push(addedVehicle);
      return { current, all_vehicles };

    case 'ADD_BOOKING': // Definimos lo que hacemos con la acción.
      const { all_bookings } = state;
      // Insertamos en la primera posición.
      const addedBooking = all_bookings.splice(action.payload, 1);
      current.push(addedBooking);
      return { current, all_bookings };

    default:
      return state
  }
};

export default combineReducers({
  gesys: gesysReducer
});
