import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
  all_vehicle: [ // Guardamos los vehículos.
  ],
  all_bookings: [ // Guardamos las reservas.
  ],
  all_stations: [ // Guardmos las electrolineras.
  ],
  
};

const gesysReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
    return state
  }
};

export default combineReducers({
  gesys: gesysReducer
});
