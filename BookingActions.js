
// Acción para añadir la reserva a la store.
export const addBooking = booking => (
    {
      type: 'ADD_BOOKING',
      payload: booking,
    }
);
