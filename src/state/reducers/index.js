import { combineReducers } from "redux"
import Estacion from './Estacion'
import Estaciones from './Estaciones'
import Reservas from "./Reservas"
import Vehiculos from "./Vehiculos"
import Locations from "./Location"
import Templates from "./Templates"
import Deals from "./Deals"
import Tickets from './Tickets'
import Auth from './Auth'
import Notifications from "./Notifications"
import Historial from './Historial'

export default combineReducers({
    Estacion, 
    Estaciones,
    Reservas,
    Vehiculos,
    Locations,
    Deals,
    Tickets,
    Templates,
    Auth,
    Notifications,
    Historial,
})
