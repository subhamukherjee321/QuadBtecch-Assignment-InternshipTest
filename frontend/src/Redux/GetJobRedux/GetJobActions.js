import axios from "axios";
import {
  GET_DATA,
  GET_ERROR,
  SET_LOADING,
  SET_PAGE,
} from "./GetJobActionTypes";

export const fetchData =
  ({ page = 1, query = "" }) =>
  async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      let searchURL = "";
      if (query) {
        searchURL += `&q=${query}`;
      }

      const res = await axios.get(
        `https://subha-json.vercel.app/jobs?_limit=9&_page=${page}${searchURL}`
      );
      dispatch({ type: GET_DATA, payload: res.data });
      dispatch({ type: SET_LOADING, payload: false });
    } catch (error) {
      dispatch({ type: GET_ERROR });
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

export const setPage = (value) => (dispatch) => {
  dispatch({ type: SET_PAGE, payload: value });
};
