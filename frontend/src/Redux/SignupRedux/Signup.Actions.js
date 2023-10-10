import axios from "axios";
import {
  SIGNUP_FAILED,
  SIGNUP_RESET,
  SIGNUP_SUCCESS,
} from "./Signup.ActonTypes";

export const signup = (creds) => async (dispatch) => {
  try {
    let res = await axios.post("https://subha-json.vercel.app/auth", creds);
    dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: SIGNUP_FAILED });
  }
};

export const signupReset = () => (dispatch) => {
  dispatch({ type: SIGNUP_RESET });
};
