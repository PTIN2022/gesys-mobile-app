import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
  all_vehicles: [ // Guardamos los vehículos.
  ],
  all_bookings: [ // Guardamos las reservas.
  ],
  all_stations: [ // Guardmos las electrolineras.
  ],
  
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
