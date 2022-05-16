import { combineReducers } from "redux"
import Estacion from './Estacion'
import Estaciones from './Estaciones'
import Reservas from "./Reservas"
import Vehiculos from "./Vehiculos"
import Locations from "./Location"

export default combineReducers({
    Estacion,
    Estaciones,
    Reservas,
    Vehiculos,
    Locations
})