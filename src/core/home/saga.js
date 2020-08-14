import { put, takeEvery, call } from "redux-saga/effects";
import { GET_DATA } from "./const";
import { getRecruitmentChallenges } from "services/Apis";
import { getDataFail, getDataSuccess } from "./actions";

export function* getDataSaga() {
  try {
    const response = yield call(getRecruitmentChallenges);
    if (response.status === 200) {
      yield put(getDataSuccess(response?.data || {}));
    } else {
      throw response.status;
    }
  } catch (error) {
    yield put(getDataFail(error));
  }
}

export function* watchHome() {
  yield takeEvery(GET_DATA, getDataSaga);
}
