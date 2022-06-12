import {
  ADD_VEHICLE,
  FETCHING_VEHICLES,
  FETCHING_VEHICLES_ERROR,
  FETCHING_VEHICLES_SUCCESS,
  ADD_VEHICLE_SUCCESS,
  ADD_VEHICLE_ERROR
} from '../actionTypes/Vehicles'
const initial_state = {
    vehicles: [
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

export default Vehiculos = (state = initial_state, action) => {
  switch(action.type){
    case FETCHING_VEHICLES: 
        return {
            ...state,
            vehicles: [],
            successVechicles: false,
            errorVehicles: false,
            fetchingVehicles: true
        }
    case FETCHING_VEHICLES_SUCCESS: 
        return {
            ...state,
            vehicles: action.payload,
            successVechicles: true,
            fetchingVehicles: false,
            errorVehicles: false,
        }
    case FETCHING_VEHICLES_ERROR:
        return {
            ...state,
            vehicles: [],
            successVechicles: false,
            fetchingVehicles: false,
            errorVehicles: true
        }
    case ADD_VEHICLE_SUCCESS:
        return {
            ...state,
            vehicles: state.vehicles.concat(action.payload),
            successAddVehicle: true,
            errorAddVehicle: false,
        }
    case ADD_VEHICLE_ERROR:
        return {
            ...state,
            vehicles: state.vehicles,
            successAddVehicle: false,
            errorAddVehicle: true,
        }
    default :
        return state
  }
}