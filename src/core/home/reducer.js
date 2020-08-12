import { GET_DATA_SUCCESS, GET_DATA_FAIL } from "./const";

const initialState = {
  data: {},
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case GET_DATA_FAIL:
      return {
        ...state,
        data: [],
      };

    default:
      return {
        state,
      };
  }
};

export default homeReducer;
