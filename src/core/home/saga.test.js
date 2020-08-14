import { takeEvery } from "redux-saga/effects";
import { trips } from "constants/MockData";
import { GET_DATA, GET_DATA_SUCCESS } from "./const";
import { getDataSuccess, getDataFail } from "./actions";
const { watchHome, getDataSaga } = require("./saga");

describe("Home saga", () => {
  const genWatchHome = watchHome();
  it("should wait for every GET_DATA action and call getDataSaga", () => {
    expect(genWatchHome.next().value).toEqual(takeEvery(GET_DATA, getDataSaga));
  });

  it("should be done on next iteration", () => {
    expect(genWatchHome.next().done).toBeTruthy();
  });

  it("should dispatch getDataSuccess data when get data success", () => {
    const genGetDataSaga = getDataSaga();
    const mockResponse = { status: 200, data: trips };
    const expectedAction = getDataSuccess(mockResponse.data);
    genGetDataSaga.next();
    expect(genGetDataSaga.next(mockResponse).value.payload.action).toEqual(
      expectedAction
    );
  });

  it("should dispatch getDataFail when get data failed", () => {
    const genGetDataSaga = getDataSaga();
    const mockResponse = { status: 400 };
    const expectedAction = getDataFail(mockResponse.status);
    genGetDataSaga.next();
    expect(genGetDataSaga.next(mockResponse).value.payload.action).toEqual(
      expectedAction
    );
  });
});
