import * as actionType from "../actions/actionTypes";
const initialState = {
  loading: false,
  currentLocation: {LONG: "", LAT: ""},
  bathroomsData: [],
  currentPage: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_BATHROOMS_START:
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
    case actionType.GET_BATHROOMS_OK:
      return {
        ...state,
        loading: false,
        bathroomsData: [...action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
