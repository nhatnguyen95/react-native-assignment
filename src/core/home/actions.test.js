import { trips } from "constants/MockData";
import * as actions from "./actions";
import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAIL } from "./const";

describe("Home actions", () => {
  it("should create an action to get data", () => {
    const expectedAction = {
      type: GET_DATA,
    };
    expect(actions.getDataAction()).toEqual(expectedAction);
  });

  it("should create an action to get data success", () => {
    const expectedAction = {
      type: GET_DATA_SUCCESS,
      data: trips,
    };
    expect(actions.getDataSuccess(trips)).toEqual(expectedAction);
  });

  it("should create an action to get fail message", () => {
    const errorMessage = "errorMessage";
    const expectedAction = {
      type: GET_DATA_FAIL,
      error: errorMessage,
    };
    expect(actions.getDataFail(errorMessage)).toEqual(expectedAction);
  });
});
