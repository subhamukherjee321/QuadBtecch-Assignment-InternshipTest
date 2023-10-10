import {
  GET_DATA,
  GET_ERROR,
  SET_LOADING,
  SET_PAGE,
} from "./GetJobActionTypes";

const initState = {
  loading: false,
  page: 1,
  isError: false,
  data: [],
};

const getDataReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }
    case SET_PAGE: {
      return {
        ...state,
        page: state.page + payload,
      };
    }
    case GET_DATA: {
      return {
        ...state,
        data: payload,
      };
    }
    case GET_ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    default:
      return state;
  }
};

export default getDataReducer;
