import { takeEvery, put, call } from "redux-saga/effects";
import { trips } from "constants/MockData";
import { GET_DATA } from "./const";
import { getDataSuccess, getDataFail } from "./actions";
const { watchListTrip, getDataSaga } = require("./saga");

describe("ListTrip saga", () => {
  const genWatchListTrip = watchListTrip();
  it("should wait for every GET_DATA action and call getDataSaga", () => {
    expect(genWatchListTrip.next().value).toEqual(takeEvery(GET_DATA, getDataSaga));
  });

  it("should be done on next iteration", () => {
    expect(genWatchListTrip.next().done).toBeTruthy();
  });

  it("should dispatch getDataSuccess data when get data success", () => {
    const genGetDataSaga = getDataSaga();
    const mockResponse = { status: 200, data: trips };
    const expectedAction = getDataSuccess(mockResponse.data);
    genGetDataSaga.next()
    expect(genGetDataSaga.next(mockResponse).value).toEqual(
      put(expectedAction)
    );
  });

  it("should dispatch getDataFail when get data failed", () => {
    const genGetDataSaga = getDataSaga();
    const mockResponse = { status: 400 };
    const expectedAction = getDataFail(mockResponse.status);
    genGetDataSaga.next();
    expect(genGetDataSaga.next(mockResponse).value).toEqual(
      put(expectedAction)
    );
  });
});
