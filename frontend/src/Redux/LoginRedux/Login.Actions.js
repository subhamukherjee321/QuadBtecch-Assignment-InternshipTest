import axios from "axios";
import {
  CREATE_ACCOUNT,
  LOGIN_FAILED,
  LOGIN_RESET,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./Login.ActionTypes";

export const login = (creds) => async (dispatch) => {
  const { email, password } = creds;
  try {
    let userRes = await axios.get("https://subha-json.vercel.app/auth");
    let count = 0;

    for (let i = 0; i < userRes.data.length; i++) {
      if (
        userRes.data[i].email === email &&
        userRes.data[i].password === password
      ) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: userRes.data[i].username,
        });
        return;
      } else if (userRes.data[i].email === email) {
        if (userRes.data[i].password !== password) {
          dispatch({ type: LOGIN_FAILED });
        }
      } else {
        count++;
      }

      if (count === userRes.data.length) {
        dispatch({ type: CREATE_ACCOUNT });
      }
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILED });
  }
};

export const logoutFunc = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const resetLogin = () => async (dispatch) => {
  dispatch({ type: LOGIN_RESET });
};
