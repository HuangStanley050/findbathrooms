import * as actionType from "./actionTypes";

export const getLocationStart = () => {
  return {
    type: actionType.GET_CURRENT_LOCATION_START
  };
};

export const getLocationSuccess = (long, lat) => {
  return {
    type: actionType.GET_CURRENT_LOCATION_OK,
    payload: { long, lat }
  };
};

export const getLocationFail = () => {
  return {
    type: actionType.GET_CURRENT_LOCATION_FAIL
  };
};

export const findBathroomsStart = (long, lat, page = 1) => {
  return {
    type: actionType.GET_BATHROOMS_START,
    payload: { long, lat, page }
  };
};

export const findBathroomsSuccess = data => {
  return {
    type: actionType.GET_BATHROOMS_OK,
    payload: data
  };
};

export const findBathroomsFail = () => ({
  type: actionType.GET_BATHROOMS_FAIL
});
export const changePage = (direction, page, long, lat) => {
  //console.log(page, long, lat);
  switch (direction) {
    case "next":
      return { type: actionType.NEXT_PAGE, payload: { long, lat, page } };
    case "prev":
      return { type: actionType.PREVIOUS_PAGE, payload: { long, lat, page } };
    default:
      return { type: actionType.FIRST_PAGE, payload: { long, lat, page } };
  }
};
// export const showOnGoogleMap = (long, lat) => {
//   console.log(long, lat);
// };
