import { trips } from "constants/MockData";
import HomeReducer, { initialState } from './reducer';
import { getDataSuccess, getDataFail, getDataAction } from "./actions";

describe("Home reducer", () => {
  it("should capture success after success dispatched", () => {
    const mockData = {data: trips };
    expect(HomeReducer(initialState, getDataSuccess(trips))).toEqual({...mockData, error: ''})
  })

  it("should capture failed after fail dispatched", () => {
    const mockError = '400';
    expect(HomeReducer(initialState, getDataFail(mockError))).toEqual({error: mockError, data: {}})
  })

  it("should not capture if other dispatched", () => {
    expect(HomeReducer(initialState, getDataAction())).toEqual(initialState)
  })
})