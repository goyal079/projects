import React, { useReducer } from "react";
import alertReducer from "./AlertReducer";
import AlertContext from "./AlertContext";
import { SET_ALERT } from "../types";
import { RESET_ALERT } from "../types";
const AlertState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);
  const setAlert = (type, msg) => {
    dispatch({ type: SET_ALERT, payload: { type, msg } });
    setTimeout(() => {
      dispatch({ type: RESET_ALERT });
    }, 20000);
  };
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
