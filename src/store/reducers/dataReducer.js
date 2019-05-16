import * as actionType from "../actions/actionTypes";
const initialState = {
  loading: false,
  currentLocation: {LONG: "", LAT: ""}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_CURRENT_LOCATION_START:
      return {
        ...state,
        loading: true
      };
    case actionType.GET_CURRENT_LOCATION_OK:
      return {
        ...state,
        loading: false,
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
