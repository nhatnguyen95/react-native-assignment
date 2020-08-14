import { GET_DATA_SUCCESS, GET_DATA_FAIL } from "./const";

export const initialState = {
  data: {},
  error: '',
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: '',
      };
    case GET_DATA_FAIL:
      return {
        ...state,
        data: {},
        error: action.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default homeReducer;
