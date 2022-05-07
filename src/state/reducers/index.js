import { combineReducers } from "redux"
import Estacion from './Estacion'
import Estaciones from './Estaciones'
import Reservas from "./Reservas"
import Vehiculos from "./Vehiculos"

export default combineReducers({
    Estacion,
    Estaciones,
    Reservas,
    Vehiculos,
})