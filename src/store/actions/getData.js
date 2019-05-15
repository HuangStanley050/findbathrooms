import * as actionType from "./actionTypes";

export const getLocationStart = () => {
  return {
    type: actionType.GET_CURRENT_LOCATION_START
  };
};

export const getLocationSuccess = (long, lat) => {
  return {
    type: actionType.GET_CURRENT_LOCATION_OK,
    payload: {long, lat}
  };
};
