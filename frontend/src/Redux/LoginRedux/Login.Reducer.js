import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  LOGIN_RESET,
  CREATE_ACCOUNT,
} from "./Login.ActionTypes";

const loginData = localStorage.getItem("loginData") || "";

const initState = {
  isAuth: false,
  isError: false,
  createAccount: false,
  data: loginData,
};

const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem("loginData", payload);
      return {
        ...state,
        isAuth: true,
        data: payload,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isError: true,
      };
    }
    case CREATE_ACCOUNT: {
      return {
        ...state,
        createAccount: true,
      };
    }
    case LOGOUT: {
      localStorage.removeItem("loginData");
      return {
        ...state,
        isAuth: false,
        isError: false,
        data: "",
      };
    }
    case LOGIN_RESET: {
      return {
        ...state,
        isAuth: false,
        isError: false,
        createAccount: false,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
