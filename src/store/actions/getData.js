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

export const getLocationFail = () => {
  return {
    type: actionType.GET_CURRENT_LOCATION_FAIL
  };
};

export const findBathroomsStart = (long, lat) => {
  return {
    type: actionType.GET_BATHROOMS_START,
    payload: {long, lat}
  };
};

export const findBathroomsSuccess = data => {
  return {
    type: actionType.GET_BATHROOMS_OK,
    payload: data
  };
};

export const findBathroomsFail = () => ({type: actionType.GET_BATHROOMS_FAIL});

export const nextPage = () => ({type: actionType.NEXT_PAGE});
export const prevPage = () => ({type: actionType.PREVIOUS_PAGE});
export const firstPage = () => ({type: actionType.FIRST_PAGE});
