import {
  combineReducers,
  legacy_createStore,
  applyMiddleware,
  compose,
} from "redux";

import thunk from "redux-thunk";
import signupReducer from "./SignupRedux/Signup.Reducer";
import loginReducer from "./LoginRedux/Login.Reducer";
import getDataReducer from "./GetJobRedux/GetJobsReducer";
import pathReducer from "./PathRedux/Path.Reducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  getData: getDataReducer,
  path: pathReducer
});

const composerEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
  rootReducer,
  composerEnhancer(applyMiddleware(thunk))
);
