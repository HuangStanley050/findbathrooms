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
    case actionType.FIRST_PAGE:
      return {
        ...state,
        loading: true,
        currentPage: 1
      };
    case actionType.NEXT_PAGE:
      return {
        ...state,
        loading: true,
        currentPage: state.currentPage + 1
      };
    case actionType.CLEAR_RESULT:
      return {
        ...state,
        bathroomsData: []
      };
    case actionType.PREVIOUS_PAGE:
      let tempPage = (state.currentPage -= 1);
      if (tempPage < 0) {
        tempPage = 1;
      }
      return {
        ...state,
        loading: true,
        currentPage: tempPage
      };
    default:
      return state;
  }
};

export default reducer;
