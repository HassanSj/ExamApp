import { ActionTypes } from "../Constants/ActionTypes";

export const checklistener = (event) => {
  return {
    type: ActionTypes.SET_LISTENER,
    payload: "The color is changed to " + event,
  };
};
export const statelistener = (data) => {
  return {
    type: ActionTypes.SET_RESPONSE,
    payload: data,
  };
};
