import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
  all_vehicles: [ // Guardamos los vehículos.
  ],
  all_bookings: [ // Guardamos las reservas.
    {
      id: 1,
      name: "Station Vilanova Casino",
    }
  ],
  all_stations: [ // Guardmos las electrolineras.
    // Ponemos los datos iniciales (de momento ficticios) a la store.
    {
      id: 1,
      name: "Station Vilanova Casino",
      coordinates: {
        latitude: 27.38,
        longitude: 31.33
      },
      capacity: 31,
      curr_ocupation: 30
    },
    {
      id: 2,
      name: "Station SuperMart",
      coordinates: {
        latitude: 90.38,
        longitude: 87.33
      },
      capacity: 50,
      curr_ocupation: 2
    },
    {
      id: 3,
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
