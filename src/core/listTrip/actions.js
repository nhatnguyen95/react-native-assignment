import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAIL, CLEAR_DATA } from "./const";

export const getDataAction = (tripType) => ({
  type: GET_DATA,
  tripType,
});

export const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  data,
});

export const getDataFail = (error) => ({
  type: GET_DATA_FAIL,
  error,
});

export const clearDataAction = () => ({
  type: CLEAR_DATA,
});
