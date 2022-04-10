
// Acción para añadir la estación a la store.
export const addStation = station => (
    {
      type: 'ADD_STATION',
      payload: station,
    }
);
