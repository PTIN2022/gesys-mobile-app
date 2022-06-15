import {
    SET_LOCATION
} from '../actionTypes'

const initial_state = {
    currentLocation: {
        latitude: null,
        longitude: null,
    }
}

export default Locations = (state = initial_state, action) => {
    switch(action.type){
        case SET_LOCATION: 
            return {
                ...state,
                currentLocation: action.payload
            }
        default :
            return state
    }
}
