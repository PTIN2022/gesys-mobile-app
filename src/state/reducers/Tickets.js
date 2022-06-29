import {
    FETCHING_TICKET,
    FETCHING_TICKET_ERROR,
    FETCHING_TICKET_SUCCESS,
    ADD_TICKET_SUCCESS,
    ADD_TICKET_ERROR
} from '../actionTypes/Ticket'


const initial_state = {
    tickets: [],
    fetchingTickets: false,
    errorTickets: false
}

export default Tickets = (state = initial_state, action) => {
    switch (action.type) {
        case FETCHING_TICKET:
            return {
                ...state,
                tickets: [],
                successTickets: false,
                errorTickets: false,
                fetchingTickets: true
            }
        case FETCHING_TICKET_SUCCESS:
            return {
                ...state,
                tickets: action.payload,
                successTickets: true,
                fetchingTickets: false,
                errorTickets: false,
            }
        case FETCHING_TICKET_ERROR:
            return {
                ...state,
                tickets: [],
                successTickets: false,
                fetchingTickets: false,
                errorTickets: true
            }
        case ADD_TICKET_SUCCESS:
            return {
                ...state,
                tickets: state.tickets.concat(action.payload),
                successAddTickets: true,
                errorAddTickets: false,
            }
        case ADD_TICKET_ERROR:
            return {
                ...state,
                tickets: state.tickets,
                successAddTickets: false,
                errorAddTickets: true,
            }
        default:
            return state
    }
}