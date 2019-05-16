import {takeEvery, put} from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import {
  getLocationSuccess,
  getLocationFail,
  findBathroomsStart,
  findBathroomsFail,
  findBathroomsSuccess
} from "../actions/getData";
import axios from "axios";

let latitude;
let longitude;
const api_url = `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=${latitude}&lng=${longitude}`;

const getUserPosition = () => {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

function* locationSagaWorker(action) {
  //yield console.log(action);
  try {
    let location = yield getUserPosition();
    longitude = location.coords.longitude;
    latitude = location.coords.latitude;
    yield put(getLocationSuccess(longitude, latitude));
    //after getting user current location, initiate api to find bathrooms
    yield put(findBathroomsStart(longitude, latitude));
    //console.log(longitude, latitude);
  } catch (err) {
    console.log(err);
    yield put(getLocationFail());
  }
}

function* bathroomSagaWorker(action) {
  //action.payload.long action.payload.lat
  //yield console.log(latitude, longitude);
  try {
    let result = yield axios.get(
      `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=${
        action.payload.lat
      }&lng=${action.payload.long}`
    );
    //console.log(result);
    yield put(findBathroomsSuccess(result.data));
  } catch (err) {
    console.log(err);
    yield put(findBathroomsFail());
  }
}

export default function* dataSagaWatcher() {
  yield takeEvery(actionType.GET_CURRENT_LOCATION_START, locationSagaWorker);
  yield takeEvery(actionType.GET_BATHROOMS_START, bathroomSagaWorker);
}
