import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import { getLocationSuccess } from "../actions/getData";
import axios from "axios";

const getUserPosition = () => {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

function* locationSagaWorker(action) {
  //yield console.log(action);
  try {
    let location = yield getUserPosition();
    let longitude = location.coords.longitude;
    let latitude = location.coords.latitude;
    yield put(getLocationSuccess(longitude, latitude));
    //console.log(longitude, latitude);
  } catch (err) {
    console.log(err);
  }
}

export default function* dataSagaWatcher() {
  yield takeEvery(actionType.GET_CURRENT_LOCATION_START, locationSagaWorker);
}
