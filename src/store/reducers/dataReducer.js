import * as actionType from "../actions/actionTypes";
const initialState = {
  currentLocation: {LONG: "", LAT: ""}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_CURRENT_LOCATION_OK:
      return {
        ...state,
        currentLocation: {
          ...state.currentLocation,
          LONG: action.payload.long,
          LAT: action.payload.lat
        }
      };
    default:
      return state;
  }
};

export default reducer;
