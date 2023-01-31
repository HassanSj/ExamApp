import { combineReducers } from "redux";
import { listener, response, statefilter } from "./statereducer";

const reducers = combineReducers({
  statecheck: listener,
  filter: statefilter,
  apiresponses: response,
});

export default reducers;
