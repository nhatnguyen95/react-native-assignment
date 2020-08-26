import { trips } from "constants/MockData";
import ListTripReducer, { initialState } from './reducer';
import { getDataSuccess, getDataFail, getDataAction } from "./actions";

describe("ListTrip reducer", () => {
  it("should capture success after success dispatched", () => {
    const mockData = {data: trips };
    expect(ListTripReducer(initialState, getDataSuccess(trips))).toEqual({...mockData, error: '', isLoading: false})
  })

  it("should capture failed after fail dispatched", () => {
    const mockError = '400';
    expect(ListTripReducer(initialState, getDataFail(mockError))).toEqual({error: mockError, data: {}, isLoading: false})
  })

  it("should not capture if other dispatched", () => {
    expect(ListTripReducer(initialState, getDataAction())).toEqual(initialState)
  })
})