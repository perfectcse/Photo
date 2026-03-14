export const initialState =
  JSON.parse(localStorage.getItem("favourites")) || [];

export function favouritesReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVOURITE": {
      const exists = state.find((item) => item.id === action.payload.id);

      let updatedState;

      if (exists) {
        updatedState = state.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        updatedState = [...state, action.payload];
      }

      localStorage.setItem("favourites", JSON.stringify(updatedState));

      return updatedState;
    }

    default:
      return state;
  }
}