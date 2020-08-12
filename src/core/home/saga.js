import { put, takeEvery, call } from "redux-saga/effects";
import { GET_DATA_SUCCESS, GET_DATA, GET_DATA_FAIL } from "./const";
import { getRecruitmentChallenges } from "../../services/Apis";

function* getDataSaga() {
  try {
    const response = yield call(getRecruitmentChallenges);
    yield put({
      type: GET_DATA_SUCCESS,
      data: response,
    });
  } catch (error) {
    yield put({
      type: GET_DATA_FAIL,
    });
  }
}

export function* watchHome() {
  yield takeEvery(GET_DATA, getDataSaga);
}
