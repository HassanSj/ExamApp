//in the action file we perform different sort of action
// like change name
// like change address
// the structure of that action look like this
// actiontype
// {
// type : ""
// payload: ""
// }

import { ActionTypes } from "../Constants/ActionTypes";

export const checklistener = (event) => {
  return {
    type: ActionTypes.SET_LISTENER,
    payload: "The color is changed to " + event,
  };
};
export const statelistener = (Name) => {
  return {
    type: ActionTypes.SELECT_STATE,
    Name,
  };
};
// export const filterstate = (data) => {
//   return {
//     type: ActionTypes.SET_NAME,
//     payload: data,
//   };
// };

// export const filterborough = (data) => {
//   return {
//     type: ActionTypes.SET_FATHER_NAME,
//     payload: data,
//   };
// };
