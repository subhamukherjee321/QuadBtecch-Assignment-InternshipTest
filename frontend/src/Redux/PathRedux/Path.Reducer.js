import { PATH } from "./Path.ActionsTypes";

const initState = {
  status: false,
};

const pathReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case PATH: {
      return {
        status: payload,
      };
    }
    default:
      return state;
  }
};

export default pathReducer;
