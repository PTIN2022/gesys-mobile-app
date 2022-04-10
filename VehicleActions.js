
// Acción para añadir el vehículo a la store.
export const addVehicle = vehicle => (
    {
      type: 'ADD_VEHICLE',
      payload: vehicle,
    }
);
