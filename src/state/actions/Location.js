
import {
    SET_LOCATION
} from '../actionTypes'

export const setCurrLocation = (location) => {
    return {
        type: SET_LOCATION,
        payload: location
    }
}

export const setLocation = payload => {
    return (dispatch) => {
        dispatch(setCurrLocation(payload))
    }
}