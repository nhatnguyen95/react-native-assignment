import { put, takeEvery, call } from "redux-saga/effects";
import { GET_DATA } from "./const";
import { getEmptyTrip, getTwoTrips, getBigTrips } from "services/Apis";
import { getDataFail, getDataSuccess } from "./actions";

export function* getDataSaga({ tripType = "empty-trip" }) {
  try {
    let api = getEmptyTrip;
    if (tripType === "two-trips") api = getTwoTrips;
    else if (tripType === "big-trips") api = getBigTrips;
    const response = yield call(api);
    if (response.status === 200) {
      yield put(getDataSuccess(response?.data || {}));
    } else {
      throw response.status;
    }
  } catch (error) {
    yield put(getDataFail(error));
  }
}

export function* watchListTrip() {
  yield takeEvery(GET_DATA, getDataSaga);
}
