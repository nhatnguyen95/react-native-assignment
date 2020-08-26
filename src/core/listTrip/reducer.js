import { GET_DATA_SUCCESS, GET_DATA_FAIL, CLEAR_DATA } from "./const";

export const initialState = {
  data: {},
  error: "",
  isLoading: true,
};

const listTripReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: "",
        isLoading: false,
      };
    case GET_DATA_FAIL:
      return {
        ...state,
        data: {},
        error: action.error,
        isLoading: false,
      };
    case CLEAR_DATA:
      return {
        ...state,
        data: {},
      }
    default:
      return {
        ...state,
      };
  }
};

export default listTripReducer;
