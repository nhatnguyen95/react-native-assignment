import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAIL } from "./const";

export const getDataAction = () => ({
  type: GET_DATA,
});

export const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  data,
});

export const getDataFail = (error) => ({
  type: GET_DATA_FAIL,
  error,
});
