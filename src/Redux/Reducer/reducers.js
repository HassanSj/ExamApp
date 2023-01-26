import { combineReducers } from "redux";
import { statereducer, listener } from "./statereducer";

const reducers = combineReducers({
  biodata: statereducer, //that object can have any name no hard and fast rule
  statecheck: listener,
});

export default reducers;
